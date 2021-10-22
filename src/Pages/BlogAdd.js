import React, { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import app from '../Firebase';
import '../style/BlogAdd.css';

const BlogAdd = () => {
    const [title,setTitle]=useState();
    const [subTitle,setsubTitle]=useState();
    const [content,setContent]=useState([]);

    const handleSubmit=()=>{
        alert("hello");
        const db = getDatabase(app);
        set(ref(db, 'articles/' + title), {
        name: title,
        title: subTitle,
        content : [content],
        upvotes:0
        })
        .then(() => {
        // Data saved successfully!
        console.log("saved successfully")
        })
        .catch((error) => {
        // The write failed...
        console.log("problem")
        });
        
    }
    return(
    <>
        <h2>Please add a new blog</h2>    
        <div className="Blogg_container">
            <div className="Blogg">
                <label>Title
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br/>
                <label>Sub title
                <input type="text"  onChange={(e) => setsubTitle(e.target.value)} />
                </label>
                <br/>
                <label>Content
                <textarea type="text" onChange={(e) => setContent(e.target.value)} />
                </label>
                <br/>
                <input type="submit" onClick={handleSubmit}/>
                <br/>
        <br/>
        <br/>
            </div>
            
        </div>
        
    </>)
};

export default BlogAdd;