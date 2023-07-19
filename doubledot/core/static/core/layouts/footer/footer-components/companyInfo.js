import React from 'react'
import classes from '../footer.module.css'

export const CompanyInfo=()=>{
    return (
        <div className={classes.footerCard__wrapper}>
            <h2 className={classes.footer_title}>Company</h2>
            <ul>
                <li>About Doubledot</li>
                <li>Top Stories</li>
                <li>Career</li>
                <li>Get In Touch</li>
            </ul>
        </div>
    )
}

