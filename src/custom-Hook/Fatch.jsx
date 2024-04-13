import useCusomFatch from "./CusomFatch"


function Fatch() {
    const {data,error}=useCusomFatch('https://dummyjson.com/products',{ })
    console.log(data,error);
  return (
   <div>
    <p>hlw</p>
     { data.map((item)=>
        <div key={Math.random()}> {item.title}</div>

    ) }
   </div>
  )
}

export default Fatch