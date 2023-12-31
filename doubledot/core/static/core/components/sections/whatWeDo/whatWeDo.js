import React, { useEffect, useState } from 'react'
import './whatWeDo.css'
import { services } from '../../../constants/services'
import { Section } from '../sub/section'
import { Modal, ScheduleConsultation } from '../../modal'

const Card=({icon, title, description})=>{
    return (
        <div className="card">
            <div className='service-card'>
                <div className='service-wrapper'>
                    <div className='service-img'>
                        <i className={icon}></i>
                    </div>
                    <div>
                        <h3 className='service-title'>{title}</h3>
                        <p className='service-description'>{description}</p>
                    </div>
                </div>
                <div className='service-icon'>
                    <i className='fas fa-arrow-right'></i>
                </div>
            </div>
            <div className='overlay'>
                <div className='service-wrapper'>
                    <div className='service-img'>
                        <i className={icon}></i>
                    </div>
                    <div>
                        <h3 className='service-title'>{title}</h3>
                        <p className='service-description'>{description}</p>
                    </div>
                </div>
                <div className='service-icon'>
                    <i className='fas fa-arrow-right'></i>
                </div>
            </div>
        </div>
    )
}

export const WhatWeDo=({setIsOpen})=>{
    
    // Sets the services when page is loaded

    const [serviceArr, setServices] = useState([])

    useEffect(()=>{
        setServices(services)
        console.log(services)
    }, [])

    return (
        <Section 
            title={"Services We Offer"} 
            subtitle={<span>We develop result driven application for our client<br/>Your Result is our Sucess</span>}
            >
            <div className='service-container'>
                <div className='service-grid-3x2'>
                    {
                        serviceArr.map((service, id)=>
                            <Card 
                                key={id}
                                icon={service.icon} 
                                title={service.title} 
                                description={service.description}
                                url={service.url}
                            />
                    )}
                </div>
                <div className='service-action btn-holder'>
                    <button className='btn' onClick={()=>setIsOpen(true)}>Schedule Consultation</button>
                </div>
            </div>
        </Section>
    )
}