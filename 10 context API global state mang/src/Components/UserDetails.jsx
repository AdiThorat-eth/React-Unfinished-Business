import React, { useContext } from "react";
import { userContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(userContext);
  console.log(users[id]);
  const Navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="text-xl text-red-900 font-bold">
        Name: {users[id].username}
      </h1>
      <h3 className="text-lg text-blue-900 font-bold">
        City: {users[id].city}
      </h3>
      <button
        onClick={() => Navigate(-1)}
        className="mt-5 py-1 px-2 bg-zinc-500 text-white rounded-lg"
      >
        Go back
      </button>
    </div>
  );
};

export default UserDetails;
