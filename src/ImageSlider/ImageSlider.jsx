import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";
const imgdata = [
  {
    id: 1,
    title: "shawarma",
    price: "$850",
    img: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323737/NetflixApp/chiken_shawarma_c0ysna.jpg",
  },
  {
    id: 2,
    title: "fruite juice",
    price: "$900",
    img: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672329939/NetflixApp/fruite_juice_du7uqy.jpg",
  },
  {
    id: 3,
    title: "yogurt parfaite",
    price: "$450",
    img: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672329944/NetflixApp/yogurt_parfait_kt8b5f.jpg",
  },
  {
    id: 4,
    title: "orange juice",
    price: "$420",
    img: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672329938/NetflixApp/orangejuice_s4mdbi.webp",
  },
  {
    id: 5,
    title: "egg & plantain",
    price: "$700",
    img: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672331290/NetflixApp/edd_and_plantain_rey7l4.jpg",
  },
];

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  //   const [errormsg, setErrormsg] = useState(null);
  //   const [loading, setloding] = useState(false);
  //   async function fatchurl(url) {
  //     try {
  //       setloding(true);
  //       const renspnse = await fetch(url);
  //       const data = await renspnse.json();
  //       if (data) {
  //         setimage(data);
  //         setTimeout(() => {
  //           setloding(false);
  //         }, 1);
  //       }
  //     } catch (err) {
  //       setErrormsg(`error msg ${err}`);
  //       setloding(false);
  //     }
  //   }
  //   useEffect(() => {
  //     if (urls !== "") fatchurl(urls);
  //   }, [urls]);

  //   if (loading) {
  //     return <div>loading</div>;
  //   }
  //   if (errormsg !== null) {
  //     return <div>some ouccred here</div>;
  //   }

  function left() {
    setCurrentImage(currentImage <= 0 ? imgdata.length - 1 : currentImage - 1);
  }
  function right() {
    console.log(currentImage);
    setCurrentImage(currentImage >= imgdata.length - 1 ? 0 : currentImage + 1);
    console.log(currentImage);
  }
  return (
    <div className="box relative ">
      <div className="img-box relative w-[500px] flex gap-10  h-[300px] ">
        <div
          onClick={left}
          className="icon absolute rounded-full p-2 top-[150px] bg-slate-500"
        >
          <FaArrowLeft size={30} />
        </div>
        {imgdata.map((item, index) => (
          <img
            key={index}
            src={item.img}
            className={currentImage === index ? "flex w-full" : "hidden"}
          />
        ))}
        <div className="icon absolute rounded-full p-2 top-[150px] right-0 bg-slate-500">
          <FaArrowRight onClick={right} size={30} className="  " />
        </div>
      </div>
      <div className="indicator  flex gap-4 justify-center">
        {imgdata.map((_, index) => (
          <div key={index} className="h-[150px] ">
            <FaCircleDot
              onClick={() => setCurrentImage(index)}
              className={currentImage === index ? "text-white" : "text - brown"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
