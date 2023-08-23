import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuBriefcase } from "react-icons/lu";
import stoveOrderingImg from "@/public/stove-ordering.png";
import examGptImg from "@/public/exam-gpt.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "Stove, California, USA",
    description:
      "Collaborated with other developers and contributing to building responsive web applications.",
    icon: React.createElement(LuBriefcase),
    date: "Aug 2022 - Present · 1 yr 1 mo",
  },
  {
    title: "MERN STACK Developer",
    location: "Enugu, Nigeria",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2020 - Aug 2022 · 2 yrs 8 mos",
  },
] as const;

export const projectsData = [
  {
    title: "Stove-ordering",
    description:
      "I worked as a full-stack developer on this startup project for 1 year. Users can order and pay for food items.",
    tags: [
      "React",
      "Next.js",
      "React-Query",
      "TailwindCss",
      "Redux",
      "Typescript",
    ],
    imageUrl: stoveOrderingImg,
  },
  {
    title: "Exam-GPT",
    description:
      "EXAM-GPT  is a cutting-edge mobile application designed to assist Nigerian students preparing for the Joint Admissions and Matriculation Board (JAMB) exam, WAEC and NECO. Utilizing the power of artificial intelligence, the app provides accurate and reliable answers to JAMB, NECO and WAEC past questions and predicts future questions based on past exam patterns",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwindcss",
      "Redux",
      "MongoDB",
      "Express",
      "Nodejs",
      "React-Query",
    ],
    imageUrl: examGptImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Kotlin",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "TailwindCSS",
  "React-Query",
  "Prisma",
  "MongoDB",
  "Redux",
  "Framer Motion",
  "Jetpack Compose",
] as const;
