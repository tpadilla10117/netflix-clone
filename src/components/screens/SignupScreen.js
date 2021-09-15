import React, { useRef } from "react";
import './SignupScreen.css';
import {auth} from '../../firebase';

function SignupScreen () {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

/* Function for registering a new user: */
    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then( (authUser) => {
            console.log("Here is my user:", authUser)
        }).catch(error => {
            alert(error.message)
        }); //firebase func points to current value
    };

/* Function for signing in a registered user: */
    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then( (authUser) => {
            console.log("Here is my signed in user:", authUser)
        })
        .catch( (error) => {
            alert(error.message);
        });
    };



    return (
        <div className="signupScreen">
            
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" ref={emailRef}/>
                <input placeholder="Password" type="password" ref={passwordRef}/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4> <span className="signupScreen_gray">New to Netflix? </span>
                
                <span className="signupScreen_link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>

        </div>
    );
};

export default SignupScreen;