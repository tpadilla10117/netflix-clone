import React, {useState, useEffect} from "react";
import db from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import './PlansScreen.css';

function PlansScreen() {

    const [ products, setProducts ] = useState([]);
    const [ subscription, setSubscription ] = useState(null);

/* Creating a user from the selectUser selector in redux store: */
    const user = useSelector(selectUser)

    useEffect( () => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach( async subscription => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_start: subscription.data().current_period_start.seconds,
                });
            });
        });
    }, [user.uid]);



    useEffect( () => {
    /* Query the firestore collection we want - */
        db.collection('products')
        .where('active', '==', true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach( async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();

                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products);
        });

    }, []);

    console.log("Here are my products:", products);
    console.log("Show me subs:", subscription);

/* Function to redirect to Stripe checkout session: */
    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        docRef.onSnapshot( async(snap) => {
        /* Break the object into error and sessionId... */
            const { error, sessionId } = snap.data();

            if (error) {
            //Show error to customer and inspect Cloud Function logs in Firebase console
                alert(`An error occured: ${error.message}`)
            };

            if (sessionId) {
                //We have a session, redirect to Checkout

                const stripe = await loadStripe('pk_test_51JaN51BuiFJcXSOd3XuXZfQr7yffGS4n69CMQ4A7BDVjjqL0GI7TAm1nt2C0Na7OfImk05RN3wG9Db2AOcvTjMAu00IR68FRzJ');

                stripe.redirectToCheckout( {sessionId });
            }

        });

    };

    return (
        <div className="plansScreen">
                {subscription && <p>Renewal Date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()} </p>}
            {/* Have to extract from an object: */}
            {Object.entries(products).map( ([productId, productData]) => {
                // TODO: logic to check if user's subsctription is active:
                const isCurrentPackage = productData.name
                    ?.toLowerCase()
                    .includes(subscription.role);

                return (
                    <div className={`${
                        isCurrentPackage && "plansScreen_plan--disabled"} plansScreen_plan`} key={productId} >
                        <div className="plansScreen_info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)}>
                            {isCurrentPackage ? 'Current Package' : "Subscribe"}
                        </button>
                    </div>
                );
            } )}
        </div>
    );
};

export default PlansScreen;