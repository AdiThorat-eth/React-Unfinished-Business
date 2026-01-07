import React from "react";
import Card from "./Card";

const Cards = () => {
  let data = [
    { title: "Heading", point: "Let's get it, together." },
    { title: "Heading", point: "Insights and behind the scenes" },
  ];
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1">
        <Card
          heading={false}
          start={false}
          end={true}
          data={data[0]}
          hover={false}
        />
        <Card
          width="w-[70%]"
          heading={true}
          start={true}
          end={false}
          data={data[1]}
          hover="hover:bg-violet-600"
        />
      </div>
    </div>
  );
};

export default Cards;
