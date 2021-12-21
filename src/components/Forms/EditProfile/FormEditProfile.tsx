import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { editProfile } from '../../../store/action-creators/user';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { Formik, useFormik } from 'formik';
import ModalWindow from '../../Modal/Modal';
import { dataShow } from '../../../types/blog';
import * as Yup from 'yup';
const styles = require('../Forms.module.scss');

export interface ValuesFormEdit {
    username?: string,
    email?: string,
    password?: string,
    img?: string
}

const initialValues: ValuesFormEdit = {
    username: '',
    email: '',
    password: '',
    img: ''
};

const reduce = (value: ValuesFormEdit) => {
    const result = Object.entries(value).filter(elem => elem[1] !== false);
    return Object.fromEntries(result)
  }

const FormEditProfile = () => {
    const [show, setShow] = useState<dataShow>({
        show: false,
        handleClose: () => {},
        heading: '',
        body:''
    });

    const {error} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    const handleClose = () => setShow({...show, show: false});
    const handleShow = (a: dataShow) => setShow(a);

    return (
        <Container className='pt-5 d-flex justify-content-center'>
            <Formik
                initialValues={ initialValues }
                validationSchema={
                    Yup.object({
                        username: Yup.string()
                            .min(3, 'Must be 3 characters or more').max(20, 'Must be 20 characters or less'),
                        email: Yup.string()
                            .email('Invalid email address'),
                        password: Yup.string()
                            .min(6, 'Must be 6 characters or more')
                            .max(40, 'Must be 40 characters or less')
                            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
                        img: Yup.string()
                            .url('Invalid url address')
                    })
                }
                onSubmit={(values, {resetForm}) => {
                    dispatch(editProfile({user: reduce(values)}, () => handleShow({
                        show: true,
                        handleClose: handleClose,
                        heading: 'Успешно!',
                        body:'Изменения сохранены'
                    }), () => resetForm({values: initialValues})))}}
            >
            {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
                <Form className={styles['forms-container']} noValidate onSubmit={handleSubmit}>

                    <div className="w-100 mb-4 text-center fs-5">Edit Profile</div>
        
                    <Form.Group className="mb-3" controlId="formBasicUsername">
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
                        <Form.Label>New password</Form.Label>
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
        
                    <Form.Group className="mb-4" controlId="formAvatarImg">
                        <Form.Label>Avatar image (URL)</Form.Label>
                        <Form.Control 
                            type="text"
                            name="img"
                            placeholder="https://"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.img}
                            isValid={touched.img && !errors.img}
                            isInvalid={!!errors.img}
                        />
                    </Form.Group>
                    {error ? <div className="mb-3 text-danger text-center">{error}</div>: error}
        
                    <Button variant="primary" type="submit" className='w-100 mb-2'>
                        Save
                    </Button>
                </Form>
            )} 
            </Formik>
            <ModalWindow dataModal={show}/>
        </Container>
    )
}
export default FormEditProfile