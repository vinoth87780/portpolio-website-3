import React from "react";
import HeroBody from "./Components/HeroBody";
import NavBar from "./Components/NavBar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import EmailSecton from "./Components/EmailSecton";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <NavBar />
      <div className="container mt-24 mx-auto px-6 py-10">
        <HeroBody />
        <AboutSection />

        <ProjectsSection />
        <EmailSecton />
      </div>
      <Footer />
    </main>
  );
}
