import React from "react";
import YouTube from 'react-youtube';
import "./style.css"

function Youtube(props) {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    function videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    
    return (
        <div className="youtubeContainer">
            {/* <iframe title="miracle theory episode 1" width="560" height="315" src="https://www.youtube.com/embed/05Ry410o6oA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <YouTube className="video" videoId={props.videoId} opts={opts} onReady={videoOnReady} />
        </div>
    );
}

export default Youtube;