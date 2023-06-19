import React, { useState } from 'react'
import styles from "./Home.module.css"
import Card from '../../components/Card/Card'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import BUTTON from '../../components/Home/BUTTON/BUTTON'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'

const Home = () => {
    const [formSelected, setFormSelected] = useState("login")
    const { isAuth } = useSelector(state => state.Auth)
    const navigate = useNavigate()


    useLayoutEffect(() => {
        let clear = false

        if (isAuth && !clear) {
            navigate("/chats")
        }

        return () => {
            clear = true
        }
    }, [])


    return (
        <div className={styles.homeWrapper} >
            <div className={styles.home}>

                {/* Home Nav */}
                <Card
                >
                    <h1 className={styles.headerText}>Talk-A-Tive</h1>
                </Card>

                <Card>
                    <div>
                        {/* Radios */}
                        <motion.div
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -200, opacity: 0 }}
                        >
                            <BUTTON
                                text={"Login"}
                                For={"login"}
                                formSelected={formSelected}
                                setFunc={setFormSelected}
                            />
                            <BUTTON
                                text={"Sign Up"}
                                For={"signup"}
                                formSelected={formSelected}
                                setFunc={setFormSelected}
                            />

                        </motion.div>

                        {/* Forms */}
                        <div className={styles.formWrapper}>
                            {
                                formSelected === "login" ? <Login /> : <Signup />
                            }
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default Home