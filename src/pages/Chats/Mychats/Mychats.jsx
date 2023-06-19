import React from 'react'
import MyChatHeader from '../../../components/Chats/MyChatHeader/MyChatHeader'
import styles from './Mychats.module.css'
import { motion } from 'framer-motion'
import Person from '../../../components/Person/Person'
const Mychats = () => {
    
    return (
        <motion.div className={styles.MychatsWrapper}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200 }}
        >
            <MyChatHeader />

            <div className={styles.personsWrapper}>

            </div>
        </motion.div>
    )
}



export default Mychats