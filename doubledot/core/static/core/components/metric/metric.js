
import React from "react"
import classes from './module.css'

export const Metric=()=>{
    return (
        <div className={classes.metric_container}>
            <div className={classes.metric_wrapper}>
                <div classes={classes.metric_card}>
                    <h3>6+ Years</h3>
                    <p>Best Practices in Software Development</p>
                </div>
                <div classes={classes.metric_card}>
                    <h3>Agile At Core</h3>
                    <p>Smart Development Processes and SCRUM</p>
                </div>
                <div classes={classes.metric_card}>
                    <h3>Dedicated Team</h3>
                    <p>Always learning and adapting to changes</p>
                </div>
            </div>
        </div>
    )
}