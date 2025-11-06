import React, { useEffect, useState } from "react";

const Services = () => {
  const [first, setfirst] = useState("this is normal data");
  const [second, setsecond] = useState("this is very large data");

  useEffect(() => {
    console.log("Services component mounted");

    return () => {
      console.log("Services component unmounted");
    };
  }, []);
  // due to square bracket it will not re render the component it will update the component

  return (
    <div className="text-center m-10">
      <h1>{first}</h1>
      <button
        onClick={() => setfirst("Data has been changed")}
        className="p-2 bg-violet-200 rounded mb-4"
      >
        Change normal data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setsecond("Large data has been changed")}
        className="p-2 bg-lime-200 rounded"
      >
        Change large data
      </button>
    </div>
  );
};

export default Services;
