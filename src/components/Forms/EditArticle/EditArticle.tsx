import React from 'react';
import { NewArticle, dataShow } from '../../../types/blog';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { editArticle } from './service';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import ModalWindow from '../../Modal/Modal'
const styles = require('../Forms.module.scss');

const EditArticle = () => {
    const {article} = useTypedSelector(state => state.blog)
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const defaultData: NewArticle = {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList
    }
    const [data, setData] = useState<NewArticle>(defaultData);
    const [show, setShow] = useState<dataShow>({
        show: false,
        handleClose: () => {},
        heading: '',
        body:''
    });

    const handleChangeInputTags = (index: any, e: any, data: NewArticle) => {
        const values = [...data.tagList]
        values[index] = e.target.value
        setData({
            ...data, tagList: values
        })
    }

    const addTag = (data: NewArticle) => {
        const tags = [...data.tagList]
        tags.push('')
        setData({
            ...data, tagList: tags
        })
    }

    const removeTag = (index: number, data: NewArticle) => {
        const values = [...data.tagList]
        values.splice(index, 1)
        setData({
            ...data, tagList: values
        })
    }
    const handleClose = () => {
        setShow({...show, show: false})
        navigate(fromPage, {replace: true})
    }
    const handleShow = (a: dataShow) => setShow(a);

    const form = useFormik({
        initialValues: {},
        onSubmit: () => {
            editArticle({article: data}, article.slug).then(res => {
                if(res.ok) {
                    handleShow({
                        show: true,
                        handleClose: handleClose,
                        heading: 'Успешно!',
                        body:'Изменения внесены'
                    })
                } else {
                    handleShow({
                        show: true,
                        handleClose: handleClose,
                        heading: 'Ошибка сохранения!',
                        body:'Ошибка при сохранении изменений'
                    })
                }
            })
        }
    })

    return (
        <Container className='pt-5 d-flex justify-content-center'>
            <Form className={styles['new-articles-container']} onSubmit={form.handleSubmit}>

            <div className="w-100 mb-4 text-center fs-5">Edit article</div>

            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Title"
                    value={ data.title }
                    onChange={e => setData({...data, title: e.target.value})}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Short description</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Short description"
                    value={ data.description }
                    onChange={e => setData({...data, description: e.target.value})}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextBody">
                <Form.Label>Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Text"
                        value={ data.body }
                        onChange={e => setData({...data, body: e.target.value})}
                        style={{ height: '120px' }}
                    />
            </Form.Group>

            <Row className="align-items-end mb-3">
                <Col xs="auto">
                    <Form.Group controlId="formBasicTags">
                        <Form.Label>Tags</Form.Label>
                        {data.tagList.map((item, index) => {
                            return (
                                <div className='d-flex align-items-center mt-1' key={index}>
                                <Form.Control
                                    type="text"
                                    placeholder="Tag" 
                                    value={item}
                                    name='tagList'
                                    onChange={e => handleChangeInputTags(index, e, data)}
                                />
                                <Col md={{ span: 3, offset: 1 }}>
                                    <Button variant="outline-danger" onClick={() => removeTag(index, data)}>Delete</Button>
                                </Col>
                            </div>
                            )
                        })}
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Button variant="outline-primary" onClick={() => addTag(data)}>Add tag</Button>
                </Col>
            </Row>

            <Button variant="primary" type="submit" className='w-50 mb-2'>
                Create
            </Button>
            </Form>
            <ModalWindow dataModal={show}/>
        </Container>
    )
}
export default EditArticle