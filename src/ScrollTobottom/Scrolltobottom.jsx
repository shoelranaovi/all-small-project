import { useRef } from "react";
import useCusomFatch from "../custom-Hook/CusomFatch";

function Scrolltobottom() {
  // eslint-disable-next-line no-unused-vars
  const { data, error } = useCusomFatch(
    "https://dummyjson.com/products?item=200"
  );
  const bottomref = useRef(null);
  function scrolltotop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function scrolltobottom() {
    bottomref.current.scrollIntoView({ behavior: "smooth" });
 
  }
  console.log(data);
  return (
    <div>
      <button onClick={scrolltobottom}>Scroll to bottom</button>
      {data ? data.map((item) => (
        <div key={item}> {item.title} </div>
      )):null}
      <button ref={bottomref} onClick={scrolltotop}>
        Scroll to top
      </button>
    </div>
  );
}

export default Scrolltobottom;
