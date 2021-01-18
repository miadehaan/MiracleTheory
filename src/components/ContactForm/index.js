import React from "react";
import { Form, Button } from "react-bootstrap";


function ContactForm(props) {


    return (
        <Form style={{  margin: '30px', fontSize: '30px' }} >
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="name" value={props.input.name || ""} placeholder="name" onChange={props.handleInputChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" value={props.input.email || ""} placeholder="name@example.com" onChange={props.handleInputChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" value={props.input.message || ""} as="textarea" rows={4} onChange={props.handleInputChange} />
            </Form.Group>
            <Button variant="light" type="submit" onClick={props.handleSubmit} >
                Share Your Story
            </Button>
        </Form>
    )
}

export default ContactForm;