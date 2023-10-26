import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNode,FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "p2",
      level: "Advance",
      percentage: 90,
      image: FaHtml5,
    },
    {
      name: "CSS",
      logo: "logo-css3",
      level: "Expert",
      percentage: 90,
      image: FaCss3,
    },
    {
      name: "java",
      logo: "logo-nodejs",
      level: "Intermediate",
      percentage: 60,
      image: FaJava,
    },
    {
      name: "JavaScript",
      logo: "logo-javascript",
      level: "Intermediate",
      percentage: 70,
      image: FaJs,
    },
    {
      name: "React",
      logo: "logo-react",
      level: "Advanced",
      percentage: 65,
      image: FaReact,
    },
    
  ];

  return (
    <section id="skills" className="py-10 relative:">
      <div className="mt-8 text-gray-100 text-center ">
        <h3 className="text-4xl font-semibold">
          key<span className="text-yellow-400">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          My knowledge and experience
        </p>
        <div className="flex mx-auto items-center justify-center mt-12 gap-10 flex-wrap lg:flex-row lg:flex-wrap md:flex">
          {skills.map((skill, i) => (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div
              key={i}
              className="border-2 group border-yellow-400 relative w-full sm:w-auto bg-gray-900 p-6 rounded-xl flex-shrink-0"
            >
              <div
                className="w-24 h-24 flex mx-auto items-center justify-center 
        rounded-full bg-gradient-to-tr from-blue-200 to-cyan-800 mb-4 text-center"
              >
                <skill.image className="text-4xl text-white" />
              </div>
              <p className="text-lg font-medium mb-2">{skill.name}</p>
              
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                  <div
                    style={{ width: `${skill.percentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-cyan-500 to-cyan-600"
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{skill.percentage}%</span>
                <span>100%</span>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
