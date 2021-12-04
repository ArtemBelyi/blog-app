import React from 'react'
import logoUser from '../UserAvatar/logoUser.png'
const styles = require('./UserAvatar.module.scss')

const UserAvatar = () => {

    return (
        <div className={styles["container-avatar"]}>
            <div className={styles["description"]}>
                <div className={styles["description__title"]}>John Doe</div>
                <div className={styles["description__date"]}>March 5, 2021</div>
            </div>
            <div className={styles["logo"]}><img src={logoUser} alt="logoUser" className="logo-img" /></div>
        </div>
    )
}
export default UserAvatar