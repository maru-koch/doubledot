import React from "react"
import { useEffect, useState } from "react"
// import { articles } from "../../../constants/articles"
import { Layout } from "../../../layouts/layout"


import { endpoints } from "../../../api"
import { Link, useNavigate } from "react-router-dom"
import classes from './articles.module.css'


export const Article=({article})=>{
    
    const navigate= useNavigate()

    const goTo=(e)=>{
        e.preventDefault()
        navigate(`${article.slug}`)
    }

    return (
        <section className={classes.article_container}>
            <div className={classes.article_img}>
                <img src={article.image}/>
            </div>
            <h2 className={classes.article_title}>{article.title}</h2>
            <div className={classes.article_slug}>
                <p>{article.slug}</p>
                <p>10 mins read</p>
            </div>
            <div className={classes.article_btn}>
                <button onClick={(e)=>goTo(e)}>
                    Read More
                </button>
            </div>
        </section>
    )
}


export const Articles=()=>{

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        // fetches the blog articles on page load

        const fetchArticles= async ()=>{
           const res = await endpoints.getAllArticles()
           console.log('ARTICLE:', res.data)
           if (res.status===200){
                setArticles(res.data)
           }
        }
       fetchArticles()
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
                    {articles.map(article=><Article article={article}/>)}
                </div>
                
            </main>
        </Layout>
    )
}