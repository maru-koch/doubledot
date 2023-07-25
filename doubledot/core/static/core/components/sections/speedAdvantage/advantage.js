import React, { useRef, useState } from "react"
import { Section } from "../sub"
import classes from './advantage.module.css'

const AdvantageCard=({title, content, icon})=>{
    const [open, setOpen] = useState(false)
    const [active, setActive]= useState(false)

    const titlebar= useRef()

    return (
        <section className={classes.advantage_cardContainer}>
            <div className={classes.advatage_cardWrapper} onClick={()=>setOpen(!open)} ref={titlebar}>
                <i className={`fas ${open? `fa-chevron-down`:`fa-chevron-right`}`} style={{color:'#ea7822'}}></i>
                <h3>{title}</h3>
                <div><img src={icon}/></div>
                
            </div>
            <div className={classes.advantage_cardContent} style={{display:`${open? `block` : `none`}`}}>
                <p>{content}</p>
            </div>
        </section>
    )
}
export const SpeedAdvantage=()=>{
    return (
        <Section
            title={'Gain Undue Advantage'}
            subtitle={'We move fast and get things done quickly'}
        >
            <section className={classes.advantage_container}>
                <div className={classes.advantage_wrapper}>
                    <div className={classes.advantage_left}>
                        <h2>
                            Make speed your unfair advantage with software engineering experts.
                        </h2>
                        <p>
                            In 2023, speed and flexibility matters more than ever.
                            <br/>
                            <br/>
                            At Doubledot Technologies, our goal is to get you the <strong>best team of engineers in the shortest time</strong> so we can all focus on getting the job done.
                            <br/>
                            <br/>
                            But we don't stop there – for every project, we rigorously follow and regularly review three lean software development principles to make sure we deliver value fast and continuously.‍
                            <br/>
                            <br/>
                            Drop us a message to learn more about what difference it will make for your project.
                        </p>
                    </div>
                    <div className={classes.advantage_right}>
                        <AdvantageCard
                            title="Faster time to Market"
                            content="By streamlining the development process and focusing on delivering the most important features first, we reduce the time it takes to bring a product, or new features, to market."
                            icon="static/images/faster-time.svg"
                        />
                         <AdvantageCard
                            title="No Silos Communication"
                            content="Breaking the communication silos and putting emphasis on the importance of collaboration among all members of the development team."
                            icon="static/images/communication.svg"
                        />
                         <AdvantageCard
                            title="Doing the right thing"
                            content="Putting the business goals of our clients along with the end-user experience at the center of the development process."
                            icon="static/images/right-thing.svg"
                        />
                         <AdvantageCard
                            title="Radical Project Transparency"
                            content="Regular reviews and progress assessments to provide better visibility into the status of a project and detect blockers."
                            icon="static/images/transparency.svg"
                        />
                    </div>
                </div>
            </section>
        </Section>
    )
}