import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import auth from "../firebase"


function Login() {
    const[username,setUserName]=useState("")
    const[email,setEamil]=useState("")
    const[password,setPassword]=useState("")
    const[conpassword,setConPassword]=useState("")
   

    function signup(e){ //a submit button is always recv a parameter like e
     e.preventDefault()  // default setting for from
     createUserWithEmailAndPassword(auth, email, password) //copy from doc
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       console.log(user);
       // ...
       setUserName("")
       setEamil("")
       setPassword("")
       setConPassword("")


     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      console.log(errorCode,errorMessage);
     });




    }
    

  return (
    <div>
        <form onSubmit={signup} className=" flex flex-col justify-center items-center gap-4">
            <input type="text " value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="your name here " />
            <input type="email" value={email} onChange={(e)=>setEamil(e.target.value)} placeholder="type your email here " />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="type your password here " />
            <input type="password" value={conpassword} onChange={(e)=>setConPassword(e.target.value)} placeholder="confirm your password here " />
           <button onClick={signup}>SignUP here</button>
        </form>
    </div>
  )
}

export default Login