import { useRef, useState } from "react";
import "./quiz.css";
import { data } from "./quiz-data";
function QuizApp() {
  let [index, setIndex] = useState(0);
  const [qustion, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  const answerarry = [option1, option2, option3, option4];

  const ans = (e, correct) => {
    if (!lock) {
      if (qustion.ans === correct) {
        e.target.classList.add("correct");
        console.log("hellow");
        setLock(true);
        setScore(score + 1);
      } else {
        e.target.classList.add("false");
        setLock(true);
        setScore(score - 1);
        answerarry[qustion.ans - 1].current.classList.add("correct");
      }
    }
  };
  function next() {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      console.log(index);
      setQuestion(data[index]);
      setLock(false);
      answerarry.map((item) => {
        item.current.classList.remove("false");
        item.current.classList.remove("correct");
      });
    }
  }
  function reset() {
    setResult(false);
    setIndex(0);
    setQuestion(data[0]);
    setLock(false);
  }

  return (
    <div className="container w-[550px] bg-white pl-4 p-10  flex flex-col rounded-sm  gap-6">
      <h1 className="p-1"> Quiz App</h1>
      {result ? (
        <>
          <h1>
            Your Score is {score} Out of {data.length}
          </h1>
          <button
            onClick={() => {
              reset();
            }}
            className="bg-[#5b43e4] p-2 text-white "
          >
            Reset
          </button>
        </>
      ) : (
        <>
          <hr className="bg-black h-[2px] " />
          <h2 className="pb-10">
            {index + 1}. {qustion.question}
          </h2>
          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                ans(e, 1);
              }}
            >
              {qustion.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                ans(e, 2);
              }}
            >
              {qustion.option2}{" "}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                ans(e, 3);
              }}
            >
              {qustion.option3}{" "}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                ans(e, 4);
              }}
            >
              {qustion.option4}{" "}
            </li>
          </ul>
          <button
            onClick={() => {
              next();
            }}
            className="bg-[#5b43e4] p-2 text-white "
          >
            Next
          </button>
          <h3 className="text-center">
            {index + 1} of {data.length} Question
          </h3>
        </>
      )}
    </div>
  );
}

export default QuizApp;
