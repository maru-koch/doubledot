import React from 'react'
import classes from './copyRight.module.css'

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
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
