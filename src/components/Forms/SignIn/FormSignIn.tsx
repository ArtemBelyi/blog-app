import React from 'react';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
const styles = require('../Forms.module.scss');

const FormSignIn = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };

    return (
        <Container className='pt-5 d-flex justify-content-center'>
            <Form className={styles['forms-container']} noValidate validated={validated} onSubmit={handleSubmit}>

            <div className="w-100 mb-4 text-center fs-5">Sign In</div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    required 
                    type="email"
                    placeholder="Enter email" 
                />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPass">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    required
                    type="password"
                    placeholder="Password" 
                />
                <Form.Control.Feedback type="invalid">
                    You password needs to be at least 6 characters 
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100 mb-2'>
                Login
            </Button>

            <div className={styles["description"]}>Don't have an account? <a href="#">Sign in</a></div>
            </Form>
        </Container>
    )
}
export default FormSignIn