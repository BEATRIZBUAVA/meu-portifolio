"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTag from "../components/ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },

];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen "
    >
      <h2 className="text-center text-4xl text-gray-800 pt-20 mb-8 md:mb-12">
        Meus Projetos
      </h2>

      <div className="text-gray-800 flex flex-row justify-center items-center gap-2 flex-wrap mb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
          className="px-4 py-1 bg-gray-100 border border-gray-400 rounded-sm shadow-[inset_1px_1px_0px_white] hover:bg-gray-200 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
          className="px-4 py-1 bg-gray-100 border border-gray-400 rounded-sm shadow-[inset_1px_1px_0px_white] hover:bg-gray-200 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]"
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
          className="px-4 py-1 bg-gray-100 border border-gray-400 rounded-sm shadow-[inset_1px_1px_0px_white] hover:bg-gray-200 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]"
        />
      </div>

      <ul ref={ref} className="flex flex-col gap-8 p-10">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="bg-gray-100 border-2 border-gray-300 rounded-md shadow-[2px_2px_4px_rgba(0,0,0,0.4)] [border-style:inset]"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>

  );
}
