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
            <span className="red">S</span>
            <span className="orange">u</span>
            <span className="yellow">r</span>
            <span className="green">p</span>
            <span className="blue">r</span>
            <span className="indigo">i</span>
            <span className="violet">s</span>
            <span className="red">e</span>

            {" "}

            <span className="orange">M</span>
            <span className="yellow">e</span>
            <span className="green">!</span>
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

