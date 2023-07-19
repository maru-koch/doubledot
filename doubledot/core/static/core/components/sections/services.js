import React, { useEffect, useState } from 'react'
import './service.css'
import { services } from '../../constants/services'
import { Section } from './sub/section'

const Card=({icon, title, description})=>{
    return (
        <div className="card">
            <div className='service-card'>
                <div className='service-img'>
                    <i className={icon}></i>
                </div>
                <div>
                    <h3 className='service-title'>{title}</h3>
                    <p className='service-description'>{description}</p>
                    <div className='service-icon'>
                        <i className='fas fa-arrow-right'></i>
                    </div>
                </div>
            </div>
            <div className='overlay'>
                <div className='service-img'>
                    <i className={icon}></i>
                </div>
                <div>
                    <h3 className='service-title'>{title}</h3>
                    <p className='service-description'>{description}</p>
                    <div className='service-icon'>
                        <i className='fas fa-arrow-right'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Services=()=>{
    const [serviceArr, setServices] = useState([])

    const Schedule=()=>{

    }

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
                            />
                    )}
                </div>
                <div className='service-action btn-holder'>
                    <button className='btn'>Schedule Consultation</button>
                </div>
            </div>
        </Section>
    )
}