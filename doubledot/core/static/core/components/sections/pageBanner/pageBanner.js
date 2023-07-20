import React from "react"
import classes from './pageBanner.module.css'

export const PageBanner=({page_title})=>{
    return (
        <section className={classes.banner_container}>
            <div className={classes.banner_wrapper}>
                <div className={classes.banner_pageTitle}>
                    <h2>{page_title}</h2>
                </div>
            </div>
        </section>
    )
}