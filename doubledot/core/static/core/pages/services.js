import React from "react"
import { Layout } from "../layouts/layout"
import { WhatWeDo, PageBanner } from "../components"

export const Services=()=>{
    return (
        <Layout>
            <PageBanner page_title={'Our Services'}/>
            <WhatWeDo/>
        </Layout>
    )
}