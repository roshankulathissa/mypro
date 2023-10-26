import { motion } from "framer-motion";

function Resume2() {
    return (
        <div className=" flex justify-center">
        <motion.div
            whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}
>
    <a
        href="https://drive.google.com/file/d/1Uoi364PdsMUj1AyPaZjHdnb4SlFQc7X4/view?usp=share_link"
    download={"resume"}
    target="blank"
    className=" flex bg-yellow-400 text-blue-700 text-2xl font-semibold w-40 py-5
    border-none rounded-md justify-center"
    >
    hire me
    </a>
    </motion.div>
    </div>
);
}

export default Resume2;
