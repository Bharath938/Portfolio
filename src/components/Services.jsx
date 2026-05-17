import React from "react";
import { CiMonitor } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { IoLayers } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <CiMonitor />,
      title: "Front-End Development",
      description: "I built project using frontend tools",
    },
    {
      icon: <CiServer />,
      title: "Back-End Development",
      description: "I built project using frontend tools",
    },
    {
      icon: <IoLayers />,
      title: "Full-Stack Development",
      description: "I built project using frontend tools",
    },
  ];

  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">What I Do</span>
        <span className="text-green-500">My Services</span>
      </div>

      <div className="flex flex-col justify-center gap-4 items-center md:flex-row mt-32">
        {services?.map((service) => (
          <div className="flex flex-col space-y-2 p-8 rounded-2xl bg-[#1a1a2e]">
            <span className="text-6xl">{service.icon}</span>
            <span className="text-2xl font-bold">{service.title}</span>
            <span className="text-sm">{service.description}</span>
            <div className="flex gap-2 items-center mt-4 cursor-pointer">
              <span>Say Hello!</span>
              <span>
                <FaArrowAltCircleRight className="text-green-500 " />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
