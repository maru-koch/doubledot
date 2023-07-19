import React from 'react';
import { Section} from '../sub';
import classes from './whyChooseUs.module.css';
import { Reasons } from './reasons';


export const WhyChooseUs =()=>{ 
    return (
    
        <Section title = "" subtitle = "">
            <div className ={classes.whyChooseUs__wrapper}>
                <div>
                    <div className ={classes.whyChooseUs_left}>
                        <Reasons/>
                    </div>
                </div>
                <div className = {classes.whyChooseUs_right}>
                    <div className = {classes.whyChooseUs_words}>
                        <h2 className={`${classes.whyChooseUs_title} title`}>Why Choose Us?</h2>
                        <p className='description'>
                            We have dedicated team of Engineers with different specialties in 
                            technologies. So, you can be rest assured of quality and timely delivery.
                            We are best in developing innovative and practical solutions.
                        </p>
                    </div>
                    <div className ="btn-holder">
                        <button className='btn' onClick={()=>{}}>
                            {/* <span className='btn-icon-holder'><span className='btn-dot'></span><i className='fas fa-arrow-right'></i></span> */}
                            Get In Touch
                            </button>
                    </div>
                </div>
            </div>
        </Section>)
}

