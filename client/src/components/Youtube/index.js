import React from "react";
import "./style.css"

function Youtube() {
    return (
        <div className="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/05Ry410o6oA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default Youtube;