import React from "react";
import profile from "../assets/profile.png";

function About() {
  return (
    <div className="flex justify-around items-center mt-16">
      <div className="flex flex-col gap-4">
        <span>Hello I am</span>
        <span>Bharath Kumar</span>
        <span className="text-green-500">I am a web developer</span>
        <p>I can create responsive web applications</p>
        <button className="bg-green-500 rounded-2xl p-2 w-32 cursor-pointer">
          Contact Me
        </button>
      </div>

      <div>
        <div className="relative">
          <div className="bg-green-500 w-72 h-72 rounded-full"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-2">
            <img
              src={profile}
              alt="profile"
              className="w-52 h-52 object-contain"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex flex-col text-center w-32 border border-green-500 border-2 rounded-full p-4">
            <span>4+</span>
            <span className="text-green-500">Years of</span>
            <span>Experience</span>
          </div>
          <div className="flex flex-col text-center w-32 border border-green-500 border-2 rounded-full p-4">
            <span>6+</span>
            <span className="text-green-500">Completed</span>
            <span>Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
