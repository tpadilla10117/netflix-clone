import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <header className="banner" style={ {
            backgroundSize: "cover",
            backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
            backgroundPosition: "center center",
        }}>

        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>
        </div>
        

        </header>
    );
};

export default Banner;