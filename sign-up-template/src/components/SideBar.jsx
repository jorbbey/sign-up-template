import logo from "../assets/image_1.jpg";
import handShake from "../assets/Light-brown-in-Jacket10.png";
const SideBar = () => {
  return (
    <div className="gradient w-full md:w-2/4 lg:w-1/4 flex flex-col justify-center items-center">
      <img src={logo} alt="logo_image" className="mt-20 md:mt-10 w-1/4 md:w-1/2" />
      <img src={handShake} alt="handshake" className="-mt-32 md:-mt-28" />
      <div className="flex flex-col justify-center items-center text-center -mt-20 mb-20">
        <h1 className="text-2xl md:text-3xl text-gray-200 font-semibold w-3/4">
          Partnership for Business Growth
        </h1>
        <p className="text-gray-400 text-[12px] md:text-xs font-semibold leading-loose my-2 w-3/4 md:w-full ">
          Partnerships are pivotal for business growth, enabling companies to
          leverage mutual strengths, share risks, and capitalize on
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default SideBar;
