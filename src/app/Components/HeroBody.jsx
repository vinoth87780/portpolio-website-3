"use client";
import Image from "next/image";
import React from "react";

import { TypeAnimation } from "react-type-animation";

const HeroBody = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-5xl font-extrabold ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600">
              {" "}
              Hello, I`am{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Vinothkumar P",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile App Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be]  lg:text-xl text-base sm:text-lg mb-6">
            I am a fresher, looking for oppourtunities to build an mobile app
            and website.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white text-white hover:bg-pink-700  bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500">
              {/* <image src={"Image/whatsapp.png"} /> */}
              <a
                className="font-medium hover:text-black"
                href="https://api.whatsapp.com/send/?phone=918778063624&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Contact me
              </a>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent  text-white border  mt-3 bg-gradient-to-br from-purple-500 via-violet-500 to-blue-500">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a
                  target="_blank"
                  href={
                    "https://drive.google.com/file/d/1NvJ4B8tWnIuojmbbFkQk387kC1ueSsvl/view?usp=drive_link"
                  }
                >
                  Download CV
                </a>
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center m-4 lg:m-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="hai"
              src="/image/hero-image.png"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBody;
