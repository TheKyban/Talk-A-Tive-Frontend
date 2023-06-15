import React from 'react'
import styles from './Input.module.css'



const Input = ({ label, placeholder, type, value, onChange }) => {
    return (
        <div className={styles.inputWrapper}>
            <p className={styles.label}
            >
                {label}
                <span> *</span>
            </p>
            <input
                className={styles.input}
                placeholder={placeholder && placeholder}
                type={type && type}
                value={value && value}
                onChange={onChange && onChange}
            />
        </div>
    )
}

export default Input