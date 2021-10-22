import React,{useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import 'firebase/compat/auth';
import app from '../Firebase';
import Font from 'react-font'

const auth = getAuth(app);


const HomePage = () => {
    const [User, setUser] = useState("");

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{

            }
        })
    },[User])

    return(
    <>
        <h1>Welcome to my blog </h1>
        <Font family='Press Start 2P'>
        <p>
          This website has various blog, please refer the Article tab at the top to access the blog.
          Please try to login using the <b>Log In </b> tab at the navigation bar.
          <br/>
          <br/>
          You can also add the new blog after login.
          
        </p>
        </Font>
    </>
    )
    };

export default HomePage;