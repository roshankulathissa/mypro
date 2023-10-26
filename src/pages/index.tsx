import { Inter } from "next/font/google";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Skills from "./skills";
import Skills2 from "./skils2";
import Resume from "./comp/resume";
import Resume2 from "@/pages/comp/resume2";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [darkmode, setdarkmode] = useState(false);
  const [textColor, setTextColor] = useState("yellow");

  const handleDarkMode = () => {
    setdarkmode(!darkmode);
  };

  return (
    <div className={darkmode ? "dark" : ""}>
      <main
        className="font-poppins text-black
     bg-slate-600 min-h-screen px-10
      md:px-20 lg:px-40 dark:bg-slate-800"
      >
        {/* nav and hero */}
        <section>
          <a
            href="whatsapp://send?phone=+94779733633"
            className="text-2xl text-white w-10 h-10 flex mx-auto items-center justify-center
        rounded-full bg-green-600 mb-4 mr-10 text-center fixed bottom-4 right-4"
          >
            <AiOutlineWhatsApp />
          </a>
          {/* hero */}
          <section className=" mx-auto flex py-10 md:flex-row flex-col items-center justify-center">
            <div className=" w-[150px] h-[150px] lg:w-[342px] lg:h-[342px] md:w-[259px] md:h-[259px] left-1/4 top-1/4 bottom-1/4">
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="images/me.png"
                  alt="profile Image"
                  className="md:w-11/12 h-full object-cover"
                />
              </motion.div>
            </div>
            <div className=" flex">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="md:text-left text-center">
                  <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                    <span className="text-blue-500 md:text-6xl text-5xl">
                      I'm
                      <br />
                    </span>
                    <span className=" text-yellow-400">Roshan Madumadawa</span>
                  </h1>
                  <div
                    style={{
                      fontSize: "35px",
                      color: textColor,
                    }}
                  >
                    <TypeAnimation
                      sequence={[
                        "developer",
                        800,
                        () => setTextColor("yellow"),
                        "graphic designer",
                        800,
                        () => setTextColor("yellow"),
                        "Ui/Ux Designer",
                        1000,
                        () => setTextColor("yellow"),
                        "",
                      ]}
                      repeat={Infinity}
                    />
                  </div>
                  <div className=" flex justify-center md:justify-start pt-5">
                    <Resume />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <div className=" flex justify-center text-center">
              <p className=" text-sm text-gray-400 leading-6 md:text-md max-w-xl mx-auto md:justify-center ">
                I have completed a Diploma in Software Engineering (equivalent
                to a BSc degree) at Java Institute Colombo 04. I have been
                developing web, mobile, and desktop applications since my
                academic years, and I possess a strong knowledge base and skill
                set to handle any situation in the IT field. Therefore, I am
                seeking an opportunity to enhance my professional skills and
                advance further in my career.
              </p>
            </div>
          </motion.div>
          {/* social links */}
          {/* profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        </section>
        {/* services */}
        <section>
          <div className="flex justify-center">
            <h2 className="text-5xl text-white py-10 font-bold items-center text-center md:text-left">
              services <span className=" text-yellow-400"> I offer</span>
            </h2>
          </div>
          {/* servce cards */}
          <div className=" md:flex lg:flex gap-10 justify-center">
            {/* cards */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p5 rounded-xl my-10 md:">
                <img
                  src="images/design.png"
                  alt="design image"
                  width={100}
                  height={100}
                  className=" inline pt-5"
                />
                <h2 className=" text-2xl font-bold pl-5 pr-5 pb-5">
                  Web developing
                </h2>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p5 rounded-xl my-10">
                <img
                  src="images/code.png"
                  alt="design image"
                  width={100}
                  height={100}
                  className=" inline pt-5"
                />
                <h2 className=" text-2xl font-bold pl-5 pr-5 pb-5 ">
                  Graphic designing
                </h2>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p5 rounded-xl my-10">
                <img
                  src="images/design.png"
                  alt="design image"
                  width={100}
                  height={100}
                  className=" inline pt-5"
                />
                <h2 className=" text-2xl font-bold pl-5 pr-5 pb-5 ">
                  Ui/Ux designing
                </h2>
              </div>
            </motion.div>
          </div>
        </section>
        <div>
          <Skills />
        </div>
        <Skills2 />
        {/* mywork */}
        <section className=" items-center">
          <div className=" text-center"></div>
          {/* images */}
          <div
            className=" flex flex-col gap-10 p-10
                        lg:flex-row lg:flex-wrap"
          >
            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <img
                  src="images/myweb.jpg"
                  alt="imge1"
                  className=" rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -3 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <img
                  src="images/myweb3.jpg"
                  alt="imge1"
                  className=" rounded-lg object-cover"
                />
              </motion.div>
            </div>
            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, borderRadius: "100%" }}
              >
                <img
                  src="images/myweb2.jpg"
                  alt="imge1"
                  className=" rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
        {/* footer */}
        <footer
          className=" border-t-2 border-black text-sm
       flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center"
        >
          <div className="">
            <Resume2 />
            <div className=" text-5xl flex justify-center gap-16 text-gray-600 pt-5"></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
