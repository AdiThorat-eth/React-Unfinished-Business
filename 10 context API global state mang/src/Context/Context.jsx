import React, { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

const Context = (props) => {
  const [users, setusers] = useState([
    { id: 0, username: "Abc", city: "A" },
    { id: 1, username: "Def", city: "B" },
    { id: 2, username: "Ghi", city: "C" },
  ]);
  return (
    <userContext.Provider value={{ users, setusers }}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
