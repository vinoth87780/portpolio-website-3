"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
const submited = { onClick: "Submitted" };
const EmailSecton = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z0mriq5", "template_b354gc9", form.current, {
        publicKey: "gasxxaNciYKQ3MJRj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Message send");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const [messageSend, setMessageSend] = useState(false);
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-purple-900 to-transparent rounded-full h-60 w-60 z-0  blur-lg absolute top-3/4 -left-10 transform -translate-x-1/2 translate-1/2 "></div>
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let`s Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          I`m currently looking for new oppourtunities, my inbox is alwats open.
          Whether you have a question or just want to say hi, I`ll try my best
          to get back to you!
        </p>
        <div className=" socials flex flex-row gap-2 ">
          <a href="https://github.com/vinoth87780" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/in/vinothkumar-pazhani" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div className="">
        <form className=" flex flex-col " ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label className="text-white block mb-2  text-sm font-medium">
              Your name
            </label>
            <input
              type="text"
              name="user_name"
              id="email"
              required
              className="bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="vishnu@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block mb-2  text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="bg-[#18191e] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              name="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            value="Send"
            onClick={() => setMessageSend(true)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {!messageSend ? (
            <p></p>
          ) : (
            <p className=" mt-5  text-green-600 font-medium py-2.5 px-2 rounded-lg text-center">
              Message sended!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSecton;
