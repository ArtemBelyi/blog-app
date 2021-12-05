import React from 'react';
import Card from '../Card/Card';
import { Container } from 'react-bootstrap';

const CardList = () => {

    return (
        <Container className='h-100'>
            <div className="item m-3 d-flex justify-content-center"><Card /></div>
            <div className="item m-3 d-flex justify-content-center"><Card /></div>
            <div className="item m-3 d-flex justify-content-center"><Card /></div>
            <div className="item m-3 d-flex justify-content-center"><Card /></div>
            <div className="item m-3 d-flex justify-content-center"><Card /></div>
        </Container>
    )
}
export default CardList