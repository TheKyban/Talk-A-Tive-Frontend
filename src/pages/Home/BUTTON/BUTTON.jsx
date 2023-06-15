import React from 'react'
import styles from './BUTTON.module.css'

const BUTTON = ({ text, formSelected, For, setFunc }) => {
    return (
        <button
            style={{ backgroundColor: formSelected === For && "#bee3f8" }}
            className={styles.btnFormHeader} onClick={() => setFunc(For === "login" ? "login" : "signup")}
        >
            {text}
        </button>
    )
}

export default BUTTON