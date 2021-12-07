import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import { Article } from '../../types/articles';
const styles = require('./Card.module.scss')

const Card = (props: {article: Article}) => {
    const { title, tagList, description, author, createdAt } = props.article

    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-container__desc"]}>
                <div className={styles["card-title"]}>{ title }</div>
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