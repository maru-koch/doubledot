import React from "react"
import './menubar.css'

export const MenuBar=({openMenu, setOpenMenu})=>{
    if (!openMenu) return null
    return (
        <aside className="menu-side-bar">
            <section className="menu-left">
                <div className="menu-logo">
                    <div className="menu-logo-img">
                        <img src="static/icons/logo_white.png" alt="logo"/>
                    </div>
                </div>
            </section>
            <section className="menu-right">
                <div className="menu-top">
                    <p>Menu</p>
                    <i className="fas fa-close menu-close" onClick={()=>setOpenMenu(false)}></i>
                </div>
                <div className="menu-item-container">
                    <div className="menu-item">
                        <i className="fas fa-home"></i>
                        <p>Home</p>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-tools"></i>
                        <p>Services</p>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-box"></i>
                        <p>Technologies</p>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-info"></i>
                        <p>About</p>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-envelope"></i>
                        <p>Contact</p>
                    </div>
                </div>
            </section>
        </aside>
    )
}