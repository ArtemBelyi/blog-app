import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { loginUser } from '../../../store/action-creators/user';
import { Formik } from 'formik';
import * as Yup from 'yup';
const styles = require('../Forms.module.scss');

export interface ValuesForm {
    email: string,
    password: string,
}

const initialValues: ValuesForm = { 
    email: '',
    password: ''
};

const FormSignIn = () => {
    const {error} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'

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
                    dispatch(loginUser({user: values}, () => navigate(fromPage, {replace: true})))
                  }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
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

                    {error ? <div className="mb-3 text-danger text-center">{error}</div>: error}
    
                    <Button variant="primary" type="submit" className='w-100 mb-2'>
                        Login
                    </Button>

                    <div className={styles["description"]}>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
export default FormSignIn