import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  // using useRef() //
  // const name = useRef(null);
  // const age = useRef(null);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(name.current.value, age.current.value);
  // };

  // using controlled components //
  // const [val, setVal] = useState({ name: "", email: "" });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(val);
  // };

  // using react-hook-form
  const { register, handleSubmit } = useForm();

  return (
    <div className="p-5">
      {/* <div className="using useRef()">
        <form action="" onSubmit={handleSubmit}>
          <input ref={name} placeholder="name" type="text" />
          <input ref={age} placeholder="age" type="text" />
          <input type="submit" />
        </form>
      </div> */}

      {/* <div className="using controlled components">
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={(event) => setVal({ ...val, name: event.target.value })}
            type="text"
            placeholder="name"
          />
          <input
            onChange={(event) => setVal({ ...val, email: event.target.value })}
            type="email"
            placeholder="email"
          />
          <input type="submit" />
        </form>
      </div> */}

      <div className="using react hook form">
        <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
          <input {...register("name")} type="text" placeholder="name" />
          <input {...register("email")} type="email" placeholder="email" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default App;
// website reloads after form submission but react main focus is to do not reload the page
// to stop form submission from reloading the page, we can use useRef(),controlled components, react-hook-form
// useRef() => in this we select all inputs and take their value when form is submitted
// controlled components => in this whenever user gives input update that data in real time using useState. like whenever user types make "set state" as new value
// react-hook-form => in this we use register hook to create form inputs and handleSubmit hook to handle form submission
