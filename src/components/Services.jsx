import React from "react";
import { CiMonitor } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { IoLayers } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Services() {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">What I Do</span>
        <span className="text-green-500">My Services</span>
      </div>

      <div className="flex justify-around items-center mt-16">
        <div className="flex flex-col space-y-2 border border-2 p-8 rounded">
          <span>
            <CiMonitor className="w-16 h-16" />
          </span>
          <span className="text-2xl font-bold">Front-End Development</span>
          <span className="text-sm">I built project using frontend tools</span>
          <div className="flex items-center gap-2 mt-4">
            <span>Say Hello!</span>
            <span>
              <FaArrowAltCircleRight className="text-green-500 font-bold" />
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-2 border border-2 p-8 rounded">
          <span>
            <CiServer className="w-16 h-16" />
          </span>
          <span>Back-End Development</span>
          <span>I built project using frontend tools</span>
          <span>Say Hello!</span>
        </div>
        <div className="flex flex-col space-y-2 border border-2 p-8 rounded">
          <span>
            <IoLayers className="w-16 h-16" />
          </span>
          <span>FullStack Development</span>
          <span>I built project using frontend tools</span>
          <span>Say Hello!</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
