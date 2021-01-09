import React from "react";
import './style.css';
import { Link } from 'react-router-dom';
import brandImg from "../../assets/bulb.JPG";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" id="top">
            <Link to="/" className="navbar-brand">
                <h1 id="navbarTitle"> 
                    <img id="navbarLogo" className="img-responsive" src={brandImg} alt="miracle theory logo" />
                    Miracle Theory 
                </h1>
                
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <nav className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <nav className="navbar-nav">
                    {/* <Link to="/home" className="nav-item nav-link active">About</Link>
                    <Link to="/home" className="nav-item nav-link">Episodes</Link>
                    <Link to="/home" className="nav-item nav-link">Instagram</Link> */}

                    <a class="nav-link" href="#about">About</a>
                    <a class="nav-link" href="#episodes">Episodes</a>
                    <a class="nav-link" href="#instagram">Instagram</a>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </nav>
            </nav>
        </nav>
    );
}

export default Navbar;