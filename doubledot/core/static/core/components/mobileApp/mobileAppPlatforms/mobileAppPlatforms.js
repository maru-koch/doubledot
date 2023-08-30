import React, { useEffect, useState } from 'react'
import './whatWeDo.css'
import { mobile_stacks } from '../../../constants/mobileStacks'
import { Section } from '../sub/section'

const Card=({icon, num, title, platform})=>{
    return (
        <div className="card">
            <div className='mobile_card'>
                <div className='mobile_wrapper'>
                    <div className='moile_icon'>
                        <i className={icon}></i>
                    </div>
                    <div>
                        <h3 className='mobile_title'>{title}</h3>
                        <p className='mobile_description'>{platform}</p>
                    </div>
                </div>
                <div className='mobile_index'>
                    <p className='mobile_number'>{num}</p>
                </div>
            </div>
            <div className='overlay'>
                <div className='mobile_wrapper'>
                    <div className='moile_icon'>
                        <i className={icon}></i>
                    </div>
                    <div>
                        <h3 className='mobile_title'>{title}</h3>
                        <p className='mobile_description'>{platform}</p>
                    </div>
                </div>
                <div className='mobile_index'>
                    <p className='mobile_number'>{num}</p>
                </div>
            </div>
        </div>
    )
}

export const MobileAppPlatforms=({setIsOpen})=>{
    
    // Sets the services when page is loaded

    const [stackArr, setServices] = useState([])

    useEffect(()=>{
        setServices(mobile_stacks)
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
                        stackArr.map((stack, id)=>
                            <Card 
                                key={id}
                                icon={stack.icon} 
                                title={stack.title} 
                                description={stack.platform}
                                num={id + 1}
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