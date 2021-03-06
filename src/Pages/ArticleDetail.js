import React,{ useState ,useEffect } from 'react';
import { getDatabase, ref, child, get ,update} from "firebase/database";
import Firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import Loader from './Loader';
import OtherArticle from '../OtherArticle';
//import app from '../Firebase';


const ArticleDetail = ({ match }) => {
    const Name =match.params.name;
    const [upvote,setUpvote] =useState("");
    const [content,setContent] =useState([]);
    const [Articles,setArticles] =useState({});
    const [otherArticle,setotherArticle] =useState({});
    const [Loading,setLoading]=useState(true);

    function updateUpvote() {
        const db = getDatabase();
        console.log(upvote);
        const updates = {};
        updates[`articles/${Name}/upvotes`] = Firebase.database.ServerValue.increment(1);
        const dbRef = ref(getDatabase());
        get(child(dbRef, `articles/${Name}`))
        .then((snapshot) => {
        if (snapshot.exists()) {
            const articles1 =snapshot.val();
            setUpvote(articles1.upvote)
        }})
        return update(ref(db), updates);
      }
     

    useEffect(()=>{
        const dbRef = ref(getDatabase());
        //get the required article
        get(child(dbRef, `articles/${Name}`))
        .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const articles1 =snapshot.val();
            setArticles(articles1);
            setUpvote(articles1.upvotes)
            setContent(articles1.content)
            setLoading(false)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error); 
    });

    //get the other articles
    get(child(dbRef, `articles`))
        .then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            const articles1 =snapshot.val();
            setotherArticle(articles1);
            setLoading(false)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
    });
    },[upvote,Name])

if (Loading) return <Loader />;
    return(
    <>
    <h1>{Articles.name} </h1>
    <h3>{Articles.title}</h3>
    <p> this post has been upvoted {Articles.upvotes} times</p>
    <button onClick={updateUpvote} >Upvotes</button>  
    {console.log(content)}
    {content.map((para, key)=>(
       <p key={key}>{para}</p>
    ))
    }
    <br/>
    {content && <OtherArticle articles={otherArticle} available={Articles} heading='Other Articles' />}
    </>
    );
}

export default ArticleDetail;