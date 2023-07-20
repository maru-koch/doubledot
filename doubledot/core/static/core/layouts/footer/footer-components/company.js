import React from "react"
import classes from './company.module.css'
import { Link } from "react-router-dom"

export const Company=()=>{
    return(
        <div className={classes.footerCard_wrapper}>
            <div className={`${classes.company_logo}`}>
                {/* <img src="static/icons/logo_gray.png" alt="logo"/> */}
                <h1 className={classes.company_logo}>Doubled<span>o</span>t</h1>
            </div>
            <div className={classes.company_tagline}>
                <p><Link className="link">We Help Businesses succeed through innovative product design, development, and smart processes</Link></p>
            </div>
            <div className ={classes.company_socialmedia}>
                <h3>Connect with Us</h3>
                <div className = {classes.company_social_wrapper}>
                    <span to = "" className = {classes.company_socialmedia_icons}><i  className = "fab fa-facebook" ></i></span>
                    <span to = "" className = {classes.company_socialmedia_icons}><i  className = "fab fa-twitter"></i></span>
                    <span to = "" className = {classes.company_socialmedia_icons}><i  className = "fab fa-instagram"></i></span>
                </div>
            </div>
        </div>
    )
}