import React from 'react'
import logoUser from '../UserAvatar/logoUser.png'
import { Profile, User } from '../../types/user'
const styles = require('./UserAvatar.module.scss')

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const timeDeparture = (date: string): string => {
    const year = new Date(date).getFullYear()
    const month = monthNames[new Date(date).getMonth()]
    const day = new Date(date).getDate()
    return `${month} ${day}, ${year}`
}

const UserAvatar = (props: {author: Profile | User, createdAt?: string}) => {
    const { username } = props.author
    const createdAt = props.createdAt

    return (
        <div className={styles["container-avatar"]}>
            <div className={styles["description"]}>
                <div className={styles["description__title"]}>{ username }</div>
                <div className={styles["description__date"]}>{createdAt && timeDeparture(createdAt)}</div>
            </div>
            <div className={styles["logo"]}><img src={logoUser} alt="logoUser" className="logo-img" /></div>
        </div>
    )
}
export default UserAvatar