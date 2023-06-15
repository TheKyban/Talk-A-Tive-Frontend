import React, { useState } from 'react'
import styles from "./Home.module.css"
import Card from '../../components/Card/Card'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import BUTTON from './BUTTON/BUTTON'

const Home = () => {
    const [formSelected, setFormSelected] = useState("login")
    return (
        <div className={styles.homeWrapper} >
            {/* Home Nav */}
            <Card
            >
                <h1 className={styles.headerText}>Talk-A-Tive</h1>
            </Card>

            <Card>
                <div>
                    {/* Radios */}
                    <div>
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

                    </div>

                    {/* Forms */}
                    <div className={styles.formWrapper}>
                        {
                            formSelected === "login" ? <Login /> : <Signup />
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Home