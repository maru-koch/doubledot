import React from 'react'
import classes from '../footer.module.css'
import { Link } from 'react-router-dom'

export const Address =()=>{
    // displays opening time, address, and phone Number
    return (
   
            <div className ={classes.footerCard__wrapper}>
                <h2 className={classes.footer_title}>Contact Info</h2>
                <div className ={classes.footerCard__address}>
                    <div className ={classes.footerCard__address_box}>
                        <div className ={classes.footerCard__address_icon}>
                            <i className = "fa fa-location"></i>
                        </div>
                        <div className={classes.footerCard__address_bar}>
                            <h3>Address</h3>
                            <p><Link className="link">No. 2 Uduak Crescent, Magboro</Link></p>
                        </div>
                    </div>
                    <div className ={classes.footerCard__address_box}>
                        <div className ={classes.footerCard__address_icon}>
                            <i className = "fa fa-envelope"></i>
                        </div>
                        <div className={classes.footerCard__address_bar}>
                            <h3>Email</h3>
                            <p><Link className="link">contact@doubledot.com</Link></p>
                        </div>
                    </div>
                    <div className ={classes.footerCard__address_box}>
                        <div className ={classes.footerCard__address_icon}>
                            <i className = "fa fa-phone"></i>
                        </div>
                        <div className={classes.footerCard__address_bar}>
                            <h3>Phone</h3>
                            <p><Link className="link">+2349012693884</Link></p>
                        </div>
                    </div>
                    <div className ={classes.footerCard__address_box}>
                        <div className ={classes.footerCard__address_icon}>
                            <i className = "fa fa-clock"></i>
                        </div>
                        <div className={classes.footerCard__address_bar}>
                            <h3>Office Hours</h3>
                            <p><Link className="link">8:00 AM - 5:00PM</Link></p>
                        </div>
                    </div>
                </div>
            </div>
   
    )
}

