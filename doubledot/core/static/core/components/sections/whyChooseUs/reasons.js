import React from 'react';
import classes from './reasons.module.css';
import { reasons } from '../../../constants/whyChooseUs'


const Why =({icon, title, desc, bg})=>{
    return (
        <main className={classes.why__container} style={{backgroundColor:bg}}>
            <section className={classes.why__wrapper}>
                <i className={icon}></i>
                <h2>{title}</h2>
                <p>{desc}</p>
            </section>
        </main>
    )
}

export const Reasons=()=>{
    return (
        <main className={classes.reasons__container} >
            <section className={classes.reasons__wrapper}>
                {reasons.map(stat =><Why icon = {stat.icon} title ={stat.title} desc={stat.description} bg={stat.bg} />)}
            </section>
        </main>
    )
}