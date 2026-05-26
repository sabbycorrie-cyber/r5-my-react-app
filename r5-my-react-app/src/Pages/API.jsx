import React, { useEffect, useState } from "react";

function API() {
    const [joke, setJoke] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch( "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    setJoke(data);
} 
catch (error) {
    console.log("Error fetching data:", error);
    }
};

const generateJoke = () => {
    fetchData();
}

    return (
        <div className="app">

            <div className="title-box">
            <h1>Jokes for Dayz</h1>
            </div>

            <button onClick={generateJoke} className="joke-btn">
            Hit Me With Another!
            </button>

            <div className="joke-card">

            <p className="setup">
            <span>The Setup:</span>{joke.setup}
            </p>

            <p className="punchline">
            <span>The Punchline:</span>{joke.punchline}
            </p>

        </div>
        </div>
    );
}

export default API;

