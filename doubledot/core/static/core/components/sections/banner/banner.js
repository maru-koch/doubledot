import React from "react"
import classes from './banner.module.css'
import Typewriter from "typewriter-effect";

export const Banner=()=>{
    return (
        <section className={classes.header_container}>
            <div className={classes.header_wrapper}>
                <h1>
                    Custom Software Development &
                    Design
                </h1>
                <div className={classes.typeWriterContainer}>
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Skyrocket your business with custom solutions")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Web Design & Development")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Mobile App Development")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("IoT Development")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("We Design")
                                .pauseFor(500)
                                .typeString(", Innovate")
                                .pauseFor(200)
                                .typeString(", and Develop")
                                .pauseFor(2000)
                                .start() 
                        }
                    }
                        options={{loop:true, wrapperClassName:`${classes.typeWriterText}`}}
                />
                </div>
                <div className={classes.header_get_started}>
                    <button>Get Started<span><i className="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
            <div className={classes.header_img}></div>
        </section>
    )
}