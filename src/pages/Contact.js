import React, { useState } from 'react'
import { Axios, db } from '../firebase/firebaseConfig'
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {

    const [formData, setFormData] = useState({})

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

        // console.log(formData);
    }
    const handleSubmit = event => {
        event.preventDefault();

        // sendEmail();
        setFormData({
            name: '',
            email: '',
            message: '',
        })

        console.log(formData);
    }
    
    const sendEmail = () => {
        Axios.post(
            'https://us-central1-your-app-name.cloudfunctions.net/submit',
            formData
        )
            .then(res => {
            db.collection('emails').add({
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: new Date(),
            })
            })
            .catch(error => {
            console.log(error)
            })
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
                    
                    <span className="col-2"/>
                    <ContactForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                    <span className="col-2"/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;