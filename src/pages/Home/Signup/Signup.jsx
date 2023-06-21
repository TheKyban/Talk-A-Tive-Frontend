import React, { useState } from 'react'
import styles from './Signup.module.css'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { motion } from 'framer-motion'
import { registerApi } from '../../../http/http'
import { useDispatch } from 'react-redux'
import { authenticateUser } from '../../../store/slices/authSlice'

const Signup = () => {

    /**
     * States
     */

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()


    /**
     * Register new user to database
     */


    const register = async () => {
        if (!name || !email || !password || !confirmPassword) {
            console.log("all field are required")
            return;
        }

        if (password !== confirmPassword) {
            console.log("Password not Match")
            return;
        }

        setLoading(true)


        /**
         * Registering new user to database
         */


        try {

            const { data } = await registerApi({
                name, email, password
            })

            console.log(data.message)

            localStorage.setItem("isAuth", data.success)
            localStorage.setItem("user", data.data)
            
            dispatch(authenticateUser(data))
            setLoading(false)

        } catch (error) {
            console.log(error)
            setLoading(false)
        }


    }



    return (
        <motion.div className={styles.form}
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
        >
            <Input
                label={"Name"}
                placeholder={"Enter Your Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                label={"Email"}
                placeholder={"Enter Your Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                label={"Password"}
                placeholder={"Enter Your Password"}
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                label={"Confirm Password"}
                type={show ? "text" : "password"}
                placeholder={"Confirm Your Password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Input type={"checkbox"}
                label={"Show Password"}
                onChange={() => setShow(!show)}
            />

            <div className={styles.btns}>
                <Button text={"Sign Up"} onClick={register} isLoading={loading} />
            </div>
        </motion.div>
    )
}

export default Signup