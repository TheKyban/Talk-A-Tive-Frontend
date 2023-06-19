import React, { useState } from 'react'
import styles from './Profile.module.css'
import arrow from '../../../../Images/downArrow.svg'
import Badge from '../../../Badge/Badge'
import bellIcon from '../../../../Images/bell.svg'
import PopUpCard from '../../../PopUpCard/PopUpCard'
import DropDown from '../../../DropDown/DropDown'

const Profile = () => {

    const [popUp, setPopup] = useState(false)
    const [dropDown, setDropDown] = useState(false)

    return (
        <div className={styles.profileWrapper}>
            <img src={bellIcon} alt="" className={styles.bell} />
            <div className={styles.wrapper} onClick={() => setDropDown(!dropDown)}>
                <Badge />
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
                popUp && <PopUpCard closeFunc={() => setPopup(false)} />
            }
        </div>
    )
}



export default Profile