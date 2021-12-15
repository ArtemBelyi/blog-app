import React from 'react';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
const styles = require('../Forms.module.scss');

interface ValuesForm {
    email: string,
    password: string,
}

const initialValues: ValuesForm = { 
    email: '',
    password: ''
};

const FormSignIn = () => {

    return (
        <Container className='pt-5 d-flex justify-content-center'>
            <Formik
                initialValues={ initialValues }
                validationSchema={
                    Yup.object({
                        email: Yup.string()
                            .email('Invalid email address').required('Required'),
                        password: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .max(40, 'Must be 40 characters or less')
                            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                            .required()
                    })
                }
                onSubmit={(values) => {
                    console.log(JSON.stringify(values, null, 2));
                  }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, errors, touched, isValid }) => (
                    <Form className={styles['forms-container']} noValidate onSubmit={handleSubmit}>

                    <div className="w-100 mb-4 text-center fs-5">Sign In</div>
    
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                    </Form.Group>
    
                    <Form.Group className="mb-4" controlId="formBasicPass">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            isValid={touched.password && !errors.password}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
    
                    <Button variant="primary" type="submit" className='w-100 mb-2'>
                        Login
                    </Button>
    
                    <div className={styles["description"]}>Don't have an account? <a href="#">Sign in</a></div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
export default FormSignIn