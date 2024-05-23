import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
const InputBox = ({ name, placeholder, type }) => {

  return (
    <div>
      {name === "username" ? (
        <FiUser className="absolute text-gray-500 m-5 text-lg" />
      ) : name === "email" ? (
        <MdOutlineMailOutline className="absolute text-gray-500 m-5 text-lg" />
      ) : null}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="pr-10 py-2 pl-12 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-light-blue focus:border-transparent w-full h-14 text-sm"
      />
    </div>
  );
};

export default InputBox;
