import React from "react";
import "./style.css";
import graphic from "../../assets/bulb.JPG";
import headshot from "../../assets/miracleTheoryGraphic.JPG"

function About() {
    return (
        <div className="container" id="about">
            <div className="row">
                <h2 className="col-12 aboutTitle"> About The Show </h2>

                <div className="col-md-6 col-12 justify-content-center" >
                    <img className="bulbImg" src={graphic} alt="brand graphic" />
                </div>
                
                <p className="showParagraph col-md-6 col-12">
                    Have you looked death in the face and survived!? Join me as I find people in 
                    my community who have encountered incredulous life altering experiences and 
                    walked away to tell their story! Miracle Theory is the show where life and 
                    death cross paths, it's where everyday people converse with me about their most 
                    extraordinary moments. In a world so divided, it's our stories that bring us together. 
                    We must remind one another that compassion is key and that we still have so much to 
                    learn from each other. Miracle Theory is just that--is it a miracle that YOU survived?    
                </p>
                
            </div>

            <div className="row" id="section2">
                <h2 className="col-12 aboutTitle"> About The Host </h2>

                <div className="col-md-6 col-12 justify-content-center" >
                    <img className="headshot" src={headshot} alt="brand graphic" />
                </div>
                
                <p className="trinParagraph col-md-6 col-12">
                    California baby turned Portland native. My dream is to be a physician assistant with a 
                    content creator twist. I love yoga, skiing, emergency medicine and leopard print. My favorite
                    food is avocado toast and I love learning about others. I love listening to podcasts and 
                    finding new people to talk to. Our world is divided but we all have stories! Catch me in 
                    scrubs or hoop earrings planning my next instagram post. I am so grateful for this platform 
                    that exists to create relatable content for the world to see. I have so many big ideas and I 
                    would be honored to hear your story! 
                </p>
                
            </div>

            <div className="row" id="section3">
                <div className="col-12" >
                    <h2 className="aboutTitle"> Fun Facts About The Host </h2>
                </div>

                <span className="col-md-3" />
                <ul className="funFacts col-md-6 col-12">
                    <li> <span id="firstItem"> 1. </span> I spent 5 years of my childhood in Singapore.  </li>
                    <li> <span id="secondItem"> 2. </span> I am certified in phlebotomy (blood draw).  </li>
                    <li> <span id="thirdItem"> 3. </span> I have a brindle pit-bull and her name is Mary Jane. </li>
                </ul>
                <span className="col-md-3" />

                
            </div>
        </div>
    );
}

export default About;