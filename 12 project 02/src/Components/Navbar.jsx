import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 z-[999]">
      <div className="h-20 max-w-screen-xl mx-auto flex items-center border-b border-zinc-600 bg-zinc-900">
        <img
          className="h-7"
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        />
        <div className="links flex gap-14 ml-24">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a key={index} className="text-md flex items-center gap-1" href="#">
              {/* we cant give h and w to span tag bcoz it is inline elem so to give h and w we have to make inline-block */}
              {elem.length === 0 && (
                <span className="w-[1px] h-4 bg-zinc-600"></span>
              )}
              {index == 1 ? (
                <span
                  style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  className="inline-block mt-1 w-2 h-2 bg-green-500 rounded-full "
                ></span>
              ) : null}
              {elem}
            </a>
          ))}
        </div>
        <div className="ml-auto">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
