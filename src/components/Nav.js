import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {


    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }


    return (
        <div className="nav nav_black">
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