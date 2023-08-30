import React from "react"
import classes from './customMobile.module.css'

export const CustomMobileApp=()=>{
    /*A component that displays the custom mobile app development call-to-action
    
    */
    return (
        <div className={classes.custom_mobile_container}>
            <div  className={classes.custom_mobile_wrapper}>
                <div className={classes.custom_mobile_img}>
                    <img src={mobileApp} alt="Mobile App"/>
                </div>
                <div className={classes.custom_mobile_right}>
                    <h2>Custom Mobile App Development</h2>
                    <p className={classes.custom_mobile_text}>
                        A Mobile first approach to product development is essential as most users will interact with 
                        a digital product through a mobile platform.
                        Our design, and implementation, are geared towards maximizing user engagement
                        with your product via the mobile platform.
                    </p>
                    <div className={classes.custom_mobile_btn}>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}