import React from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import { Container } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchTicketsNoAuth } from '../../store/action-creators/articles';

const CardList = () => {
    const {articles, loading, error} = useTypedSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTicketsNoAuth())
    }, [dispatch])

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>Ошибка загрузки</h1>

    console.log(articles)

    return (
        <Container className='h-100'>
            {articles.slice(0, 5).map(article => {
                return  <div className="item m-3 d-flex justify-content-center" key={article.slug}><Card article={article}/></div>
            })}
        </Container>
    )
}
export default CardList