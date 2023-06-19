import React from 'react'
import styles from './Spinner.module.css'


const Spinner = ({ color }) => {
    return (
        <span style={{ borderBottom: color && `1px solid ${color}` }} className={`${styles.spinner}`}></span>
    )
}

export default Spinner