import React from 'react'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import styles from './Login.module.css'

import { motion } from 'framer-motion'
const Login = () => {
    return (
        <motion.div className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}

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