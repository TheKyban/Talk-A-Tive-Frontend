import React from 'react'
import MyChatHeader from './MyChatHeader/MyChatHeader'
import styles from './Mychats.module.css'
import { motion } from 'framer-motion'
const Mychats = () => {
    return (
        <motion.div className={styles.MychatsWrapper}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200 }}
        >
            <MyChatHeader />

            <div className={styles.personsWrapper}>
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
                <Person name={"aditya"} />
            </div>
        </motion.div>
    )
}

const Person = ({ name }) => <p className={styles.person}>{name}</p>

export default Mychats