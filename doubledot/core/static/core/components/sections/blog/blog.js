import React from "react"
import { useEffect, useState } from "react"
import { articles } from "../../../constants/articles"
import { Layout } from "../../../layouts/layout"

import classes from './blog.module.css'
import { get_articles } from "../../../api"



export const Article=({article})=>{
    console.log(article)
    return (
        <section className={classes.article_container}>
            <div className={classes.article_img}>
                <img src={article.img_url}/>
            </div>
            <h2>{article.title}</h2>
            <div>
                <p>{article.excerpts}</p>
                <p>10 mins read</p>
            </div>
            <div>
                <button>Read More</button>
            </div>
        </section>
    )
}


export const Blog=()=>{

    const [articles_, setArticles] = useState([])

    useEffect(()=>{
        // fetches the blog articles on page load
        
        const res = get_articles()
        const article = res.data
        console.log(article)
        setArticles(article)
    }, [])
    
    return (
        <Layout>
            <main className={classes.blog_wrapper}>
                <div className={classes.blog_header}>
                    <h3>{'Home > Top Stories'}</h3>
                    <div>
                        <p className={classes.blog_title}>Top stories</p>
                        <p className={classes.blog_number}><span>{articles.length}</span>Articles</p>
                    </div>
                </div>
                
                <div className={classes.blog_articles}>
                    {articles_.map(article=><Article article={article}/>)}
                </div>
            </main>
        </Layout>
    )
}