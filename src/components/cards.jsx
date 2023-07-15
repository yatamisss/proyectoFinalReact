import React, {useEffect, useState} from "react";

const Card = () => {
    const [data, setData] = useState([]); 
    
    const fetchData = async () => {
        try {
            const response = await fetch ('https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyC85SaQHhHm1kNz5vHWOhFYYjZtLO_PxPI &part=snippet,contentDetails,statistics,status');
            const jsonData = await response.json();
            setData(jsonData);
            console.log(data);
        } catch (error) {
            console.log('error rindasee', error);
        }
    }


    return (
        <>
            <h1>Hola card</h1>
        </>

    );
}

export default Card;