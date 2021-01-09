import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Youtube from "../components/Youtube";
import Instagram from "../components/Instagram"
import Footer from "../components/Footer";
import UpArrow from "../assets/chevron-up-solid.svg"
import Button from "react-bootstrap/Button"

function Home() {
    return (
        <div className="homePg">
            <Navbar />

            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                <div className="container mainContent">
                    <div className="row">
                        <section className="col-12">
                            <About /> 
                            <Youtube />
                            <Instagram />
                        </section>
                    </div>

                    <Button id="backToTop" variant="light">
                        <a class="nav-link" href="#top"> <img src={UpArrow} alt="FontAwesome Up Arrow"/> </a>
                    </Button>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
