import React from 'react'
import { Layout } from "../layouts/layout";
import { Banner, Article, SpeedAdvantage,Technologies, DevelopmentCycle, WhyChooseUs, Subscribe, Testimony } from '../components';
 


export const Home=()=>{
    return (
        <Layout>
            <Banner/>
            {/* <Article/> */}
            <SpeedAdvantage/>
            <DevelopmentCycle/>
            <Technologies/>
            <WhyChooseUs/>
            <Subscribe/>
            {/* <Testimony/> */}
        </Layout>
    )
}