import React, { useState } from "react"
import { useRef } from "react"
import './phone.css'


export const Phone=({close})=>{

    const [copy, setCopy] = useState(false)

    const phoneNumber = useRef()
    

    const copyToClipboard=()=>{
        const copyPhoneNumber = phoneNumber.current
        navigator.clipboard.writeText(copyPhoneNumber.innerText)
        setCopy(true)
    }

    return (
        <div className='phone-container'>
            <div className='top-container'>
                <i className="fas fa-close icon" onClick={close}></i>
            </div>
            <div className='bottom-container'>
                <div className="phone-number-container" onClick={()=>copyToClipboard()}>
                    <h2 id="num" className='phone-number' ref={phoneNumber}>+2349012658442</h2>
                    <span className="copy"><i class="fa-solid fa-clone" style={{color: copy?'var(--highlight-color)':'var(--text-color-2)'}}></i></span>
                </div>
                <div className='mobile-contact'>
                    <div className='phone-call'>
                        <i className='fa-solid fa-phone icon'></i>
                        <button className='phone-btn'>Call</button>
                    </div>
                    <div className='phone-call'>
                        <i className='fa-brands fa-whatsapp icon'></i>
                        <button className='phone-btn'>WhatsApp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}