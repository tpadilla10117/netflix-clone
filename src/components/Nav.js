import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {


    const [show, handleShow] = useState(false); //state for nav animation

/* Handle for the navbar transition animations: */
    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

/* useEffect hook to listen to window scroll for navbar animations: */
    useEffect( () => {
        window.addEventListener("scroll", transitionNavbar);

    /* Cleanup the function: */
        return () => window.removeEventListener("scroll", transitionNavbar);

    }, []);


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">

                <img 
                    className="nav_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                    />

                <img 
                    className="nav_avatar"
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt=""
                    />

            </div>
        
        </div>
    );
};

export default Nav;