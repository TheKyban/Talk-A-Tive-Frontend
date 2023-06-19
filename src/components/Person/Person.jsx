import React from 'react'
import styles from './Person.module.css'
import { motion } from 'framer-motion'

const Person = ({ data, onclick }) => {

    return (
        <motion.div
            className={styles.personWrapper}
            onClick={onclick}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            {
                data.picture && <img className={styles.avatar} src={data.picture} alt="" />
            }
            {
                data.name && <p className={styles.person}>{data.name}</p>
            }
        </motion.div>
    )
}

export default Person