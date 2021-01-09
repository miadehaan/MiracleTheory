import React from "react";
import "./style.css"

function Youtube() {
    // API Key: AIzaSyAUsT5aRBzZWBV2iphn75tJaXNzVCs_Byk

    
    return (
        <div className="youtube" id="episodes">
            <div className="container">
                <div className="row">
                    <h2 className="col-12"> Checkout the First Episode: </h2>
                    <div className="iframe-container col-12">
                        <iframe title="miracle theory episode 1" width="560" height="315" src="https://www.youtube.com/embed/05Ry410o6oA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Youtube;