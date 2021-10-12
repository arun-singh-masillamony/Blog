import React,{ useState ,useEffect } from 'react';
import Articles from '../article-content';
import Articlecontents from '../ArticleContents';
import  NotFoundPage from './NotFoundPage';

const ArticleDetail = ({ match }) => {
    const name =match.params.name;
    const [articleInfo,setArticleInfo] =useState({ upvote :0, comments :[]});
    useEffect(()=>{
        setArticleInfo({ upvote :Article.upvotes, comments :[]});
    },[name])
    
    const Article=Articles.find((Article1)=>{
          return(Article1.name===name)
    })
    if(!Article) return <NotFoundPage />

    const others=Articles.filter((article)=>(article.name!==name))
    return(
    <>
    <h1>{Article.name} </h1>
    <h3>{Article.title}</h3>
    <p> this post has been upvoted {articleInfo.upvote} times</p>
    <button onClick={()=>setArticleInfo({upvote : articleInfo.upvote+1})} >Upvotes</button>
    {Article.content.map((para, key)=>(
       <p key={key}>{para}</p>
    ))
}
 <Articlecontents articles={others} heading="Others" />
    </>
);
}

export default ArticleDetail;