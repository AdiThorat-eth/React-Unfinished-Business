import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // console.log(handleLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="border-3 border-emerald-600 flex flex-col px-15  py-10 gap-5 items-center rounded-full"
      >
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          className="bg-transparent outline-none placeholder:text-gray-400 rounded-full text-2xl border-2 border-emerald-600"
          type="email"
          placeholder="   Enter Your Email"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
          className="bg-transparent outline-none placeholder:text-gray-400 rounded-full text-2xl border-2 border-emerald-600"
          type="password"
          placeholder="   Enter Your Password"
        />
        <button className="bg-emerald-600 rounded-full w-30 text-2xl py-1 mt-5 active:scale-90 font-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
