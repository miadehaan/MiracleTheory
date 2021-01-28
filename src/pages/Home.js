import React from "react";
import "./home.css";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Youtube from "../components/Youtube";
// import Instagram from "../components/Instagram"
import Footer from "../components/Footer";
import UpArrow from "../assets/chevron-up-solid.svg";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from "react-bootstrap/Tooltip";

function Home() {
    return (
        <div className="homePg">
            <Navbar />

            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" style={{ marginBottom: '200px' }}>
                <div className="container mainContent">
                    <div className="row">
                        <section className="col-12" style={{ marginBottom: '200px' }}>
                            <About /> 
                        </section>

                        <section className="col-12">
                            <h2 className="col-12" id="episodes"> Checkout My Latest Episodes </h2>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    {/* Episode 1 */}
                                    <Youtube videoId={'05Ry410o6oA'}  />
                                </div>

                                <div className="col-md-6 col-12">
                                    {/* Episode 2 */}
                                    <Youtube videoId={'0dz8dbq3iCU'} />
                                </div>
                            </div>
                            
                        </section>

                        {/* <section className="col-12"> */}
                            {/* <Instagram instaUrl={'https://www.instagram.com/p/CHQU0_sD8nG/?utm_source=ig_web_copy_link'} /> */}
                        {/* </section> */}
                    </div>

                    {/* Back to Top Button */}
                    <OverlayTrigger
                        key={'top'}
                        placement={'top'}
                        overlay={
                            <Tooltip>
                                Back To Top
                            </Tooltip>
                        }
                    >
                        <a id="backToTop" className="nav-link" href="#top"> <img src={UpArrow} alt="FontAwesome Up Arrow"/> </a>
                    </OverlayTrigger>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
