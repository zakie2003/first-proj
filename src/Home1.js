import React from "react";
import Signout from "./signout";
function Home1(){
    return(
        <div>
            <h1>Welcome to home page</h1>
            <button onClick={Signout}>Log out</button>
        </div>
    )
}
export default Home1;