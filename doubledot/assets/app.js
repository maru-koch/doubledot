import React from 'react'
import {Router, Routes, Route} from 'react-router-dom'

import { Home, AboutUs, Contact} from "../core/static/core/pages";

export const App=()=>{
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='about' element={<AboutUs/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Routes>
    )
}