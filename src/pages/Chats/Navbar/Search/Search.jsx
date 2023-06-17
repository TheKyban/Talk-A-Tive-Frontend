import React from 'react'
import styles from './Search.module.css'
import searchIcon from '../../../../Images/search.svg'
const Search = () => {
    return (
        <div className={styles.wrapper}>
            <img src={searchIcon} alt='search' className={styles.img} />
            <span className={styles.text}>Search User</span>
        </div>
    )
}

export default Search