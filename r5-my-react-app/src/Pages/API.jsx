import React, { useEffect, useState } from "react";

function API() {
    const [comic, setComic] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch("https://pnpninja-daily-comicstrips-v1.p.rapidapi.com/getComicLinks",
            {
            method: "GET",
            header: {
                "x-rapid-key": "ce722c04c2msh6b0349e3d597d34p10f229jsnae82c7deeab6",
                "x-rapidapi-host": "https://pnpninja-daily-comicstrips-v1.p.rapidapi.com"
            }
        }
    );
    const data = await response.json();
    console.log(data);
    setComic(data);
} catch (error) {
    console.log("Error fetching data:", error);
    }
};

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>API</h1>
            <button onClick={fetchData}>Generate Comic</button>
            <p>Setup: {comic?.strip}</p>
            <p>Comic: {comic?.image || ""}</p>
        </div>
    );
}

export default API;

