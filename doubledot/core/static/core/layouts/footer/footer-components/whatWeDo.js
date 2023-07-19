import React from 'react'
import classes from '../footer.module.css'

export const WhatWeDo=()=>{
    return (
        <div className={classes.footerCard__wrapper}>
            <h2 className={classes.footer_title}>What we do</h2>
            <ul>
                <li>Custom Software development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li style={{color:'#00cfb1'}}>Big Data & Analytics</li>
                <li>IoT Development</li>
                <li>IT Consultancy</li>
            </ul>
        </div>
    )
}

