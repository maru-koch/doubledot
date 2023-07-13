import React from 'react'
import './popup.css'

export const PopUp=({title, content, btnText, action})=>{
    return (
        <div className="pop__container">
            <div className="pop__wrapper">
                <div className="pop__title">
                    <h2>{title}</h2>
                </div>
                <p className="pop__content">{content}</p>
                <div className="pop__btn">
                    <button onClick={action}>{btnText}</button>
                </div>
            </div>
        </div>
    )
}

