import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import styles from './Login.module.css'

import { motion } from 'framer-motion'
const Login = () => {
    return (
        <motion.div className={styles.form}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x:-200,opacity: 0 }}
        >
            <Input
                label={"Email"}
                placeholder={"Enter Your Name"}
            />
            <Input
                label={"Password"}
                placeholder={"Enter Your Password"}
                type={"password"}
            />

            <div className={styles.btns}>

                <Button text={"Login"} />
                <Button text={"Get Guest Credential"} bg={"#c35718"} HBG={"#b34e01"} />
            </div>
        </motion.div>
    )
}

export default Login