

import {useState} from 'react';
import {Section} from '../sub'
import classes from './subscribe.module.css'
import React from 'react';
export const Subscribe=(props)=>{  

    const [email, setEmail] = useState({email:''})

    const onChangeHandler=(e)=>{
        setEmail({...email, [e.target.name]:e.target.value})
    }

    const onSubmitHandler=(e)=>{
        //
    }


    return (
    
        <Section 
            title ="Partner with Us" 
            subtitle = "Lets hear about your great Idea or project. Together, we'll make it happen"
            bg={'#f1f0f0'}
            titleColor={'var(--text-color-2)'}
            subColor={'var(--text-color-2)'}
            >
            <div className={classes.contact_form_container}>
                <form className={classes.contact_form}>
                    <div className={classes.contact_form_input_wrapper}>
                        <input  className={`${classes.contact_form_input} ${classes.left}`} type="text" name ='first_name' placeholder = "First Name" onChange={onChangeHandler}/>
                        <input  className={`${classes.contact_form_input} ${classes.right}`} type="text" name ='last_name' placeholder = "Last Name" onChange={onChangeHandler}/>
                    </div>
                    <div className={classes.contact_form_input_wrapper}>
                        <input  className={`${classes.contact_form_input} ${classes.left}`} type="text" name ='email' placeholder = "Email Address" onChange={onChangeHandler}/>
                        <input  className={`${classes.contact_form_input} ${classes.right}`} type="text" name ='phone_number' placeholder = "Phone Number" onChange={onChangeHandler}/>
                    </div>
                    <div className={classes.contact_form_textarea}>
                        <textarea rows={5} className={`${classes.contact_form_input}`} type="text" name ='message' placeholder = "Message" onChange={onChangeHandler}/>
                    </div>
                    <div className='btn-holder'>
                        <button className='btn' onClick={()=>onSubmitHandler()}>Send Message</button>
                    </div>
                </form>
            </div>
        </Section>
)}

