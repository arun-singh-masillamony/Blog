import React from 'react'
import { getAuth, signOut } from "firebase/auth";


function SignOut(user) {
    const  OnsignOut =() =>{
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        user();
        alert("sign Out Successfully")
        console.log("before the call back function")
        
        console.log("after the call back function")
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div onClick={OnsignOut}>
            Sign Out
        </div>
    )
}

export default SignOut
