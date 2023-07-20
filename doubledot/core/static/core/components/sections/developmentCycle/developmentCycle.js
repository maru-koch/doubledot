import React from 'react';
import {CycleItem} from './cycleItem';
import classes from './developmentCycle.module.css'
import { devCycleData } from '../../../constants/developmentCycleData';
import { Section } from '../sub/section';


export const DevelopmentCycle =({timeLineData})=>{
    return(
        <Section 
            title={"Our Software Development Cycle"} 
            subtitle={<span>We apply a systematic approach to complex and simple projects. We follow Agile methodology,<br/> Scrum and Kanban, which allow our dedicated team to deliver exceptional apps on time.</span>}
            bg={'#f1f0f0'}
            >
             <div className={classes.timeline__container}>
                <div className={classes.timeline__wrapper}>
                    {devCycleData.map((data, idx)=> (<CycleItem data ={data} key={idx} id={idx+1}/>))}
                </div>
                <div className={classes.timeline__agile}>
                    <div className={classes.timeline__agile_wrapper}>
                        <div className={classes.timeline__agile_left}>
                            <h3 className={`${classes.timeline__agile_title} title`}>Our Agile Processes</h3>
                            <div className='description'>
                                <p>
                                    We follow the Agile Software development cycle. From conceptualization
                                    to product launch, maintainance and support, we help our client maximize
                                    their product's potential by harnassing the best techniques and technologies 
                                    in design and development.
                                </p>
                                <div className='btn-holder'>
                                    <button className='btn'>Let's talk</button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.timeline__agile_right}>
                            <div className={classes.timeline__agile_img}>
                                <img src='static/images/agile_img.png' alt='agile processes'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}