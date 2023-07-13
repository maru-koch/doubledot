import React, { Children, useEffect, useState } from 'react'
import './section.css'

export const Section=({title, subtitle, bg, children})=>{
    // PAGE SECTION WITH TITLE AND SUBTITLE PROPS
    return (
        <section className='section' style={{backgroundColor:`${bg}`}}>
            <div className='container'>
                <div className='section-header'>
                    <div className='section-header-container'>
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                    </div>
                </div>
                <div className='section-wrapper'>
                {children}
                </div>
            </div>
        </section>
    )
}