import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
const styles = require('./Card.module.scss')

const Card = () => {

    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-container__desc"]}>
                <div className={styles["card-title"]}>Some article title</div>
                <div className={styles["card-tags"]}>
                    <div className={styles["card-tags__item"]}>Tag 1</div>
                    <div className={styles["card-tags__item"]}>Tag 2</div>
                </div>
                <div className={styles["card-text"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Nemo, consequuntur ratione nostrum dolorum iusto totam provident aperiam laboriosam enim possimus expedita, 
                    alias delectus a dolore magnam porro aliquid dolor non.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, error! Labore excepturi amet perspiciatis laboriosam animi delectus, corporis suscipit deserunt libero fugit molestiae distinctio veritatis odio laudantium ad ullam dicta?
                </div>
            </div>
            <div className={styles["card-container__avatar"]}>
                <UserAvatar />
            </div>
        </div>
    )
}
export default Card