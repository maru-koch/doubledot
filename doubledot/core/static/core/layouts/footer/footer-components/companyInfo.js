import React from 'react'
import classes from '../footer.module.css'
import { Link } from 'react-router-dom'

export const CompanyInfo=()=>{
    return (
        <div className={classes.footerCard__wrapper}>
            <h2 className={classes.footer_title}>Company</h2>
            <ul>
                <li><Link className='link' to={'/about'}>About Doubledot</Link></li>
                <li><Link className='link' to={'/articles'}>Top Stories</Link></li>
                <li><Link className='link' to={'/articles'}>Career</Link></li>
                <li><Link className='link' to={'/contact'}>Get In Touch</Link></li>
            </ul>
        </div>
    )
}

