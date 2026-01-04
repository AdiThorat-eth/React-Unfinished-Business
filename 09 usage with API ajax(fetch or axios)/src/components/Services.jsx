import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";

const Services = () => {
  const [first, setFirst] = useState("this is normal data");
  const [second, setSecond] = useState("this is very large data");
  const [users, setUsers] = useState([]);

  const getusers = () => {
    const api = "/users";
    // since it is promise we have to write ".then()"

    axios
      .get(api)
      .then((users) => {
        // FIX 1: Set state with the fetched data, which is available in users.data
        setUsers(users.data);
        console.log(users.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getusers();

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
        onClick={() => setFirst("Data has been changed")}
        className="p-2 bg-violet-200 rounded mb-4"
      >
        Change normal data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setSecond("Large data has been changed")}
        className="p-2 bg-lime-200 rounded"
      >
        Change large data
      </button>
    </div>
  );
};

export default Services;
