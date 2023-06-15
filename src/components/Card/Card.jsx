import React from 'react'
import styles from './Card.module.css'

const Card = ({ children }) => {
    return (
        <div
            className={styles.cardWrapper}>{children}</div>
    )
}

export default Card