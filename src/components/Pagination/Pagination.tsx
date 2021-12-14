import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Article } from '../../types/blog';

interface pageState {
    page: number
    amountPage: Article[][]
    showPage: Function
}
const PaginationBlog = (props: pageState) => {
    const { amountPage, showPage, page } = props

    const isActive = (a: number, b: number): boolean => {
        return a === b ? true : false
    }
  
    return (
        <Pagination size="sm" className='pt-2 d-flex justify-content-center'>
            <Pagination.Prev 
                disabled={isActive(page, 0)}
                onClick={() => showPage(page - 1)}
            />
                {amountPage.map((item, index) => 
                    <Pagination.Item 
                        key={index} 
                        onClick={() => showPage(index)}
                        active={isActive(index, page)}
                    >
                        {index + 1}
                    </Pagination.Item>
                )}
            <Pagination.Next 
                disabled={isActive(page, amountPage.length - 1)}
                onClick={() => showPage(page + 1)}
            />
        </Pagination>
    )
}
export default PaginationBlog