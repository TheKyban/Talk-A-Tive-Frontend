import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Mychats from './Mychats/Mychats'
import SingleChat from './SingleChat/SingleChat'
import styles from './Chats.module.css'
import PopUpCard from '../../components/PopUpCard/PopUpCard'

const Chats = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.chats}>
        <div className={styles.mychats}>

          <Mychats />
        </div>

        <div className={styles.singleChat}>
          <SingleChat />

        </div>
      </div>
      
    </div>
  )
}

export default Chats