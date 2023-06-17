import React from 'react'
import avatar from '../../Images/avatar.jpg'

import styles from './Badge.module.css'
const Badge = () => {
    return (
        <img  className={styles.img} src={avatar} alt="avatar" />
    )
}

export default Badge