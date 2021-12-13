import React from 'react';
import { Pagination } from 'react-bootstrap';


const PaginationBlog = () => {
  
    return (
        <Pagination size="sm" className='pt-2 d-flex justify-content-center'>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
        </Pagination>
    )
}
export default PaginationBlog