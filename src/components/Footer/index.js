import React from "react";
import "./style.css";
import instaLogo from "../../assets/instagram-brands.svg"
import youtubeLogo from "../../assets/youtube-brands.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <h5 className="col-12" > 
                        Have a question or want to be a part of my show? <br/>
                        <a id="MTemail" href="mailto:MIRACLETHEORYCOMMUNITY@GMAIL.COM"> MIRACLETHEORYCOMMUNITY@GMAIL.COM </a>     
                    </h5>

                    <section className="socials col-12">
                        <a className="instagramLink" href="https://www.instagram.com/miracletheory/" > <img src={instaLogo} alt="instagram link" target="_blank" /> </a>
                        <a className="youtubeLink" href="https://www.youtube.com/channel/UCsQYveQtFLBe3mb4k2QqhXw" > <img src={youtubeLogo} alt="youtube link" target="_blank" /> </a>
                    </section>
                    <hr />
                    <section className="col-12">&#169; Copyright 2021 Miracle Theory | Designed and Developed by <a href="mailto:mariannedehaan14@gmail.com">Mia de Haan</a> </section>
                </div>
            </div>
        </footer>
    );
}

export default Footer;