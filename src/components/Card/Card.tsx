import React, { useEffect, useState } from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {IconLookup, IconDefinition, findIconDefinition} from '@fortawesome/fontawesome-svg-core'
import { useDispatch } from 'react-redux';
import { Article } from '../../types/blog';
import { Link } from 'react-router-dom';
import { removeLike, addLike } from '../../store/action-creators/blog';
const styles = require('./Card.module.scss')

library.add(fas)
library.add(far)

const heartFull: IconLookup = { prefix: 'fas', iconName: 'heart' }
const heartIconFull: IconDefinition = findIconDefinition(heartFull)

const heartEmpty: IconLookup = { prefix: 'far', iconName: 'heart' }
const heartIconEmpty: IconDefinition = findIconDefinition(heartEmpty)

const Card = (props: {article: Article}) => {
    const { title, tagList, description, author, createdAt, slug, favoritesCount, favorited } = props.article
    const dispatch = useDispatch()
    const [like, setLike] = useState({
        isLike: false,
        count: 0
    })

    useEffect(() => {
       setLike({isLike: favorited, count: favoritesCount})
    }, [favorited, favoritesCount])

    const onClick = () => {
        setLike({isLike: !like.isLike, count: like.isLike ? like.count - 1 : like.count + 1})
        if(like.isLike) {
            dispatch(removeLike(slug))
        } else {
            dispatch(addLike(slug))
        }
    }

    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-container__desc"]}>
                <div className={styles["card-title"]}>
                    <Link className={styles["card-title__link"]} to={`/articles/${slug}`}>{ title }</Link>
                    <FontAwesomeIcon icon={like.isLike ? heartIconFull : heartIconEmpty} size={'sm'} className={styles["card-title__icon"]} onClick={() => onClick()}/>
                    <span className={styles["card-title__favorited"]}>{ like.count }</span>
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