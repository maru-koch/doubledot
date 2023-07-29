import React from "react"
import classes from './booked.module.css'

export const BookedAppointment=({setIsOpen})=>{

    // Displaces notification of the successful booking of appointment

    return (
        <div className={classes.booked_container}>
            <div className={classes.booked_wrapper}>
                <h1 className={classes.booked_title}>Appointment Booked!</h1>
                <p className={classes.booked_subTitle}>You have sucessfully booked a FREE consultation with Us</p>
                <p className={classes.booked_content}>We have sent the details of the virtual meeting to your email. Please check your spam if not found in your inbox.</p>
                <div className="btn-holder">
                    <button className='btn' onClick={()=>setIsOpen(false)}>Ok</button>
                </div>
            </div>
        </div>
    )
}