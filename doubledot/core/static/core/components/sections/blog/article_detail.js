import React, { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import { endpoints } from "../../../api"
import classes from './article_detail.module.css'
import { BlogLayout } from "./blog_layout"
import { Layout } from "../../../layouts/layout"

export const ArticleDetail=()=>{

    const [article, setArticle] = useState({slug:'', image:'', title:'', content:'', category:'', author:''})
    const [like, setLike] = useState(0)
    const { slug } = useParams()

    const likeArticle=()=>{
        const res = endpoints.likeArticle()
        setLike(res.data.likes)
    }

    useEffect(()=>{
        
        const getArticleDetail =async()=>{
            const res = await endpoints.getArticle(slug)
            setArticle(res.data)
        }

        getArticleDetail()

        // const post = document.getElementById('post').innerText
        // const post = JSON.parse(document.getElementById('post').textContent);
        // setArticle(post)
    }, [])
    
    return (
        <Layout>
            <BlogLayout author={article.author}>
                
                <article className={classes.article_container}>
                    <div className={classes.article_container}>
                        <h2  className={classes.article_title}>{article.title}</h2>
                        <p className={classes.article_read}>{`16 min`}</p>
                    </div>
                    <div  className={classes.article_img}>
                        <img src={article.image} alt={article.title}/>
                    </div>
                    <div  className={classes.article_content}>
                        <p>{article.content}</p>
                    </div>
                    <div  className={classes.article_metrics_wrapper}>
                        {/* <button className={classes.article_metric} onClick={likeArticle()}>
                            <p>{article.totalLikes}</p>
                            <i className="fas fa-likes"></i>
                        </button>
                        <button className={classes.article_metric}>
                            <p>{'129'}</p>
                            <i className="fas fa-comments"></i>
                        </button> */}
                    </div>
                </article>
            </BlogLayout>
        </Layout>
    )
}
