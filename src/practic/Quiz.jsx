import { useRef, useState } from "react";
import { data2 } from "./dat";
import "./style.css";

export default function Quiz() {
  let [index, setIndex] = useState(0);
  const [question, setQustion] = useState(data2[index]);
  const [lock, setLock] = useState(false);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const option4 = useRef();
  const answerlist = [option1, option2, option3, option4];

  function ans(e, ans) {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
      }
    }
  }
  function next() {
    if (lock) {
      setIndex(++index);
      setQustion(data2[index]);
      setLock(false);
      answerlist.map((item) => {
        item.current.classList.remove("correct");
        item.current.classList.remove("wrong");
      });
    }
  }

  return (
    <div className="container">
      <h1>Quiz Appliction</h1>
      <hr />
      <div className="question-part">
        <h1>
          {index + 1}.{question.question}{" "}
        </h1>
        <div className="ul bg-white flex flex-col p-1">
          <li ref={option1} onClick={(e) => ans(e, 1)}>
            {question.option1}{" "}
          </li>
          <li ref={option2} onClick={(e) => ans(e, 3)}>
            {question.option3}{" "}
          </li>
          <li ref={option3} onClick={(e) => ans(e, 4)}>
            {question.option4}{" "}
          </li>
          <li ref={option4} onClick={(e) => ans(e, 2)}>
            {question.option2}{" "}
          </li>
        </div>
        <button onClick={next} className="btn">
          Next
        </button>
        <div className="status">1 Of 5 Question</div>
      </div>
    </div>
  );
}
