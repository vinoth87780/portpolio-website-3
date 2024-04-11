import React from "react";

const Footer = () => {
  return (
    <footer className="footer h-full bg-black border border-top-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className=" container p-5 flex justify-between">
        <span className="text-xl font-semibold">
          Vinoth
          <span className="text-purple-700"> Kumar</span> P
        </span>

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
