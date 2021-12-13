import React from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import PaginationBlog from '../Pagination/Pagination';
import { Container, Pagination } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchArticlesNoAuth } from '../../store/action-creators/articles';

const CardList = () => {
    const {articles, loading, error} = useTypedSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArticlesNoAuth())
    }, [dispatch])

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>Ошибка загрузки</h1>

    console.log(articles)

    return (
        <Container className='d-flex flex-column justify-content-between' style={{height: '850px'}}>
            <div>
                {articles.slice(0, 5).map(article => {
                    return  <div className="item m-3 d-flex justify-content-center" key={article.slug}><Card article={article}/></div>
                })}
            </div>
            <PaginationBlog />
        </Container>
    )
}
export default CardList