import React from 'react'
import ReactDom from 'react-dom'
import './style.css'


const OVERLAY_STYLE ={
    position: 'fixed',
    left:0,
    right:0,
    bottom:0,
    top: 0,
    margin: '0 auto',
    backgroundColor:'rgba(0,0,0,0.5)',
    opacity:1,
    zIndex: 1000,
    display:'flex',
    alignItem:'center',
}

const MODAL_STYLE ={
    display:'flex',
    justifyContent:'center',
    alignItem:'center',
    
    margin: '0 auto',
    zIndex: 1000,
    opacity:1,
}

export const Modal=({open, close, children})=>{
    if (!open) return null;
    return ReactDom.createPortal(
    <>
        <main className="modal" style ={OVERLAY_STYLE}>
        <div style ={MODAL_STYLE} >
            {children}
        </div>
        </main>
    </>,
    document.getElementById('portal')
    )
}

