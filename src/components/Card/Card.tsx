import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import { Article } from '../../types/blog';
import { Link } from 'react-router-dom';
const styles = require('./Card.module.scss')

const Card = (props: {article: Article}) => {
    const { title, tagList, description, author, createdAt, slug } = props.article

    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-container__desc"]}>
                <div className={styles["card-title"]}>
                    <Link className={styles["card-title__link"]} to={`/articles/${slug}`}>{ title }</Link>
                </div>
                <div className={styles["card-tags"]}>
                    {tagList.map(tag => <div className={styles["card-tags__item"]} key={tag}>{tag}</div>)}
                </div>
                <div className={styles["card-text"]}>
                    { description }
                </div>
            </div>
            <div className={styles["card-container__avatar"]}>
                <UserAvatar author={author} createdAt={createdAt}/>
            </div>
        </div>
    )
}
export default Card