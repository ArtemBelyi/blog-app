import React from 'react';
import { useEffect, useState } from 'react';
import { dataShow } from '../../types/blog';
import UserAvatar from '../UserAvatar/UserAvatar';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Container, Button } from 'react-bootstrap';
import { fetchBlog } from '../../store/action-creators/blog';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { deleteArticle } from '../Forms/EditArticle/service';
import ModalWindow from '../Modal/Modal';
const styles = require('./BlogPage.module.scss')

const BlogPage = () => {
    const { slug } = useParams()
    const {article, loading, error} = useTypedSelector(state => state.blog)
    const [show, setShow] = useState<dataShow>({
        show: false,
        handleClose: () => {},
        heading: '',
        body:''
    });
    const navigate = useNavigate()
    const location = useLocation()
    const fromPage = location.state?.from?.pathname || '/'
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlog(slug))
    }, [dispatch, slug])

    const goEdit = () => navigate(`edit`)

    if (loading) return <h1>Идет загрузка</h1>
    if (error) return <h1>Ошибка загрузки</h1>

    const handleShow = (a: dataShow) => setShow(a);
    const handleClose = () => {
        setShow({...show, show: false})
        navigate(fromPage, {replace: true})
    }

    const removeArticle = (prop: any) => {
        deleteArticle(prop).then(res => {
            if(res.ok) {
                handleShow({
                    show: true,
                    handleClose: handleClose,
                    heading: 'Успешно!',
                    body:'Успешно удалено'
                })
            } else {
                handleShow({
                    show: true,
                    handleClose: handleClose,
                    heading: 'ООшибка удаления!',
                    body:'Не получилось удалить почему-то'
                })
            }
        })
    }
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
                <div className={styles["blogpage-container__button-group"]}>
                    <Button className={styles["button-group__item"]} variant="outline-danger" onClick={() => removeArticle(slug)}>Delete</Button>
                    <Button className={styles["button-group__item"]} variant="outline-warning" onClick={goEdit}>Edit</Button>
                </div>
            </div>
        </div>
        <ModalWindow dataModal={show}/>
        </Container>
    )
}
export default BlogPage