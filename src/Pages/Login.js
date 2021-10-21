import React, { useState  } from 'react'
import { useHistory } from "react-router-dom";
import "../style/Login.css";
//import app from '../Firebase';

import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
function Login() {
    const history = useHistory();
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    
    const onLogin =()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
        const user = userCredential.user;
        console.log(user);
        history.push("/");
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    const onCreate =()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        history.push('/');
        })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        //alert(errorMessage);
    // ..
  });
    }
    return (
        <div className="Login">
            <div className="Login_container">
                <div className="form">
                    <div className="Login_UserName">
                        <p>Email</p>
                        <input type="text" onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="Login_UserName">
                        <p>Password</p>
                        <input type="password" onChange={(e)=>setpassword(e.target.value)} />
                    </div>
                        
                    <input className="Submit_btn" onClick={onLogin} type="submit" value="Login"/>
                    <input className="Submit_btn1" onClick={onCreate} type="submit" value="Create New Account"/>
                    </div>
            </div>
        </div>
    )
}

export default Login
