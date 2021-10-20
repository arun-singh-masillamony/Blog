import {Link} from 'react-router-dom'
import React,{useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";

const auth = getAuth();
const NavBar= () => {
    const [User, setUser] = useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                console.log('i am at useEffect')
            }
            else{
                console.log('i am at useEffect but inside the else command')
            }
        })
    },[User])
    const  OnsignOut =() =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        setUser(null)
        console.log("after sign out inside the function")
        }).catch((error) => {
        // An error happened.
        });
    }
    return(
    <nav>
        <ul>
            <li>
            {console.log('i am at the start of the code')}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/article">Article</Link>
            {User && <Link to="/" onClick={OnsignOut} >SignOut</Link>}
            {!User && <Link to="/login">Login</Link>}

            {console.log('i am at the end of the code')}
            </li>
        </ul>    
    </nav>
    )
}

export default NavBar