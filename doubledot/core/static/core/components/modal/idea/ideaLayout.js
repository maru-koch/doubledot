import React from "react"
import './ideaLayout.css'

export const IdeaLayout=({children, title, subtitle, close})=>{
    // , title, subtitle, close
    return (
        <div className="layout-container">
            <div className="layout-header">
                <div className="layout-header-top">
                    <div className="layout-img">
                        <img src="static/icons/logo.png"/>
                    </div>
                    <i className="fas fa-close" onClick={()=>close()}></i>
                </div>
                <div className="layout-header-bottom">
                    <p className="layout-title">{title}</p>
                    <p className="layout-sub-title">{subtitle}</p>
                </div>
            </div>
            <section>
                {children}
            </section>
        </div>
    )
}