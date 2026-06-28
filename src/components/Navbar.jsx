import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-around p-4">
      <div>
        <span className="text-2xl">BHARATH KUMAR</span>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li><a href="#about">About</a></li>
          <li>Projects</li>
          <li>Skills</li>
          <li className="bg-green-500 p-2 rounded"><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
