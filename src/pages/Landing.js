import React from "react";
import "./landing.css";
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeInRight, fadeInLeft } from 'react-animations';
import playNow from "../assets/playNow.png";

function Landing() {

    // react-animations
    const FadeInRight = styled.div`
        animation: 2s ${keyframes`${fadeInRight}`}
    `;
    
    const FadeInLeft = styled.div`
        animation: 2s ${keyframes`${fadeInLeft}`}
    `;
    return (
        <div className="landing" >
            <div className="container"> 
                <div className="row">
                    <FadeInRight className="col-12"> 
                        <h1 id="title"> Miracle Theory </h1>  
                        <p id="slogan" className="col-12"> fight or flight stories with some really cool people </p>
                    </FadeInRight>
                    
                    <FadeInLeft className="col-12" >
                        <Link to="/home" className="nav-item nav-link buttonContainer" >
                            <img src={playNow} alt="" className="playBtn" />
                        </Link>
                    </FadeInLeft>

                </div>
            </div>

        </div>
    );
}

export default Landing;