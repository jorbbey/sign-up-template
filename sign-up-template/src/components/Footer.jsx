import { BsInfoLg } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center md:mt-32 lg:mt-44">
      <p className="text-gray-400 text-[10px] lg:text-xs m-3">
        Copyright 2021-2022 55tarcompany. All Rights Reserved
      </p>
      <div className="flex justify-between items-center text-light-blue m-10 w-20">
        <BsInfoLg className="text-xs lg:text-lg" />
        <p className="text-[10px] md:text-xs">Need help?</p>
      </div>
    </footer>
  );
};

export default Footer;
