import React from 'react'
import styles from './Input.module.css'



const Input = ({ label, placeholder, type, value, accept, onChange }) => {
    return (
        <div className={type !== "checkbox" ? styles.inputWrapper : ""}>
            {type !== "checkbox" &&
                (
                    <label className={styles.label}
                        htmlFor={label}
                    >
                        {label}
                        <span> *</span>
                    </label>
                )
            }

            <input
                id={label}
                className={styles.input}
                placeholder={placeholder && placeholder}
                type={type && type}
                value={value && value}
                accept={accept && accept}
                onChange={onChange && onChange}
            />

            {type === "checkbox" &&
                (
                    <label className={styles.label}
                        htmlFor={label}
                    >
                        {label}
                    </label>
                )
            }
        </div>
    )
}

export default Input