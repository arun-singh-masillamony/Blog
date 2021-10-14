import React,{ useState ,useEffect } from 'react';
import Articles from '../article-content';
import Articlecontents from '../ArticleContents';
import  NotFoundPage from './NotFoundPage';
import {app} from "../Firebase.js"
import { getDatabase, ref, child, get ,push ,set,update} from "firebase/database";
import { initializeApp } from 'firebase/app'
import { getApps } from 'firebase/app';
import Firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const ArticleDetail = ({ match }) => {
    const Name =match.params.name;
    const [name,setName] =useState("");
    const [title,setTitle] =useState("");
    const [upvote,setUpvote] =useState("");
    const [content,setContent] =useState([]);
    const [Articles,setArticles] =useState({});
    const database = getDatabase(app);
    
    function updateUpvote(upvotes) {
        const db = getDatabase();
        console.log("upvote");
        console.log(upvote);
        //const newUpvote=setUpvote(upvote+1);
        console.log(upvote);
        // A post entry.
       // const postData = { 
          //  upvotes: 6,
        //};
        // Get a key for a new Post.
        //const newPostKey = push(child(ref(db), 'posts')).key;
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        //updates[`articles/${Name}`] = true;
        updates[`articles/${Name}/upvotes`] = Firebase.database.ServerValue.increment(1);
        console.log(updates);
        //updates['articles/learn-react/'] = postData;
        return update(ref(db), updates);
      }


    const [articleInfo,setArticleInfo] =useState({ upvote :0, comments :[]});
    useEffect(()=>{
        const dbRef = ref(getDatabase());
        get(child(dbRef, `articles/${Name}`))
        .then((snapshot) => {
        if (snapshot.exists()) {
            console.log("hello before snap")
            console.log(snapshot.val());
            console.log("hello")
            const articles1 =snapshot.val();
            setArticles(articles1);
            //name = articles.name;
            //title =articles.title;
            //upvote = articles.upvote;
            setUpvote(Articles.upvote)
           console.log(Articles)
            console.log("bye")
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
});
    },[])
    
   
    /*const Article=Articles.find((Article1)=>{
          return(name===Name)
    })
    if(!Article) return <NotFoundPage />

    const others=Articles.filter((article)=>(name!==Name))
*/
    return(
    <>
    <h1>{Articles.name} </h1>
    <h3>{Articles.title}</h3>
    <p> this post has been upvoted {Articles.upvotes} times</p>
    <button onClick={updateUpvote} >Upvotes</button>
    {console.log("below is the content")}
    {/*console.log(Articles.content[0])*/}
    <p>{Articles.upvotes}</p>
    {/*Articles.content.map((para, key)=>(
       <p key={key}>{para}</p>
    ))
    }
    {/*Articles.content.forEach(element => {
      <p>{element}</p>  
    })
    }
    {/*<Articlecontents articles={others} heading="Others" />*/}
    </>
);
}

export default ArticleDetail;