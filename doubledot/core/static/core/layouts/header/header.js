import React, { useEffect, useRef, useState } from "react"
import './header.css'

export const Header=({setOpenMenu, openIdea, openPhone})=>{
    const [headerColor, setHeaderColor] = useState('var(--main-color)')

    const headerRef = useRef()

    const changeHeaderColor=(e)=>{

        // changes the background color of header when scroll position
        // greater than 200 on vertical axis
        
        window.scrollY < 370 ? 
        headerRef.current.style.backgroundColor = 'var(--main-color)' : 
        headerRef.current.style.backgroundColor = 'white'
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeHeaderColor)
        return ()=>window.addEventListener('scroll', changeHeaderColor)

    }, [])

    return (
        <header ref={headerRef} className="header">
            <nav className="header_wrapper">
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
                    <h2 onClick={()=>openIdea()}>Got an Idea ?</h2>
                </div> 
                <div className="header_icons">
                    <i id="header_phone_icon" className="fa-solid fa-phone" onClick={()=>openPhone()}></i>
                    <i id="header_phone_icon" className="fa-solid fa-lightbulb" onClick={()=>openIdea()}></i>
                </div> 
            </nav>
        </header>
    )
}