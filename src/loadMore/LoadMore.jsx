import { useState, useEffect } from "react";

function LoadMore() {
  const [datas, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  console.log(count);
  async function loadmore() {
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      let data = await response.json();
      setData((prev) => [...prev, ...data.products]);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  useEffect(() => {
    loadmore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);
  function update() {
    setCount(count + 1);
    setLoading(true);
  }
  return (
    <div>
      <div className="data-list flex flex-wrap gap-3 ">
        {datas.map((item) => (
          <div
            key={Math.random()}
            className="item w-[200px] h-[250px] bg-white   m-3 grow border-black border "
          >
            <img src={item.thumbnail} className="h-[70%] " alt="" />
            <h1>{item.title} </h1>
          </div>
        ))}
      </div>
      <div className="btn flex justify-center bg-orange-300 items-center p-10">
        <button
          onClick={update}
          className={count >= 3 ? "bg-gray-50" : "bg-white "}
        >
          Load More
          {loading ? <h1 className="text-black text-2xl">loading</h1> : null}
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
