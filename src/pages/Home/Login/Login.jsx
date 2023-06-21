import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import styles from './Login.module.css'
import { motion } from 'framer-motion'
import { loginApi } from '../../../http/http'
import { authenticateUser } from '../../../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const login = async () => {
        if (!email || !password) {
            console.log("please enter email and password")
            return;
        }

        setLoading(true)

        try {
            const { data } = await loginApi({ email, password })
            dispatch(authenticateUser(data))
            localStorage.setItem("isAuth",data.success)
            localStorage.setItem("user",data.data)
            setLoading(false)
            navigate("/chats")
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <motion.div className={styles.form}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
        >
            <Input
                label={"Email"}
                placeholder={"Enter Your Name"}
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

            <Input type={"checkbox"}
                label={"Show Password"}
                onChange={() => setShow(!show)}
            />

            <div className={styles.btns}>

                <Button text={"Login"}
                    onClick={login}
                    isLoading={loading}
                />
                <Button
                    text={"Get Guest Credential"}
                    bg={"#c35718"}
                    HBG={"#b34e01"}
                    onClick={() => {
                        setEmail("user@example.com")
                        setPassword("12345")
                    }}
                />
            </div>
        </motion.div>
    )
}

export default Login