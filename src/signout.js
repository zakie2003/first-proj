import React, { useEffect, useState } from "react";
import {auth,provider} from "./firebase.js";
import {signInWithPopup} from "firebase/auth";

function Signout(){
    localStorage.clear();
    window.location.reload();
    
}
export default Signout;