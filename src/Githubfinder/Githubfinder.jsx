import { useEffect, useState } from "react";
import User from "./User";

function Githubfinder() {
  const [usename, setUsername] = useState("sangammukherjee");
  const[data,setData]=useState(null)
  
  async function handleCLick() {
    try {
        const response=await fetch(`https://api.github.com/users/${usename}`)
        const data =await response.json()
        setData(data)

    } catch (error) {
        console.log(error);
    }
  }
  useEffect(()=>{
    handleCLick() 
  },[])
  return (
    <div className="conatiner flex flex-col items-center justify-center h-screen gap-5">
      <div className="input-box">
        <input
          type="text"
          placeholder="Serach Github profile"
          value={usename}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <button onClick={handleCLick}>Search</button>
      </div>
     {data ?<User user={data}/>: null}
    </div>  
  );
}

export default Githubfinder;
