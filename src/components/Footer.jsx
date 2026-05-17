import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, link: "" },
    { icon: <FaTwitter />, link: "" },
    { icon: <FaLinkedin />, link: "" },
  ];
  return (
    <div className="flex justify-around items-center mt-32 bg-[#1a1a2e] p-4">
      <div className="flex gap-4 items-center">
        {socialLinks?.map((socialLink) => (
          <div>
            <span className="text-green-500 text-2xl">{socialLink.icon}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center text-green-500">
        <FaRegCopyright />
        <span className="text-sm">2026 Bharath. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
