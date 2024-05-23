import { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";

const PasswordInput = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative flex items-center">
      <IoLockClosedOutline className="absolute text-gray-500 m-5 text-lg" />
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="********"
        className="pr-10 py-2 pl-12 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-light-blue focus:border-transparent w-full h-14 "
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute ml-60 md:ml-52 lg:ml-80"
      >
        {isPasswordVisible ? (
          <p className="text-gray-400 uppercase text-xs">hide</p>
        ) : (
          <p className="text-gray-400 uppercase text-xs">show</p>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
