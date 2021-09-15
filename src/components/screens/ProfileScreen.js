import React from 'react';
import {Nav} from "../../utils";
import "./ProfileScreen.css"
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function ProfileScreen () {

    const user = useSelector(selectUser); //we grab the userSlice to populate the logged in users info


    return (
        <div className="profileScreen">
            <Nav />

            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img
                        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                        alt=""
                    />
                </div>
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProfileScreen;