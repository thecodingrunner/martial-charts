"use client";

import { textContainer, textVariant2 } from "@/utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`${textStyles} text-[14px]`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>{letter === ' ' ? '\u00A0' : letter}</motion.span>
      ))}
    </motion.p>
  );
};

export const TitleText = ({ title, textStyles }) => {
  return <div>CustomTexts</div>;
};
