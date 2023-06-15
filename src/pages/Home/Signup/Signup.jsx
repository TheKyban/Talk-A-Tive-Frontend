import React from 'react'
import styles from './Signup.module.css'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { motion } from 'framer-motion'

const Signup = () => {
    return (
        <motion.div className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            <Input
                label={"Name"}
                placeholder={"Enter Your Name"}
            />
            <Input
                label={"Email"}
                placeholder={"Enter Your Email"}
            />
            <Input
                label={"Password"}
                placeholder={"Enter Your Password"}
                type={"password"}

            />
            <Input
                label={"Confirm Password"}
                type={"password"}
                placeholder={"Confirm Your Password"}
            />
            <div className={styles.btns}>

                <Button text={"Sign Up"} />
            </div>
        </motion.div>
    )
}

export default Signup