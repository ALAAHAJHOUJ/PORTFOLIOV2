import Image from "next/image";
import Intro from "./components/Intro";
import Sectiondivider from "./components/Sectiondivider";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Eduction from "./components/education";
import Contact from "./components/contact";
import DarkMode from "./components/DarkMode";
import Version2 from "./components/version2";


export default function Home() {
  return (
    <main className="mt-[100px] w-full flex flex-col gap-[10px] items-center">
        <Intro></Intro>
        <Sectiondivider></Sectiondivider>
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Eduction></Eduction>
        <Contact></Contact>
        <DarkMode></DarkMode>
        <Version2></Version2>
    </main>
  );
}
