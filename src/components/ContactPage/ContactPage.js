import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./ContactPage.css"

export default function ContactPage() {
    // TODO
    const [value, setValue] = useState("");

    const onInput = ({target:{value}}) => setValue(value);

    const onFormSubmit = e => {
          e.preventDefault()
          console.log(value)
          setValue("")
        }

    return (
        <>
            <div id="contact" className="contact">
                <h1>Contact</h1>
                <div className="contact-container">
                <div className="form-container">
                <Form onSubmit={onFormSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            placeholder="Enter name" 
                            type="text"
                            value={value}
                            onChange={({target:{value}}) => setValue(value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control placeholder="Enter subject" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control placeholder="Enter message" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="This message is urgent!" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
                </div>
            </div>
        </>
    );
}