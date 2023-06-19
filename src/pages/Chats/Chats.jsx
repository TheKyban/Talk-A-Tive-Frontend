import React, { useLayoutEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Mychats from './Mychats/Mychats'
import SingleChat from './SingleChat/SingleChat'
import styles from './Chats.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Chats = () => {

  const { isAuth } = useSelector(state => state.Auth)
  const navigate = useNavigate()

  /**
   * checking user is authenticated or not
   */


  useLayoutEffect(() => {

    let clear = false
    if (!isAuth && !clear) {
      navigate("/")
    }

    return () => {
      clear = true
    }

  }, [])



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