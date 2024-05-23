import React from "react";
import { motion } from "framer-motion";
import SideBar from "./components/SideBar";
import PasswordInput from "./components/PasswordInput";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { SlArrowLeft } from "react-icons/sl";

const SignUp = () => {
  // Variants for sliding in
  const slideVariants = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.5 },
    },
  };

  // Variants for fading in
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <motion.div
      className="w-full h-auto bg-transparent border-2 flex flex-col md:flex-row justify-start items-start m-auto"
      style={{ fontFamily: "Zen Kaku Gothic Antique, sans-serif" }}
      initial="hidden"
      animate="visible"
      variants={slideVariants}
    >
      <SideBar />
      <div className="bg-gray-100 w-full md:w-3/4 flex flex-col justify-between items-center">
        <header className="w-full flex justify-between items-center my-5">
          <motion.div
            className=" text-light-blue flex justify-around items-center  p-5 cursor-pointer"
            variants={fadeVariants}
          >
            <SlArrowLeft className="" />
            <p className="mx-2 capitalize text-[10px] md:text-xs">
              return home
            </p>
          </motion.div>

          <motion.div
            className="text-[10px] md:text-xs mx-10 cursor-pointer"
            variants={fadeVariants}
          >
            <p className="text-light-blue">
              Already a Member?
              <span className="text-dark-blue uppercase font-semibold mx-1">
                <a href="#!">log in now</a>
              </span>
            </p>
          </motion.div>
        </header>

        <main className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-around items-center">
          <motion.h1
            className="uppercase text-lg md:text-xl text-dark-blue font-semibold leading-normal mt-5"
            variants={slideVariants}
          >
            Become an exclusive member
          </motion.h1>
          <motion.h3
            className="uppercase text-light-blue text-xs md:text-sm leading-normal mt-2"
            variants={fadeVariants}
          >
            sign up and join the partnership
          </motion.h3>

          <motion.form
            action="#!"
            className="my-10 flex flex-col justify-around w-3/4 h-72"
            variants={fadeVariants}
          >
            <motion.section variants={fadeVariants}>
              <InputBox name="username" type="text" placeholder="Johnson Doe" />
            </motion.section>

            <motion.section variants={slideVariants}>
              <InputBox
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </motion.section>

            <motion.section variants={fadeVariants}>
              <PasswordInput />
            </motion.section>
            <motion.div variants={slideVariants}>
              <Button />
            </motion.div>
          </motion.form>
        </main>

        <Footer />
      </div>
    </motion.div>
  );
};

export default SignUp;
