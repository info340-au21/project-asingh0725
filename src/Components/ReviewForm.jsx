import React from "react";
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";

export default function ReviewForm() {
    const buttonStyle = {
        marginLeft: 12
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="textarea">
            <Form.Label>Write your review</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" style={buttonStyle}>Submit</Button>
            <Button variant="danger">Cancel</Button>
        </Form>
    );
}