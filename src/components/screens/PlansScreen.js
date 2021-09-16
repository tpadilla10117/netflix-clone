import React, {useState, useEffect} from "react";
import db from "../../firebase";
import './PlansScreen.css';

function PlansScreen() {

    const [ products, setProducts ] = useState([]);

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

    return (
        <div className="plansScreen">
            {/* Have to extract from an object: */}
            {Object.entries(products).map( ([productId, productData]) => {
                // TODO logic to check if user's subsctription is active:

                return (
                    <div className="plansScreen_plan">
                        <div className="plansScreen_info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button>Subscribe</button>
                    </div>
                );
            } )}
        </div>
    );
};

export default PlansScreen;