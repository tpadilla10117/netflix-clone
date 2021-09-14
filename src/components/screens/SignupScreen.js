import React, { useEffect, useState, useRef } from "react";
import './SignupScreen.css';
/* import { auth } from '../../firebase.js'; */


function SignupScreen () {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (event) => {
        event.preventDefault();

        /* auth.createUserWithEmailAndPassword() */
    };

    const signIn = (event) => {
        event.preventDefault();
    };



    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" ref={emailRef}/>
                <input placeholder="Password" ref={passwordRef}/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4> <span className="signupScreen_gray">New to Netflix? </span>
                <span className="signupScreen_link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignupScreen;