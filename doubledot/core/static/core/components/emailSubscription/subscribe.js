

import {useState} from 'react';
import {Section} from '../sub'
import classes from './subscribe.module.css'
import React from 'react';

export const EmailSubscription=(props)=>{  

    const [email, setEmail] = useState({email:''})

    const onChangeHandler=(e)=>{
        setEmail({...email, [e.target.name]:e.target.value})
    }

    const onSubmitHandler=(e)=>{
        //
    }


    return (
    
        <Section title ="Partner with Us" subtitle = "Lets hear about your great Idea or project. Together, we'll make it happen">
            
            <div className={classes.subscribe__container}>
                <div className={classes.subscribe__wrapper}>
                    <input type="text" name ='email' placeholder = "Your Email" onChange={onChangeHandler}/>
                    <button onClick={()=>onSubmitHandler()}>Sign up</button>
                </div>
            </div>
        </Section>
)}

