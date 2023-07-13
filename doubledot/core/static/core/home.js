import React from 'react'
import { Layout } from "./layouts/layout";
import { Banner, Article, Services, Technologies, DevelopmentCycle, WhyChooseUs, Subscribe, Testimony } from './components';
 


export const Home=()=>{
    return (
        <Layout>
            {/* <Banner/>
            <Article/> */}
            <Services/>
            {/* <Technologies/> */}
            <DevelopmentCycle/>
            <WhyChooseUs/>
            <Subscribe/>
            {/* <Testimony/> */}
        </Layout>
    )
}