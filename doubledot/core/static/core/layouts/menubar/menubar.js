import React from "react"
import './menubar.css'
import { Link, NavLink} from "react-router-dom"
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
                    <Link className="menu-item" to={'/'}>
                        <i className="fas fa-home"></i>
                        <p>Home</p>
                    </Link>
                    <Link className="menu-item" to={'/services'}>
                        <i className="fas fa-tools"></i>
                        <p>Services</p>
                    </Link>
                    <Link className="menu-item" to={'/articles'}>
                        <i className="fas fa-box"></i>
                        <p>Tech Stories</p>
                    </Link>
                    <Link className="menu-item" to={'/about'}>
                        <i className="fas fa-info"></i>
                        <p>About</p>
                    </Link>
                    <Link className="menu-item" to={'/contact'}>
                        <i className="fas fa-envelope"></i>
                        <p>Contact</p>
                    </Link>
                </div>
            </section>
        </aside>
    )
}