import React from "react";
import "./landing.css";
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="landing" >
            <div className="container"> 
                <div className="row">
                    <h1 className="col-12" > Miracle Theory </h1>
                    <p> fight or flight stories with some really cool people </p>
                    <Link to="/home"className="nav-item nav-link" >
                        <div className="bouncy" >
                            <button className="welcomeBtn" > Welcome </button>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Landing;