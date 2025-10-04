import React from "react";
import { useRef } from "react";

const App = () => {
  const name = useRef(null);
  const age = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value);
  };

  return (
    <form action="" onSubmit={handleSubmit} className="p-5">
      <input ref={name} placeholder="name" type="text" />
      <input ref={age} placeholder="age" type="text" />
      <input type="submit" />
    </form>
  );
};

export default App;
// website reloads after form submission but react main focus is to do not reload the page
// to stop form submission from reloading the page, we can use useRef(),controlled components, react-hook-form
// useRef() => in this we select all inputs and take their value when form is submitted
//
