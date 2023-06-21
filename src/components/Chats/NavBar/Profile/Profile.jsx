import React, { useState } from 'react'
import styles from './Profile.module.css'
import arrow from '../../../../Images/downArrow.svg'
import Badge from '../../../Badge/Badge'
import bellIcon from '../../../../Images/bell.svg'
import PopUpCard from '../../../PopUpCard/PopUpCard'
import DropDown from '../../../DropDown/DropDown'
import { useSelector } from 'react-redux'

const Profile = () => {

    const [popUp, setPopup] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const { user } = useSelector(state => state.Auth)

    return (
        <div className={styles.profileWrapper}>
            <img src={bellIcon} alt="" className={styles.bell} />
            <div className={styles.wrapper} onClick={() => setDropDown(!dropDown)}>
                <Badge picture={user.picture} />
                <img className={styles.arrow} src={arrow} alt="" />
            </div>

            {
                dropDown && <DropDown
                    showProfile={() => {
                        setDropDown(false)
                        setPopup(!popUp)
                    }}
                    onclose={() => setDropDown(false)}
                />
            }

            {
                popUp && <PopUpCard closeFunc={() => setPopup(false)} >
                    <div className={styles.profileDetailsWrapper}>
                        <h1 className={styles.profileName}>{user.name}</h1>
                        <img src={user.picture} alt="" className={styles.profileImage} />
                        <h3 className={styles.profieEmail}>{user.email}</h3>
                    </div>
                </PopUpCard>
            }
        </div>
    )
}



export default Profile