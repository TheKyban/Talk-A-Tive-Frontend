import React from 'react'
import styles from './DropDown.module.css'
import { motion } from 'framer-motion'

const DropDown = ({ showProfile, onclose }) => {

    const logout = () => {

    }

    return (
        <div className={styles.dropDownWrapper} onClick={onclose}>
            <motion.div className={styles.dropDown}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200 }}
            >
                <p onClick={showProfile}>My Profile</p>
                <hr />
                <p onClick={logout}>Logout</p>
            </motion.div>
        </div>
    )
}

export default DropDown