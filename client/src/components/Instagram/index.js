import { PromiseProvider } from "mongoose";
import React from "react";
import InstagramEmbed from 'react-instagram-embed';
// import './style.css';

function Instagram(props) {
    return (
        <div id="instagram">
            <h2> Latest Posts! </h2>

            {/* Must use a Client Access Token */}
            <InstagramEmbed
                url={props.instaUrl}
                clientAccessToken='123|456'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </div>
    );
}

export default Instagram;