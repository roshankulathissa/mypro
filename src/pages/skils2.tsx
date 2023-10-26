import React from "react";
import { FaSass,FaNode} from "react-icons/fa";
import { motion } from "framer-motion";
import nsx from "../pages/icons/next-js (1).svg";
import {SiNextdotjs,SiMysql,SiTypescript,SiTailwindcss,SiFramer,SiAdobexd,SiFigma} from "react-icons/si"
const Skills2 = () => {
  const skills = [
    {
      name: "Next.Js",
      image: SiNextdotjs,
    },
    {
        name: "NodeJs",
        image: FaNode,
      },
    
    {
      name: "MySql",
      image: SiMysql,
    },
    {
      name: "TypeScript",
      image: SiTypescript,
    },
    {
      name: "Tailwindcss",
      image: SiTailwindcss,
    },
    {
      name: "Sass",
      image: FaSass,
    },
    {
      name: "FramerMotion",
      image: SiFramer,
    },
    {
      name: "Xd",
      image: SiAdobexd,
    },
    {
      name: "Figma",
      image: SiFigma,
    },
    
  ];

  return (
    <section id="skills" className="py-10 relative:">
      <div className="mt-8 text-gray-100 text-center ">
        <h3 className="text-4xl font-semibold">
          other<span className="text-yellow-400">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
         i have hands-on experience on
        </p>
        <div className="flex mx-auto items-center justify-center mt-12 gap-10 flex-wrap lg:flex-row lg:flex-wrap md:flex">
          {skills.map((skill, i) => (
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div>
                <div
                  className="w-24 h-24 flex mx-auto items-center justify-center 
        rounded-full bg-gradient-to-tr from-blue-200 to-cyan-800 mb-4 text-center"
                >
                  <skill.image className="text-4xl text-yellow-400" />
                </div>
                <p className="text-lg font-medium mb-2">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills2;
