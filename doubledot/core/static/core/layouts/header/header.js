import React from "react"
import './header.css'

export const Header=({setOpenMenu, openIdea, openPhone})=>{
    return (
        <header className="header">
            {/* HERBURGER MENU ICON */}
            <div className="header_menu">
                <div className="header_menu_bars" onClick={()=>setOpenMenu(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* DOUBLEDOT ICON */}
            <div className="header_doubledot">
                {/* <i id="layout_doubledot_icon" class="fa-solid fa-ring"></i> */}
                <div className="header_doubledot_logo"></div>
            </div>
            {/* BUTTON */}
            <div className="header_idea">
                <h2 onClick={()=>openIdea()}>Got an Idea?</h2>
            </div> 
            <div className="header_icons">
                <i id="header_phone_icon" className="fa-solid fa-phone" onClick={()=>openPhone()}></i>
                <i id="header_phone_icon" className="fa-solid fa-lightbulb" onClick={()=>openIdea()}></i>
            </div> 
        </header>
    )
}