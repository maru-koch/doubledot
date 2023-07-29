import React from 'react'
import {Router, Routes, Route} from 'react-router-dom'

import { Home, AboutUs, Contact, Services} from "../core/static/core/pages";
import { Blog } from '../core/static/core/components';

export const App=()=>{
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='about' element={<AboutUs/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='blog' element={<Blog/>}/>
        </Routes>
    )
}