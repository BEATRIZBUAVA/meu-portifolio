"use client";
import React, { useTransition, useState } from "react";
import NavBar from "../components/NavBar";
import TabButton from "../components/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
   
    <section className="text-black bg-[#86AC6F] w-full min-h-screen flex flex-col" id="about"
    >
       <NavBar/>
       <div className=" flex-1 flex items-center justify-center p-30 xl:px-16 ">
      <div className="grid grid-cols-1  gap-8  items-center relative w-[1200px] h-[600px] bg-white bg-lined rounded-[10px]  shadow-lines hover:shadow-lines-hover">
        
      <div className="mt-4 md:mt-0 p-6 pt-[1.2rem] text-justify flex flex-col h-full bg-lined">
  <h2 className="text-4xl font-medium text-black mb-4 px-15">Sobre mim</h2>
  <p className="text-base lg:text-lg text-black leading-[1.6rem] px-15 ">
    I am a full stack web developer with a passion for creating interactive and responsive web applications.
     I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
      HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
  </p>
          </div>
          <div className="flex flex-col h-full px-17 text-base">
          <div className="flex flex-row justify-start mt-2 gap-2 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
          </div>
        </div>
        </div>
      
    </section>
  );
}
