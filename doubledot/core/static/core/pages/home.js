import React from 'react'
import { Layout } from "../layouts/layout";
import { useState } from 'react';
import { Banner, Article, SpeedAdvantage,Technologies, DevelopmentCycle, WhyChooseUs, Subscribe, Testimony } from '../components';
import { Modal, ScheduleConsultation, BookedAppointment } from '../components/modal';
 


export const Home=()=>{

    const [isOpen, setIsOpen] = useState(false)
    const [booked, setBooked] = useState(false)

    return (
        <Layout>
            <Banner setIsOpen={setIsOpen}/>
            <SpeedAdvantage/>
            <DevelopmentCycle/>
            <Technologies/>
            <WhyChooseUs/>
            <Subscribe/>
            <Modal open={isOpen}>
                {booked?<BookedAppointment setIsOpen={setIsOpen}/>: isOpen?<ScheduleConsultation setBooked={setBooked} setIsOpen={setIsOpen}/>:null}
            </Modal>
        </Layout>
    )
}