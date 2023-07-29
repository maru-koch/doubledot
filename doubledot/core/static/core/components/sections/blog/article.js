import React from "react"
import classes from './article.module.css'

export const Article=({img_url, title, content, comments,tags, related_articles})=>{

    // Deplays the article details

    const likeArticle=()=>{
        // likes the article
    }

    return (
        <article className={classes.article_container}>
            <div>
                <h2  className={classes.article_title}>{title}</h2>
                <p>27 mins read</p>
            </div>
            <div  className={classes.article_img}>
                <img src={img_url} alt={title}/>
            </div>
            <div  className={classes.article_content}>
                <p>{content}</p>
            </div>
            <div  className={classes.article_metrics_wrapper}>
                <button className={classes.article_metric}>
                    <p>{6}</p>
                    <i className="fas fa-likes"></i>
                </button>
                <button className={classes.article_metric}>
                    <p>{'129'}</p>
                    <i className="fas fa-comments"></i>
                </button>
            </div>
        </article>
    )
}