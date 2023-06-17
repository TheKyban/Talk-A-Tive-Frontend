import React from 'react'
import styles from './Sidebar.module.css'
import { motion } from 'framer-motion'

const Sidebar = ({ onClose }) => {
    return (
        <div className={styles.sidebarWrapper}
        >

            <motion.div className={styles.sidebar}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400 }}
            >

                <h1>
                    Search users
                </h1>

                <div className={styles.formWrapper}>
                    <input type="text" />
                    <button>Go</button>
                </div>
            </motion.div>

            <div id={styles.blank} onClick={onClose}>

            </div>
        </div>
    )
}

export default Sidebar