import React from 'react'
import styles from './SingleChat.module.css'
import SingleChatHeader from './SingleChatHeader/SingleChatHeader'
import sendIcon from '../../../Images/send.svg'
import { motion } from 'framer-motion'

const SingleChat = () => {
  return (
    <motion.div className={styles.wrapper}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200 }}
    >
      <SingleChatHeader />

      <div className={styles.chatBody}>

      </div>

      <form className={styles.inputWrapper}>
        <input type="text" placeholder='Enter a message' className={styles.input} />
        <button type='submit' className={styles.btn}>
          <img src={sendIcon} alt="" className={styles.btnImage} />
        </button>
      </form>

    </motion.div>
  )
}

export default SingleChat