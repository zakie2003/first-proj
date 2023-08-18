import './App.css';
import React, { useEffect, useState } from "react";
import {auth,provider} from "./firebase.js";
import {signInWithPopup} from "firebase/auth";
import Home1 from './Home1';

function Signin(){
    {
        const [value,setValue] = useState('')
        const handleClick =()=>{
            signInWithPopup(auth,provider).then((data)=>{
                setValue(data.user.email)
                localStorage.setItem("email",data.user.email)
            })
            .catch((error)=>{
                window.location.reload();
            })
        }
    
        useEffect(()=>{
            setValue(localStorage.getItem('email'),[])
        })
    
    return (
        <div>
            {value?<Home1/>:
            <button onClick={handleClick}>Signin With Google</button>
            }
        </div>
    );
    }
}
export default Signin;