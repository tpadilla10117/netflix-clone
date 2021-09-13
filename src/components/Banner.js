import React, { useState, useEffect } from 'react';
import './Banner.css';

import requests from "../Api/Requests";
import axios from "../Api/axios";

/* const BASE_URL = 'https://api.themoviedb.org/3'; */

function Banner() {

    const [ movie, setMovie ] = useState([]); //state for movie img in banner

    useEffect( () => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );

            return request;
        }
        fetchData();
       
    }, []);

    console.log(movie);


/* Truncate the text in description: */
    //n = number of characters
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string
    }



    return (
        <header className="banner" style={ {
            backgroundSize: "cover",
            backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
            backgroundPosition: "center center",
        }}>

        <div className="banner_contents">
            <h1 className="banner_title">Movie Name</h1>

            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_description">{truncate(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 150)}</h1>


        </div>

        <div className="banner--fadeButton" />

       
        

        </header>
    );
};

export default Banner;