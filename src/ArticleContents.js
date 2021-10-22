import React from 'react';
import { Link } from 'react-router-dom'

const Articlecontents = ({articles}) => {
    return(
    <>
    {console.log("hello")}
    <Link className="article-link" to={`/article/${articles.name}`}>
        <h2>{articles.name}</h2> 
        {console.log(articles)}
        <p >{articles.content[0].substring(0 ,160)}...</p>
     </Link>
     
    </>
    )
};

export default Articlecontents;