import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


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
    title: "Baccaleureat Sc. Maths A",
    location: "Amro bno l3as",
    description:
      "I Get my bac in 2020 in mathematics",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "bachlor's degree",
    location: "faculty Ain chock",
    description:
      "I worked as a front-end developer (freelance) for 5 months after obtaining my bachelor's degree in 2024.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  },
  {
    title: "master degree",
    location: "faculty Ain chock",
    description:"Currently, I am preparing my master's degree and I am looking for an internship in a company.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express js",
  "MongoDB",
  "Redux",
  "PostgreSQL",
  "Framer Motion",
  "MySql",
  "Docker",
  "Figma",
  "Postman"
] as const;




export const projectsData = [
  {
    title: "WeatherApp",
    description:
      "A weather application to retrieve weather information for any location with an automatic suggestion system.",
    tags: ["React", "TailwindCss", "framer-motion"],
    imageUrl:"/weatherapp.png",
  },
  {
    title: "User Management",
    description:
      "User management application (modification, addition, deletion) developed with React JS and Express JS.",
    tags: ["React", "TailwindCss","express js","Mysql"],
    imageUrl:"/UsersApp.png",
  },
  {
    title: "School Management",
    description:
      "a simple school landing page (just front end)",
    tags: ["React", "TailwindCss", "Framer-motion"],
    imageUrl:"/School.png",
  },
] as const;