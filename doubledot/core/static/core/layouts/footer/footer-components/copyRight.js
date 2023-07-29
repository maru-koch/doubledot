import React from 'react'
import classes from './copyRight.module.css'
import { Link } from 'react-router-dom'

export const CopyRight=()=>{
    return (
        <div className = {classes.copyright_container}>
            <div  className = {classes.copyright_wrapper}>
                <div className = {classes.copyright_info}>
                    <p>&copy; 2023 Doubledot Technologies, RC145567</p>
                    {/* <p>All rights reserved.</p> */}
                </div>
                <div className = {classes.copyright_nav}>
                    <ul>
                        <Link className={classes.copyright_link} to={'/'}>Home</Link>
                        <Link className={classes.copyright_link} to={'/about'}>About</Link>
                        <Link className={classes.copyright_link} to={'/contact'}>Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
