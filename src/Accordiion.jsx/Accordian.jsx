import { useState } from "react";
import Accor from "./Accordian_data";

function Accordian() {
  const [single, setSingle] = useState(" ");
  const [multiselect, setMultiselect] = useState(false);
  const [mulilist, setMultiList] = useState([]);
  function multiSel(id) {
    let list = [...mulilist];
    const check = list.indexOf(id);
    if (check === -1) {
      console.log("not found");
      list.push(id);
    } else list.splice(check, 1);
    setMultiList(list);
    setSingle(" ");
  }
  function singlefun(id) {
    if (single === id) {
      setSingle(" ");
    } else setSingle(id);
  }

  return (
    <div className="conatiner flex flex-col gap-4 h-[550px] w-[550px] bg-gray-100 py-8">
      <h1 className="text-center">Accordian Or FQA Questin </h1>
      <button
        onClick={() => {
          setMultiselect(!multiselect);
        }}
        className="border-2"
      >
        Multi Select
      </button>
      <div className="accordian-list bg-slate-600">
        {Accor.map((item) => (
          <div key={Math.random()} className="accorbox ">
            <div
              onClick={() => {
                multiselect ? multiSel(item.id) : singlefun(item.id);
              }}
              className="question bg-zinc-400 p-4 text-xl flex justify-between"
            >
              <h1>{item.Question} </h1>
              {single === item.id || mulilist.indexOf(item.id) === item.id ? (
                <span>-</span>
              ) : (
                <span>+</span>
              )}
            </div>
            {multiselect ? (
              mulilist.indexOf(item.id) !== -1 && (
                <div className="answer">{item.answer}</div>
              )
            ) : single === item.id ? (
              <div className="answer">{item.answer}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordian;
