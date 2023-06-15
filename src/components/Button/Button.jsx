import React, { useState } from 'react'
import styles from './Button.module.css'
import Spinner from '../Spinner/Spinner'
const Button = ({ text, bg, HBG, onClick, isLoading = false }) => {

    const [BG, setBG] = useState(bg)

    return <button
        disabled={isLoading && true}
        className={styles.btn}
        style={{ backgroundColor: BG && BG }}
        onMouseOver={() => setBG(HBG ? HBG : "#007bee")}
        onMouseOut={() => setBG(bg)}
        onClick={onClick}
    >
        {
            isLoading ? <Spinner /> : text
        }
    </button>
}

export default Button 