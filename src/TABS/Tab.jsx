import { useState } from "react";


function RandomComponent() {
    return <div> This is a random component</div>;
     
   }
   
   const tapdata=[
     {
       label: "Tab 1",
       content: <div>This is content for Tab 1</div>,
     },
     {
       label: "Tab 2",
       content: <div>This is content for Tab 2</div>,
     },
     {
       label: "Tab 3",
       content: <RandomComponent />,
     },
   ]

export default function Tab() {
    const[selectedIndex, setSelectedIndex] = useState(1)

    function handleclick(gatindex) {

      setSelectedIndex(gatindex)  
    }
  return (
    <div className="wraper flex-col flex justify-center  items-center mt-7   ">
        <div className="flex gap-4 p-0">
            {tapdata.map((item,index)=><div onClick={()=> handleclick(index)} key={index} className={selectedIndex===index?"bg-orange-400 p-4":"bg-green-700 p-4"}> {item.label} </div>)}
        </div>
    <div className="bg-orange-400 p-10"> {tapdata[selectedIndex].content} </div>
    </div>
  )
}
