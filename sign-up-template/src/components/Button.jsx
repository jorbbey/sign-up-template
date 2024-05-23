import { HiOutlineArrowSmRight } from "react-icons/hi";
const Button = () => {
  return (
    <div className="bg-dark-blue h-14 pr-10 py-2 pl-12 text-white flex justify-between items-center cursor-pointer">
      <p className="text-sm lg:text-lg">Become a Member</p>
      <HiOutlineArrowSmRight className="text:lg md:text-xl" />
    </div>
  );
};

export default Button;
