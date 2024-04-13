import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [login, setlogin] = useState(true);
  return (
    <div className="container bg-[white] flex justify-center items-center flex-col w-[550px] ">
      <div className="header w-full flex flex-col gap-2 items-center justify-center">
        <h1 className="mt-4 text-2xl text-[blue] ">Sing Up</h1>
        <div className="underline rounded-lg bg-[blue] w-[40px]  h-[4px] "></div>
      </div>
      <div className="input-box flex flex-col gap-4 mt-6">
        <div
          className={
            login
              ? "hidden"
              : " input-item flex h-[40px]  items-center bg-[#44292930] w-[250px]"
          }
        >
          <FaUser className="font-2xl ml-2 text-gray" />
          <input
            className="bg-transparent outline-none border-none ml-6"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="input-item flex h-[40px]  items-center bg-[#44292930] w-[250px] ">
          <MdEmail className="font-2xl ml-2 text-gray" />
          <input
            className="bg-transparent outline-none border-none ml-6"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="input-item flex h-[40px]  items-center bg-[#44292930] w-[250px] ">
          <FaLock className="font-2xl ml-2 text-gray" />
          <input
            className="bg-transparent outline-none border-none ml-6"
            type="Password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="btn-container m-4 flex gap-4">
        <button
          onClick={() => {
            setlogin(false);
          }}
          className="text-l px-6 py-1 rounded-2xl text-white bg-blue-600"
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            setlogin(true);
          }}
          className="text-l px-6 py-1 rounded-2xl text-white bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}
