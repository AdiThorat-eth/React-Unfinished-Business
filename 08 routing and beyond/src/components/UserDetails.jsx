import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const GoBackHandler = () => {
    // navigate("/user"); // it will route to exact that path("/user")
    navigate(-1); // to go just route back we can use -1
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-4">User Details</h1>
      <h1 className="text-2xl mb-4">Yo! {name}</h1>
      <button
        onClick={GoBackHandler}
        className="text-xl p-2 bg-lime-500 rounded"
      >
        Go back
      </button>
    </div>
  );
};

export default UserDetails;

// useParams is used to take the name of the user
// useNavigate is used to navigate on the route
