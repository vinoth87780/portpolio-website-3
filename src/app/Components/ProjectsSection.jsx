"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Next js Portfolio Website",
    description: "Project 1 description",
    image: "/Images/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "potography Portfolio Website",
    description: "Project 2 description",
    image: "/Images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Portfolio Website",
    description: "Project 3 description",
    image: "/Images/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Next Portfolio Website",
    description: "Project 4 description",
    image: "/Images/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Next Portfolio Website",
    description: "Project 5 description",
    image: "/Images/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTab] = useState("All");

  const handleTabChange = (newTag) => {
    setTab(newTag);
  };
  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2
        id="project"
        className="text-center text-4xl font-bold text-white mt-4 mb-6 "
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTabChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTabChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
