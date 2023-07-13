import React from "react"
import './footer.css'

export const Footer=()=>{
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                {/* COMPONENTS HERE */}
                <div className="footer-copyright-holder">
                    <p>&copy; 2023, Doubledot Technologies. All right reserved</p>
                </div>
                <ul className="footer-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About Us</li>
                        <li className="nav-item">Contact</li>
                </ul>
            </div>
        </footer>
    )
}