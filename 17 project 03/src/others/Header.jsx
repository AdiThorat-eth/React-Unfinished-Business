import React, { useState } from "react";
import { setLocalStorage } from "../utils/localStorage";

const Header = ({ changeUser }) => {
  // const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium ">
        Hello <br /> <span className="text-4xl font-semibold">username👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 px-5 py-2 rounded-full font-semibold text-lg"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
