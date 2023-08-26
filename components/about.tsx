"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Electrical Engineering</span>, I decided
        to pursue my passion for programming. I invested in Udemy courses and
        honed my skills in{" "}
        <span className="font-medium">
          full-stack web and Mobile development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          TypeScript, Javascript, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Kotlin and Jetpack compose. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Beyond coding</span>, I find pleasure in
        watching programming tutorials on YouTube, indulging in soccer, and
        immersing myself in music. The joy of learning continues to drive me,{" "}
        with my current endeavors being focused on mastering the{" "}
        <span className="font-medium">German language </span>
        and delving into Android Development with Jetpack Compose.
      </p>
    </motion.section>
  );
};

export default About;
