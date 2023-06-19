import React from 'react'
import styles from './MyChatHeader.module.css'

const MyChatHeader = () => {
    return (
        <div className={styles.headerWrapper}>
            <h3 className={styles.header}>My Chats</h3>
            <button
                className={styles.btnWrapper}
            >

                <span
                    className={styles.btnText}
                >
                    New Group Chat
                </span>
                <span
                    className={styles.btnPlus}
                >
                    +
                </span>

            </button>
        </div>
    )
}

export default MyChatHeader