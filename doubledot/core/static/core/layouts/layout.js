import React, { useState } from "react"
import { Modal, Phone, Idea} from "../components/modal"
import { MenuBar } from "./menubar/menubar"
import './layout.css'
import { Footer } from "./footer/footer"
import { Header } from "./header/header"

export const Layout=({children})=>{

    const [isPhone, setOpenPhone]= useState(false)
    const [isIdea, setOpenIdea]= useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const openPhone=()=>{
        setOpenPhone(true)
        // setOpenIdea(false)
    }

    const closePhone=()=>{
        setOpenPhone(false)

    }

    const openIdea=()=>{
        setOpenIdea(true)
        // setOpenPhone(false)
    }

    const closeIdea=()=>{
        setOpenIdea(false)
    }


    return (
        <>
            <div className="layout">
                <Header setOpenMenu={setOpenMenu} openIdea={openIdea} openPhone={openPhone}/>
                <main className="layout-main">
                    {children}
                </main>
                <Footer/>
                <MenuBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            </div>
            <Modal open={isPhone||isIdea} close={closePhone}>
                {isIdea? <Idea close={closeIdea} /> : null}
                {isPhone? <Phone close={closePhone} /> : null}
            </Modal>
        </>
    )
}