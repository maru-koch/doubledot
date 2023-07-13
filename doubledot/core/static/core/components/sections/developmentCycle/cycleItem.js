import React from 'react'
import './cycleItem.css'

export const CycleItem=({data, id})=>{
    return (
        <div className="timelineItem__container">
            <div className="timelineItem__wrapper">
                <p className="timelineItem__title">{data.title}</p>
                <p className="timelineItem__desc">{data.description}</p>
                {/* <span className="timelineItem__circle">{id}</span> */}
            </div>
        </div>
    )
}