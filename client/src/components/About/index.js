import React from "react";
import "./style.css";
import graphic from "../../assets/miracleTheoryGraphic.JPG";

function About() {
    return (
        <div className="container" id="about">
            <div className="row">
                <h2 className="col-12 aboutTitle"> About </h2>

                <img className="aboutImg col-md-6 col-12" src={graphic} alt="brand graphic" />
                <p className="aboutParagraph col-md-6 col-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
            </div>
        </div>
    );
}

export default About;