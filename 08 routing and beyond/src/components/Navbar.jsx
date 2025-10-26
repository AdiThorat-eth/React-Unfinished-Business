import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-xl m-2 flex justify-center gap-10 font-semibold">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
            fontStyle: e.isActive ? "italic" : "",
          };
        }}
        to="/"
      >
        Hero
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-blue-500 underline decoration-dotted" : "",
          ];
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink to="/about">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-amber-500" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              About
            </span>
          );
        }}
      </NavLink>
    </nav>
  );
};

export default Navbar;
