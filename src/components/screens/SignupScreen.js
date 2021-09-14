import React, { useEffect, useState } from "react";
import './SignupScreen.css';

function SignupScreen () {


    const register = (event) => {
        event.preventDefault();
    };

    const signIn = (event) => {
        event.preventDefault();
    };



    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder="Password" />
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4> <span className="signupScreen_gray">New to Netflix? </span>
                <span className="signupScreen_link" onClick={register}>Sign Up now.</span>
                </h4>
            </form>
        </div>
    );
};

export default SignupScreen;