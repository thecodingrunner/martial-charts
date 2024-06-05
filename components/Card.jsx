"use client";

import { useState } from "react";
import boxer from "../public/maleFighter1.jpg";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const Card = ({ card }) => {
  const [display, setDisplay] = useState(false);

  console.log(card.img);
  return (
    <motion.div
      className={`h-[80vh] overflow-hidden relative rounded-3xl hover:scale-[1.02] transition ease-in-out duration-300`}
      animate={{ width: display ? "50vw" : "25vw" }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <motion.img
        animate={{ scale: display ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 30, delay: 0.1 }}
        src={card.img.src}
        className="object-cover h-full w-full"
      />
      {display && (
        <motion.h1
          variants={textVariant(0.6)}
          initial="hidden"
          animate={display ? "show" : "hidden"}
          className="absolute bottom-0 left-0 p-6 text-2xl md:text-5xl mx-auto font-semibold bg-opacity-20 bg-black"
        >
          {card.title}
        </motion.h1>
      )}
      <button
        className="absolute top-2 right-2 flex justify-center items-center"
        onClick={() => setDisplay((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-16"
          animate={{ rotate: display ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 60 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </motion.svg>
      </button>
    </motion.div>
  );
};

export default Card;
