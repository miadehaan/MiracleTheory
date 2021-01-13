import React from "react";
import "./style.css";
import graphic from "../../assets/miracleTheoryGraphic.JPG";

function About() {
    return (
        <div className="container" id="about">
            <div className="row">
                <h2 className="col-12 aboutTitle"> About </h2>

                <div className="col-md-6 col-12" >
                    <img className="aboutImg col-12" src={graphic} alt="brand graphic" />
                </div>
                
                <p className="aboutParagraph col-md-6 col-12">
                    Have you looked death in the face and survived!? Join me as I find people in 
                    my community who have encountered incredulous life altering experiences and 
                    walked away to tell their story! Miracle Theory is the show where life and 
                    death cross paths, it's where everyday people converse with me about their most 
                    extraordinary moments. In a world so divided, it's our stories that bring us together. 
                    We must remind one another that compassion is key and that we still have so much to 
                    learn from each other. Miracle Theory is just that--is it a miracle that YOU survived?    
                </p>
                
            </div>
        </div>
    );
}

export default About;