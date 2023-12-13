import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuBriefcase } from "react-icons/lu";
import stoveOrderingImg from "@/public/stove-ordering.png";
import examGptImg from "@/public/exam-gpt.png";
import nasaProjectImg from "@/public/nasa-project.png";
import nestSassImg from "@/public/nest-sass.png";

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
    title: "Next Sass Template",
    description:
      "Your next startup project based on Nextjs-14, Tailwindcss, NextUI and Supabase. Easy customization Helps you build apps faster and better.",
    tags: ["Nextjs 14", "React", "Tailwindcss", "Zustand", "NextUI"],
    imageUrl: nestSassImg,
    githubUrl: "https://github.com/sproutjeph/next-sass-template",
    liveUrl: "https://next-sass-template.vercel.app/",
  },
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
    githubUrl: "https://github.com/sproutjeph/web-ordering",
    liveUrl: "https://olo.stovepos.com/?venueId=37",
  },
  {
    title: "Exam-GPT",
    description:
      "EXAM-GPT  is a cutting-edge web application designed to assist Nigerian students preparing for O-Level exams.",
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
    githubUrl: "https://github.com/sproutjeph/exam-gpt-client",
    liveUrl: "https://exam-gpt.vercel.app/",
  },
  {
    title: "Nasa Mission API",
    description:
      "Worked extensively with spacex api, useing CSV parsser Nodejs MongoDB and Expressjs ",
    tags: ["React", "Epressjs", "MongoDb", "Tailwindcss", "Nodejs"],
    imageUrl: nasaProjectImg,
    githubUrl: "https://github.com/jephthah/stove-ordering",
    liveUrl: "https://github.com/jephthah/stove-ordering",
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
