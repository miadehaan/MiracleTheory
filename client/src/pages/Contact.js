import React from "react";
import { Form } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
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
                    <Form 
                        className="col-8"
                        style={{
                            margin: '30px',
                            fontSize: '30px'
                        }}
                    >
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        {/* <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group> */}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                        </Form.Group>
                    </Form>
                    <span className="col-2"/>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;