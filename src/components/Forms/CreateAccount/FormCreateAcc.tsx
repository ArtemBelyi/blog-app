import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { registerUser } from '../../../store/action-creators/user';
import { Formik } from 'formik';
import * as Yup from 'yup';
const styles = require('../Forms.module.scss');

export interface FormRegisterUser {
    username?: string,
    email?: string,
    password?: string,
    repeatPass?: string,
    checkBox?: boolean
}

const initialValues: FormRegisterUser = { 
    username: '',
    email: '',
    password: '',
    repeatPass: '',
    checkBox: false
};

const reduce = (value: any): FormRegisterUser => {
    const result = Object.entries(value).slice(0, 3);
    return Object.fromEntries(result)
 }

const FormCreateAcc = () => {
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
                        username: Yup.string()
                            .min(3, 'Must be 3 characters or more').max(20, 'Must be 20 characters or less').required(),
                        email: Yup.string()
                            .email('Invalid email address').required('Required'),
                        password: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .max(40, 'Must be 40 characters or less')
                            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                            .required(),
                        repeatPass: Yup.string()
                            .oneOf([Yup.ref("password"), null], "Passwords must match").required(),
                        checkBox: Yup.bool()
                            .required().oneOf([true], 'You must agree before submitting')
                    })
                }
                onSubmit={(values) => {
                    dispatch(registerUser({user: reduce(values)}, () => navigate(fromPage, {replace: true})))
                  }}
            >
                {({ handleSubmit, handleChange, handleBlur, values, errors, touched, isValid }) => (
                    <Form className={styles['forms-container']} noValidate onSubmit={handleSubmit}>

                    <div className="w-100 mb-4 text-center fs-5">Create new account</div>

                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.username && !errors.username}
                            isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.username} 
                        </Form.Control.Feedback>
                    </Form.Group>

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

                    <Form.Group className="mb-3" controlId="formBasicPass">
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

                    <Form.Group className="mb-4" controlId="formBasicPassRepeat">
                        <Form.Label>Repeat Password</Form.Label>
                        <Form.Control 
                            type="password"
                            name="repeatPass"
                            placeholder="Repeat password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.repeatPass}
                            isValid={touched.repeatPass && !errors.repeatPass}
                            isInvalid={!!errors.repeatPass}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.repeatPass} 
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicCheckbox">
                        <Form.Check 
                            type="checkbox"
                            name="checkBox"
                            label="I agree to the processing of my personal information"
                            feedback={errors.checkBox}
                            feedbackType="invalid"
                            onChange={handleChange}
                            isInvalid={!!errors.checkBox}

                        />
                    </Form.Group>
                    {error ? <div className="mb-3 text-danger text-center">{error}</div>: error}

                    <Button variant="primary" type="submit" className='w-100 mb-2'>
                        Create
                    </Button>

                    <div className={styles["description"]}>Already have an account? <NavLink to="/signin">Sign Up</NavLink></div>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
export default FormCreateAcc