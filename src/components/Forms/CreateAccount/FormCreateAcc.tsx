import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
const styles = require('./FormCreateAcc.module.scss');

const FormCreateAcc = () => {

    return (
        <Container className='pt-5 d-flex justify-content-center'>
            <Form className={styles['forms-container']}>

            <div className="w-100 mb-4 text-center fs-5">Create new account</div>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPass">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassRepeat">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the processing of my personal information" />
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100 mb-2'>
                Create
            </Button>

            <div className={styles["description"]}>Already have an account? <a href="#">Sign in</a></div>
            </Form>
        </Container>
    )
}
export default FormCreateAcc