import React from 'react';
import { NewArticle } from '../../../types/blog';
import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
const styles = require('../Forms.module.scss');

const CreateNewArticle = () => {
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState<NewArticle>({
        slug: '',
        title: '',
        description: '',
        body: '',
        tagList: ['']
    });

    const onConsole = (e: any) => {
        setData({
            ...data, title: e.target.value
        })
    }

    const handleChangeInput = (index: any, e: any) => {
        const values = [...data.tagList]
        values[index] = e.target.value
        setData({
            ...data, tagList: values
        })
    }

    const addTag = () => {
        const tags = [...data.tagList]
        tags.push('')
        setData({
            ...data, tagList: tags
        })
    }

    const removeTag = (index: number) => {
        const values = [...data.tagList]
        values.splice(index, 1)
        setData({
            ...data, tagList: values
        })
    }

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
            <Form className={styles['new-articles-container']} noValidate validated={validated} onSubmit={handleSubmit}>

            <div className="w-100 mb-4 text-center fs-5">Create new article</div>

            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    placeholder="Title"
                    value={data.title}
                    onChange={onConsole}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Short description</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Short description" 
                    defaultValue=""
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextBody">
                <Form.Label>Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Text"
                        style={{ height: '120px' }}
                        defaultValue=""
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
                                    onChange={e => handleChangeInput(index, e)}
                                />
                                <Col md={{ span: 3, offset: 1 }}>
                                    <Button variant="outline-danger" onClick={() => removeTag(index)}>Delete</Button>
                                </Col>
                            </div>
                            )
                        })}
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Button variant="outline-primary" onClick={addTag}>Add tag</Button>
                </Col>
            </Row>

            <Button variant="primary" type="submit" className='w-50 mb-2'>
                Create
            </Button>
            </Form>
        </Container>
    )
}
export default CreateNewArticle