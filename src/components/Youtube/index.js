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
        // event.target.pauseVideo();

        // console.log(event.target);
        event.target.stopVideo();
    }
    
    return (
        <div className="youtubeContainer">
            <YouTube className="video" videoId={props.videoId} opts={opts} onReady={videoOnReady} />
        </div>
    );
}

export default Youtube;