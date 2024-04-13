import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import auth from "../firebase"


function Log() {

    const[email,setEamil]=useState("")
    const[password,setPassword]=useState("")
    const[islogin,setIsLogin]=useState("logOUt")
   
   

    function signup(e){ //a submit button is always recv a parameter like e
     e.preventDefault()  // default setting for from
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       setEamil("")
       setPassword("")
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorCode,errorMessage);
     })

     onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setIsLogin("LOg IN")
          console.log(uid);

          // ...
        } else {
            setIsLogin("LOg out")
        }
      })


    }
    

  return (
    <div>
        <form onSubmit={signup} className=" flex flex-col justify-center items-center gap-4">
           
            <input type="email" value={email} onChange={(e)=>setEamil(e.target.value)} placeholder="type your email here " />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="type your password here " />
           
           <button onClick={signup}>Login Here</button>
           <p>{islogin} </p>
        </form>
    </div>
  )
}

export default Log