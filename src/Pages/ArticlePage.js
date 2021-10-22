import ArticleContents from '../ArticleContents';
import React,{ useState ,useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import 'firebase/compat/database';
import Loader from './Loader';

const ArticlePage = () => {

    const [Articles,setArticles] =useState({});
    const [Loading,setLoading]=useState(true);
    useEffect(()=>{
        const dbRef = ref(getDatabase());
        get(child(dbRef, `articles`))
        .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const articles1 =snapshot.val();
            setArticles(articles1);
            setLoading(false)
            
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        
        });
    },[])
    const arrayw=Object.values(Articles)
    if (Loading) return <Loader />;
    return(
    <>
    <h1>Articles</h1>
    <hr/>
    {arrayw.map(val => (<ArticleContents articles={val} heading='Article' />)
    )}
    {/*<ArticleContents articles={arrayw} heading='Article' />*/}
    <br/><br/>
    </>
    )
};

export default ArticlePage;