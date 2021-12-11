import React from 'react';
import { useEffect } from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Container } from 'react-bootstrap';
import { fetchBlog } from '../../store/action-creators/blog';
import { useParams } from 'react-router-dom';
const styles = require('./BlogPage.module.scss')

const BlogPage = () => {
    const { slug } = useParams()
    const {article, loading, error} = useTypedSelector(state => state.blog)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlog(slug))
    }, [dispatch, slug])

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>Ошибка загрузки</h1>

    return (
        <Container className='p-3 d-flex justify-content-center'>
        <div className={styles["blogpage-container"]}>
            <div className={styles["blogpage-container__desc"]}>
                <div className={styles["blogpage-title"]}>{article.title}</div>
                <div className={styles["blogpage-tags"]}>
                    {article.tagList.map(tag => <div className={styles["blogpage-tags__item"]} key={tag}>{tag}</div>)}
                </div>
                <div className={styles["blogpage-description"]}>
                    {article.description}
                </div>
                <div className={styles["blogpage-body"]}>
                    {article.body}
                </div>
            </div>
            <div className={styles["blogpage-container__avatar"]}>
                <UserAvatar author={article.author} createdAt={article.createdAt}/>
            </div>
        </div>
        </Container>
    )
}
export default BlogPage