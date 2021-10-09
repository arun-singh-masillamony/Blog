import React from 'react';
import { Link } from 'react-router-dom'
const Articlecontents = ({articles,heading}) => {
    return(
    <>
    <h2>{heading}</h2>
    {articles.map((nam, key)=>(
        <Link className="article-link" key={key}to={`/article/${nam.name}`}>
        <h3>{nam.title}</h3>
        <p>{nam.content[0].substring(0 ,160)}...</p>
        </Link>
    ))}
    
    </>
    )
};

export default Articlecontents;