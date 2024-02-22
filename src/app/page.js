import React from "react";
import HeroBody from "./Components/HeroBody";
import NavBar from "./Components/NavBar";
import AboutSection from "./Components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroBody />
        <AboutSection />
      </div>
    </main>
  );
}
