import React from "react"
import classes from './about.module.css'
import { Layout } from "../layouts/layout"
import { PageBanner } from "../components"

const AboutCard=({icon, title, content, bg})=>{
    return (
        <div className={classes.about_card}>
            <div className={classes.about_cardTitle}>
                <img src={icon}/>
                <h3>{title}</h3>
            </div>
            <div className={classes.about_cardContent}>
                <p>{content}</p>
            </div>
            <div className={classes.about_cardImage}>
                <img src={bg} alt={title}/>
            </div>
        </div>
    )
}

export const AboutUs=()=>{
    return (
        <Layout>
            <section className={classes.about_container}>
                <PageBanner page_title={'About Us'}/>
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
                        <blockquote>
                            We want to build a world where <em>great ideas</em>, <em>products</em>, and <em>companies</em> come to fruition quickly 
                            whilst achieving the required impact. Our work is to facilitate the process.
                        </blockquote>
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
                            bg="static/icons/agile-culture-bg.jpg"
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