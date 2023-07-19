import React from 'react'
import {Router, Routes, Route} from 'react-router-dom'

import { Home, AboutUs } from "../core/static/core/pages";


export const App=()=>{
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<AboutUs/>}/>
        </Routes>
    )
}