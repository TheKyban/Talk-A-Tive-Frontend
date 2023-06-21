import React from 'react'

import styles from './Badge.module.css'
const Badge = ({ picture }) => {
    return (
        picture && <img className={styles.img} src={picture} alt="avatar" />
    )
}

export default Badge