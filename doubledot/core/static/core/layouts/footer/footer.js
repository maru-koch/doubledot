import React from 'react'
import { Section } from "../../components/sections/sub/section"
import {CopyRight, Address, WhatWeDo, Company, CompanyInfo} from './footer-components'
import classes from './footer.module.css'

export const Footer =()=>{
    return (
        <Section bg ="var(--main-color">
            <div className={classes.footer_wrapper}>
                <Company/>
                {/* <CompanyInfo/> */}
                <WhatWeDo/>
                <Address/>
            </div>
            <CopyRight/>
        </Section>
    )
}

