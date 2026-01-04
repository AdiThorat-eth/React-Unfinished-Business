import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Context/Context";

const User = () => {
  const { users, setusers } = useContext(userContext);
  return (
    <div className="mt-5">
      <h1 className="text-3xl mb-5">User Lists</h1>
      <div className="flex gap-2 flex-col w-1/2">
        {users.map((u) => (
          <Link
            to={`/user/${u.id}`}
            key={u.id}
            className="px-2 py-1 bg-blue-100 ro  rounded-full"
          >
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
