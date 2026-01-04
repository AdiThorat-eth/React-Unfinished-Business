import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full flex">
      <nav className="w-1/5 h-full bg-zinc-50 p-4 flex flex-col items-center">
        <a
          className="py-3 px-5 border text-center border-blue-400 text-blue-400 rounded-lg mb-4 hover:bg-blue-400 hover:text-white transition-all w-full"
          href="/create"
        >
          Add new product
        </a>
        <hr className="w-full" />
        <h1 className="text-lg font-semibold w-[88%] my-2">Category Filter</h1>
        <ul className="w-[75%]">
          <li className="my-1 flex items-center gap-3 p-2 rounded-lg">
            <span className="mr-2 w-[15px] h-[15px] bg-violet-400 rounded-full"></span>{" "}
            Cat 1
          </li>
          <li className="my-1 flex items-center gap-3 p-2 rounded-lg">
            <span className="mr-2 w-[15px] h-[15px] bg-amber-400 rounded-full"></span>{" "}
            Cat 2
          </li>
          <li className="my-1 flex items-center gap-3 p-2 rounded-lg">
            <span className="mr-2 w-[15px] h-[15px] bg-pink-400 rounded-full"></span>{" "}
            Cat 3
          </li>
        </ul>
      </nav>

      <div
        className="h-full w-4/5 p-5 flex flex-wrap content-start gap-2.5
      "
      >
        <div className="card p-2 border shadow rounded w-[26vh] h-[40vh] flex justify-center items-center flex-col">
          <div
            style={{
              backgroundImage:
                "url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png')",
            }}
            className="h-full w-full bg-cover bg-center mb-3 hover:scale-105 hover:cursor-pointer transition-all"
          ></div>
          <h1 className="hover:text-blue-500">Hello</h1>
        </div>

        {/* // */}
      </div>
    </div>
  );
};

export default App;
