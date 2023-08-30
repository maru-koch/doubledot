
import React from "react";
import classes from './blog_layout.module.css'
import { Link } from "react-router-dom";

export const BlogLayout=({children, author})=>{
    console.log(author)
    return (
        <div className={classes.blog_container}>
            <div className={classes.blog_wrapper}>
                <div className={classes.blog_articles}>
                    {children}
                </div>
                <aside className={classes.blog_sidebar}>
                    {/* SIDE */}
                    <div className={classes.blog_author}>
                        <div className={classes.blog_author_detail}>
                            <div className={classes.blog_author_img}>
                                <img src={author?.image} alt={''}/>
                            </div>
                            <div className={classes.author_detail_container}>
                                <p className={classes.author_title}>{author?.role}</p>
                                <div className={classes.author_detail}>
                                    <span>{author?.profile?.first_name || author?.profile?.username}</span>
                                    <span>{author?.profile?.last_name}</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.author_social}>
                            <p>Connect with Author</p>
                            <div className={classes.author_social_icons}>
                                {author?.social_media_handles?.map((media, id)=>{
                                    <div key={id}>
                                        <Link to={media?.url}><i className={`fa-brands fa-facebook`}></i></Link>
                                    </div>
                                } )}
                        
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