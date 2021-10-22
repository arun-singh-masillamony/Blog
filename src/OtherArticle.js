import React from 'react';
import Articlecontents from './ArticleContents';

const OtherArticle = ({articles,available,heading})=>{
    
     
    return(
    <div className="OtherArticle">
        <br/>
        <h2>{heading}</h2>
        
        {Object.keys(articles)
        .filter(key=>articles[key].name!==available.name)
        .map((art,key)=>(
            <Articlecontents articles={articles[art]} key={key}/>
        ))
        }
        <br/>
        <br/>
    </div>
    )
};

export default OtherArticle;