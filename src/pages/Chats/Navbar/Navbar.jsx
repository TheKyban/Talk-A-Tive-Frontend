import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Search from './Search/Search'
import Profile from './Profile/Profile'
import Sidebar from '../../../components/Sidebar/Sidebar'


const Navbar = () => {
    const [showSidebar, setSideBar] = useState(false)
    return (
        <div className={styles.navbar}

        >
            <div className={styles.navbarWrapper}>
                <div onClick={() => setSideBar(true)}>
                    <Search />
                </div>
                <h1>Talk-A-Tive</h1>
                <Profile />
            </div>
            {
                showSidebar && <Sidebar onClose={() => setSideBar(false)} />
            }
        </div >
    )
}

export default Navbar