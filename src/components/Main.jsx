import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Main.scss"

const YouTubeAPI = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&key=${process.env.YOUTUBE_API_KEY}`
                );
                setVideos(response.data.items);
            } catch (error) {
                console.error('Hay un error al tratar de acceder a los videos', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="card-container">
                {videos.map((video) => (
                    <div key={video.id} className="card-container__main">
                        <a
                            href={`https://www.youtube.com/watch?v=${video.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="card-container__img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                            <h4 className="card-container__h4">{video.snippet.title}</h4>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default YouTubeAPI; 