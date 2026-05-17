import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contact() {
  const contacts = [
    {
      icon: <IoPerson />,
      title: "Bharath Kumar",
      description: "Web Developer(Full-Stack)",
    },
    {
      icon: <FaClock />,
      title: "Open to Work",
      description: "Available Right Now",
    },
    {
      icon: <MdEmail />,
      title: "Email",
      description: "bharathkumarkarrolla@gmail.com",
    },
  ];
  return (
    <div>
      <div className="flex flex-col mt-32">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl">Contact</span>
          <span className="text-green-500">Get In Touch</span>
        </div>

        <div className="flex flex-col justify-center gap-4 items-center md:flex-row mt-32">
          {contacts?.map((contact) => (
            <div className="flex flex-col space-y-2 p-8 rounded-2xl bg-[#1a1a2e] text-center items-center">
              <span className="text-2xl text-green-500">{contact.icon}</span>
              <span className="text-2xl font-bold">{contact.title}</span>
              <span className="text-sm">{contact.description}</span>
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

export default Contact;
