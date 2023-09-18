"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { useRef } from "react";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-md dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          height={700}
          width={500}
          className="absolute hidden sm:block top-0 -right-40 group-even:right-[initial] group-even:-left-40 object-contain max-w-full max-h-full"
        />

        <div className="absolute flex gap-4 transform right-1/2 top-2 translate-x-[50%]">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={liveUrl}
            target="_blank"
          >
            <FaLink />
          </a>
          <a
            className="bg-white p-4  hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack  text-black"
            href={githubUrl}
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
