import { useState } from "react";

function Modal() {
    const[modal, setModal] = useState(true)
    function handleclick(){
        setModal(!modal)
        console.log(modal);
    }
    console.log(modal);
  return (
    <div className="w-full  bg-red-800 flex items-center flex-col justify-center">
     
      {!modal ? <button onClick={handleclick} className="bg-green-800">Open Modal</button> : null}

      {modal ? (<div className="bg-white w-[300px] ">
        <div onClick={handleclick} className="closebtn flex justify-end  text-3xl">&times;</div>
        <h1>Hlwwww</h1>
        <p>Hlw</p>
        <h1>Hlwwww</h1>
        <p>Hlw</p>
        <h1>Hlwwww</h1>
        <p>Hlw</p>
      </div>
    ) : null}
    </div>
  );
}

export default Modal;
