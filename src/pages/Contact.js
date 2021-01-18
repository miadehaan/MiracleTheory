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
                background: 'linear-gradient(180deg, black, rgb(72, 0, 105), #7104a3, rgb(140, 49, 175) )',
                height: '100%',
                color: '#FFFFFF'
            }}
        >
            <Navbar />
            <div className="container">
                <div className="row" style={{ marginTop: '30px', marginBottom: '30px'}}>
                    <h2 className='col-12' style={{ textAlign: 'center' }} >   
                        Have you survived a near death experience? Share with me. 
                    </h2>
                    <p className='col-12' style={{ textAlign: 'center', fontSize: '20px' }}> 
                        Miracle Theory is a show unlike any other—People coming together and connecting through unimaginable stories
                    </p>
                    
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