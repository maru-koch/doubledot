import React from "react"
import { useState } from "react"
import classes from './contact.module.css'
import { Subscribe, Testimony, PageBanner } from "../components"
import { Layout } from "../layouts/layout"

export const Contact=()=>{
    const [email, setEmail] = useState({email:''})

    const onChangeHandler=(e)=>{
        setEmail({...email, [e.target.name]:e.target.value})
    }

    const onSubmitHandler=(e)=>{
        //
    }

    return (
        <Layout>
            <PageBanner page_title={'Contact Us'}/>
            <div className={classes.contact_wrapper}>
                <Subscribe/>
                <Testimony/>
            </div>
        </Layout>
    )
}


