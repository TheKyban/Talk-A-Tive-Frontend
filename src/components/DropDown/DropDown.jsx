import React from 'react'
import styles from './DropDown.module.css'
import { motion } from 'framer-motion'
import { logoutApi } from '../../http/http'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/slices/authSlice'



const DropDown = ({ showProfile, onclose }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logout = async () => {
        await logoutApi()
        await dispatch(logoutUser())
        navigate("/")
    }

    return (
        <div className={styles.dropDownWrapper} onClick={onclose}>
            <motion.div className={styles.dropDown}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200 }}
            >
                <p onClick={showProfile}>My Profile</p>
                <hr />
                <p onClick={logout}>Logout</p>
            </motion.div>
        </div>
    )
}

export default DropDown