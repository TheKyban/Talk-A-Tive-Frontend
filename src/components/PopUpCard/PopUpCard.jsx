import React from 'react'
import styles from './PopUpCard.module.css'
import exitIcon from '../../Images/exit.svg'

import { motion } from 'framer-motion'
const PopUpCard = ({ closeFunc, children }) => {
    return (
        <div className={styles.cardWrapper} onClick={closeFunc}>

            <motion.div className={styles.wrapper}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 400 }}
            >
                <button className={styles.exit} onClick={closeFunc}>
                    <img className={styles.exitIcon} src={exitIcon} alt="" />

                </button>

                {
                    children
                }
            </motion.div>
        </div>
    )
}

export default PopUpCard