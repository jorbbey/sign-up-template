import { HiOutlineArrowSmRight } from "react-icons/hi";
const Button = () => {
  return (
    <div className="bg-dark-blue h-14 pr-5 py-2 pl-5 text-gray-200 font-medium flex justify-between items-center cursor-pointer bg-">
      <p className="text-sm">Become a Member</p>
      <HiOutlineArrowSmRight className="text:lg md:text-xl" />
    </div>
  );
};

export default Button;
