import React from 'react'
import classes from '../footer.module.css'
import { Link } from 'react-router-dom'

export const WhatWeDo=()=>{
    return (
        <div className={classes.footerCard__wrapper}>
            <h2 className={classes.footer_title}>What we do</h2>
            <ul>
                <li><Link className="link">Custom Software development</Link></li>
                <li><Link className="link">Mobile App Development</Link></li>
                <li><Link to={'/mobile'} className="link">UI/UX Design</Link></li>
                <li style={{color:'#00cfb1'}}><Link className="link">Big Data & Analytics</Link></li>
                <li><Link className="link">IoT Development</Link></li>
                <li><Link className="link">IT Consultancy</Link></li>
            </ul>
        </div>
    )
}

