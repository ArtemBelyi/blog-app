import React from 'react';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PaginationBlog from '../Pagination/Pagination';
import { Container } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchArticlesNoAuth, fetchArticlesAuth } from '../../store/action-creators/articles';
import { Article } from '../../types/blog';

function compare (state: Article[]) {
    return state.sort((a: Article, b: Article) => (a.createdAt < b.createdAt) ? 1 : ((b.createdAt < a.createdAt) ? -1 : 0))
}

const splitArray = (arr: Article[]) => {
    const size = 5
    let subarray = []
    for (let i = 0; i <Math.ceil(arr.length/size); i++){
        subarray[i] = arr.slice((i*size), (i*size) + size);
    }
    return subarray
}

const CardList = () => {
    const {articles, loading, error} = useTypedSelector(state => state.articles)
    const {isAuth} = useTypedSelector(state => state.user)
    const [page, setPage] = useState(0)
    const dispatch = useDispatch()

    const sortArticle = compare([...articles])
    const showArticle = splitArray(sortArticle)


    useEffect(() => {
        isAuth ? dispatch(fetchArticlesAuth()) : dispatch(fetchArticlesNoAuth())
    }, [isAuth])

    const showPage = (index: number) => {
        setPage(index)
    }
    console.log(articles)

    const errorMessage = error ? <h1>Идет загрузка</h1> : null
    const loadingMessage = loading ? <h1>Идет загрузка</h1> : null
    const articleList = articles.length !== 0 ?  showArticle[page].map(article => {
        return  <div className="item m-3 d-flex justify-content-center" key={`${article.slug}${Math.random()}`}><Card article={article}/></div>
    }) : null

    return (
        <Container className='d-flex flex-column justify-content-between' style={{height: '850px'}}>
            <div>
                {errorMessage}
                {loadingMessage}
                {articleList}
            </div>
            <PaginationBlog
                page={page}
                amountPage={showArticle}
                showPage={showPage}
            />
        </Container>
    )
}
export default CardList