
import React from "react";
import classes from './blog_layout.module.css'

export const BlogLayout=({children, author, articles})=>{
    return (
        <div className={classes.blog_container}>
            <div className={classes.blog_wrapper}>
                <div className={classes.blog_articles}>
                    {children}
                </div>
                <aside className={classes.blog_sidebar}>
                    {/* AUTHOR */}
                    <div className={classes.blog_author}>
                        <div>
                            <div className={classes.author_img}>
                                <img src={author.img} alt={author.first_name}/>
                            </div>
                            <div className={classes.author_detail_container}>
                                <p className={classes.author_title}>{author.title}</p>
                                <div className={classes.author_detail}>
                                    <span>{author.first_name}</span>
                                    <span>{author.last_name}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.author_social}>
                            <p>Connect with Author</p>
                            <div className={classes.author_social_icons}>
                                <div>
                                    <i className="fa-brands fa-linkedin"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div>
                                    <i className="fa-brands fa-facebook"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ARTICLE CATEGORIES */}
                    <div>
                        {/* article categories */}
                    </div>
                    <div>
                        {/* <Subscribe/>
                        <SocialMediaIcons/> */}
                    </div>
                </aside>
            </div>
        </div>
    )
}