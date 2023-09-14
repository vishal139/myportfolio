import AboutPage from "../components/AboutPage";
import Contact from "../components/Contact";
import Experience from "../components/experience/Experience";
import MainPage from "../components/MainPage";
import Projects from "../components/myProjects/Projects";
import Navbar from "../components/Navbar";
import SkillPage from "../components/SkillPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>vishal kachhap</title>
        <Navbar />
        <MainPage />
        <AboutPage />
        <SkillPage />
        <Experience />
        <Projects />
      </Head>
    </>
  );
}
