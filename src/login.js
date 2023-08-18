

import './App.css';
const signinwithgoogle=()=>{
    signInWithPopup(auth,provider)
    .then((result)=>{
      console.log(result);
  
    })
    .catch((error)=>{
      console.log(error);
    })
  };
function login(){
  
    return(
        <div className="App" onClick={signinwithgoogle()}><button>Sign In With Google</button></div>
    );
 };

export default login;
