import React from 'react';
import ArticleContents from '../ArticleContents';
import Articles from '../article-content';
const ArticlePage = () => {
    return(
    <>
    <ArticleContents articles={Articles} heading='Article' />
    </>
    )
};

export default ArticlePage;