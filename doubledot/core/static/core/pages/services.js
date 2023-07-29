import React, { useState } from "react"
import { Layout } from "../layouts/layout"
import { WhatWeDo, PageBanner } from "../components"
import { Modal, ScheduleConsultation, BookedAppointment} from "../components/modal"

export const Services=()=>{

    const [isOpen, setIsOpen] = useState(false)
    const [booked, setBooked] = useState(false)

    return (
        <Layout>
            <PageBanner page_title={'Our Services'}/>
            <WhatWeDo setIsOpen={setIsOpen}/>
           <Modal open={isOpen}>
                {booked?<BookedAppointment setIsOpen={setIsOpen}/>: isOpen?<ScheduleConsultation setBooked={setBooked} setIsOpen={setIsOpen}/>:null}
            </Modal>
        </Layout>
    )
}