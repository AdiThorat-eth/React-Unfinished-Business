import React from "react";
import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full h-[43vh] p-4 rounded flex justify-center item-center gap-4 flex-wrap">
      {users.map((item, idx) => {
        return (
          <Card handleRemove={handleRemove} key={idx} user={item} id={idx} />
        );
      })}
    </div>
  );
};

export default Cards;
