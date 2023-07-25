import React, { useState } from "react"
import { Layout } from "../layouts/layout"
import { WhatWeDo, PageBanner } from "../components"
import { Modal, ScheduleConsultation } from "../components/modal"

export const Services=()=>{
    const [isOpen, setIsOpen] = useState(true)


    return (
        <Layout>
            <PageBanner page_title={'Our Services'}/>
            <WhatWeDo setIsOpen={setIsOpen}/>
            <Modal open={isOpen}>
                {isOpen? <ScheduleConsultation/>:null}
            </Modal>
        </Layout>
    )
}