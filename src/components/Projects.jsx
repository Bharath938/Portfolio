import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import project_img from "../assets/image_project.webp"

function Projects() {
  const projects = [
    {
      image: "",
      title: "",
      description: "Project description will be coming here...",
    },
    {
      image: "",
      title: "",
      description: "Project description will be coming here...",
    },
    {
      image: "",
      title: "",
      description: "Project description will be coming here...",
    },
  ];
  return (
    <div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl">Projects</span>
          <span className="text-green-500">My Work</span>
        </div>

        <div className="flex flex-col justify-center gap-4 items-center md:flex-row mt-8">
          {projects?.map((project) => (
            <div className="flex flex-col space-y-2 p-8 rounded-2xl bg-[#1a1a2e]">
              <img src={project_img} alt="project_img" className="h-32 w-32 object-contain" />
              <span className="text-2xl font-bold">{project.title}</span>
              <span className="text-sm">{project.description}</span>
              <div className="flex gap-2 items-center mt-4 cursor-pointer">
                <span>See Project</span>
                <span>
                  <FaArrowAltCircleRight className="text-green-500 " />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
