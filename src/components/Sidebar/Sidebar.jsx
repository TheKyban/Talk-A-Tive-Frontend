import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import { motion } from 'framer-motion'
import axios from 'axios'
import { URL, createChat } from '../../http/http'
import Person from '../Person/Person'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../store/slices/userSlice'
import Spinner from '../Spinner/Spinner'

const Sidebar = ({ onClose }) => {
    const [allUser, setAllUser] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")


    const selectingUser = (data) => {
        dispatch(selectUser(data))

        createChat(data._id)
            .then(res => console.log(res.data.created))
            .catch(err => console.log(err))
        onClose()
    }


    const searchUsers = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`${URL}/user/finduser?search=${query}`, {
                withCredentials: true
            })

            setAllUser(data.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.sidebarWrapper}
        >

            <motion.div className={styles.sidebar}
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400 }}
            >

                <h1>
                    Search users
                </h1>

                <div className={styles.formWrapper}>
                    <input onChange={(e) => setQuery(e.target.value)} value={query} type="text" />
                    <button onClick={searchUsers}>Go</button>
                </div>


                <div className={styles.persons}>
                    {
                        loading ? (<div style={{ textAlign: "center" }}>
                            <Spinner color={"black"} />
                        </div>) : (

                            allUser.map(person =>
                                <Person
                                    data={person}
                                    key={person._id}
                                    onclick={() => selectingUser(person)}
                                />)
                        )
                    }

                </div>
            </motion.div>

            <div id={styles.blank} onClick={onClose}>

            </div>
        </div>
    )
}

export default Sidebar