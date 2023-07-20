import React from 'react';
import {Section} from '../sub'
import classes from './testimony.module.css';
import {testimonies} from '../../../constants/testimonyData'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

import {Navigation, Pagination, Autoplay } from 'swiper/modules';

const Card=({testimony, name, pic, position})=>{
    return (
        <main className = {classes.testimony__container}>
            <div className = {classes.testimony__card}>
                <div className ={classes.left} ><i className = "fas fa-quote-left"></i></div>
                <p className = {classes.testimonial}>{testimony}</p>
                <div className ={classes.testimony__userDetails}>
                    <div className ={classes.testimony__image}>
                        <img src ={pic} alt ={name}/>
                    </div>
                    <div className = {classes.testimony__user_position}>
                        <h4 className = {classes.testimony__name}>{name}</h4>
                        <p  className ={classes.testimony__position}>{position}</p>
                    </div>
                </div>
             </div>
        </main>
    )
}

export const Testimony = ()=>{
    // SwiperCore.use([Navigation, Autoplay])
    return (
        <Section title = "What Our Clients are Saying" subtitle ="Become the next to witness the beauty of great design and innovation. Partner with us">
            <div className = {classes.swiper__container}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="swiper"
                >
                    {
                        testimonies.map((testifier)=>
                        <SwiperSlide>
                            <Card 
                                testimony={testifier.testimony} 
                                name={testifier.name} 
                                position={testifier.position}
                                pic={testifier.pic}
                                />
                        </SwiperSlide>)
                    } 
                    </Swiper>
            </div>
        </Section>
    )
}

 
