import React from "react"
import classes from './about.module.css'
import { Layout } from "../layouts/layout"

const AboutCard=({icon, title, content, bg})=>{
    return (
        <div className={classes.about_card}>
            <div>
                <i className={icon}></i>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{content}</p>
            </div>
            <div>
                <img src={bg} alt={title}/>
            </div>
        </div>
    )
}

export const AboutUs=()=>{
    return (
        <Layout>
            <section className={classes.about_container}>
                <div className={classes.about_wrapper}>
                    <div className={classes.about_whoWeAre}>
                        <h2>Who We are</h2>
                        <p>
                            A technology company providing engineering-as-a-service solutions at scale to organizations 
                            across multiple industries. We are a legion of product, engineering, and design experts 
                            helping organisations develop world-class products
                        </p>
                    </div>
                    <div className={classes.about_creativity}>
                        <h2>Reimagining Creativity</h2>
                        <p>
                            We want to build a world where great ideas, products, and companies come to fruition quickly 
                            whilst achieving the required impact. Our work is to facilitate the process.
                        </p>
                    </div>
                    <div>
                    <div className={classes.about_cardContainer}>
                        <AboutCard
                            icon="static/icons/diverse-team.svg"
                            title="Successful, diverse teams"
                            content="Build fully functional, visually compelling web and mobile applications that represent your brand perfectly"
                            bg="static/icons/diverse-team-bg.svg"
                        />
                        <AboutCard
                            icon="static/icons/agile-culture.jpeg"
                            title="Agile culture"
                            content="Design thinking and agile principles are at the core of how our teams operate."
                            bg="static/icons/agile-culture-bg.jpeg"
                        />
                        <AboutCard
                            icon="static/icons/world-class-team.svg"
                            title="World class Team"
                            content="Engineers at Enyata are technology leaders and domain experts in their fields."
                            bg="static/icons/world-class-team-bg.svg"
                        />
                        <AboutCard
                            icon="static/icons/scalable-team.svg"
                            title="Scalable Team"
                            content="Augment your teams with our on-demand, high-quality engineering teams to build at scale."
                            bg="static/icons/scalable-team-bg.svg"
                        />
                    </div>
                </div>
                </div>
            </section>
        </Layout>
    )
}