import React, { useState } from 'react'
// import { Axios, db } from '../firebase/firebaseConfig'
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import firebase from "../firebase.js";
import nodemailer from "nodemailer";

function Contact() {

    const [formData, setFormData] = useState({});

    // Firestore
    const docRef = firebase.firestore().collection("emails");

    // Nodemailer Transporter (SMTP)
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, //587 for false
        auth: {
            user: 'miracletheorycommunity@gmail.com',
            pass: '**********'
        }
    });

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // Once submitted, save user inputs to the DB
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);

        // Send email to notify of new message
        sendEmail();

        // Save info to Firestore DB 
        // Validation for all input fields
        if (formData.name === "" || formData.email === "" || formData.message === "" ) {
            alert("Please fill out all fields before submitting.");
        }
        else {
            docRef.add({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timeStamp: new Date(),
            }).then( () => {
                console.log("Information saved to DB!");
                alert("Your information has been submitted. Thank you!");
            }).catch( (error) => {
                console.log("Got an error: ", error)
            });
        }

        // Reset state & input fields on form
        setFormData({
            name: '',
            email: '',
            message: '',
        });

    }
    
    const sendEmail = () => {
    //     Axios.post(
    //         'https://us-central1-your-app-name.cloudfunctions.net/submit',
    //         formData
    //     )
    //         .then(res => {
    //         db.collection('emails').add({
    //             name: formData.name,
    //             email: formData.email,
    //             message: formData.message,
    //             time: new Date(),
    //         })
    //         })
    //         .catch(error => {
    //         console.log(error)
    //         })
    }

    return (
        <div className="contactPg"
            style={{
                // background: 'linear-gradient(180deg, black, rgb(72, 0, 105), #7104a3, rgb(140, 49, 175) )',
                background: 'linear-gradient(180deg, #eca0ff, #aab2ff,  #84ffc9 )',
                height: '100%',
                color: '#FFFFFF',
                fontFamily: "'Major Mono Display', monospace "
            }}
        >
            <Navbar />
            <div className="container" style={{ marginBottom: '200px' }}>
                <div className="row" style={{ marginTop: '100px',}}>
                    <span className="col-2" />
                    <div className='col-8'>
                        <h3 style={{ textAlign: 'center', textShadow: '2px 2px 2px black', marginBottom: '0', paddingBottom: '10px' }} >   
                            Have you survived a near death experience?
                        </h3>
                        <h3 style={{ textAlign: 'center', textShadow: '2px 2px 2px black', marginTop: '0', paddingTop: '0' }} >   
                            Share with me. 
                        </h3>
                        <p style={{ textAlign: 'center', fontSize: '16px', textShadow: '1px 1px 1px black', fontFamily: " 'Quicksand', sans-serif "  }}> 
                            <i>   
                                Miracle Theory is a show unlike any other—People coming together and connecting through unimaginable stories
                            </i>
                        </p>
                    </div>
                    <span className="col-2" />
                    
                    <span className="col-sm-2" />
                    <div className="col-sm-8 col-12">
                        <ContactForm 
                            handleInputChange={handleInputChange} 
                            handleSubmit={handleSubmit} 
                            input={formData}
                        />
                    </div>
                    <span className="col-sm-2" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;