import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-around p-4">
      <div>
        <span className="text-2xl">BHARATH KUMAR</span>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Skills</li>
          <li className="bg-green-500 p-2 rounded">Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
