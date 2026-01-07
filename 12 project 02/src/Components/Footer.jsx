import React from "react";

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-screen-xl py-10 flex gap-3 mx-auto">
        <div className="w-10/6">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight mb-10">
            refokus.
          </h1>
          <div className="flex gap-8 absolute bottom-3 text-zinc-400 pl-2">
            <h4>Privacy Policy</h4>
            <h4>Cookie Policy</h4>
            <h4>Impression</h4>
            <h4>Terms</h4>
          </div>
        </div>
        <div className="w-10/4 flex gap-15">
          <div className="text-zinc-400 pl-35">
            <h4 className="mb-10 mt-5">Socials</h4>
            {["Instagram", "Twitter(x?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-3" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="text-zinc-400 ">
            <h4 className="mb-10 mt-5">Sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a className="block mt-3 text-zinc-200" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className=" w-10/4">
            <p className="mt-22 text-right font-semibold leading-5 tracking-loose">
              Refokus is pioneering digital
              <br />
              agency driven by design and
              <br /> empowered by technology.
            </p>
            <img
              className=" w-full md:w-10/12 mt-6 ml-auto"
              src="https://assets-global.website-files.com/628ea50806d12b349bebc1ea/6482428d42dc637abdafb81a_Blue%20Label%201.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
