import React, { useState } from 'react'
import eyeIcon from '../../../../Images/eye.svg'
import styles from "./SingleChatHeader.module.css"
import arrow from '../../../../Images/arrow.svg'
import PopUpCard from '../../../../components/PopUpCard/PopUpCard'


const SingleChatHeader = () => {
    const [showProfile, setShowProfile] = useState(false)
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.arrowWrapper} >
                <img src={arrow} className={styles.arrow} />
            </div>
            <h1 className={styles.name}>Aditya</h1>
            <div className={styles.eyeIcon} onClick={() => setShowProfile(true)}>
                <img src={eyeIcon} className={styles.eye} />
            </div>
            {
                showProfile && <PopUpCard
                    closeFunc={() => setShowProfile(!showProfile)}
                />
            }

        </div>
    )
}

export default SingleChatHeader