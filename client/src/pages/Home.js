import React from "react";
import "./home.css";
import Youtube from "../components/Youtube";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div className="homePg">
            <Navbar />
                {/* <section>
                    <h1 className="title"> Miracle Theory </h1>
                </section> */}

            <div className="row">
                <section className="col-12">
                    <h2> Checkout the Latest Video: </h2>
                    <Youtube />
                </section>
            </div>
        </div>
    );
}

export default Home;
