import React, { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const raw = [
    {
      name: "Brook",
      description: "Yohohoho",
      image:
        "https://images.unsplash.com/photo-1758535557154-af85568c1e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Teach",
      description: "Zihahaha",
      image:
        "https://images.unsplash.com/photo-1757868483984-ebe5b16526b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Kaido",
      description: "Arararara",
      image:
        "https://images.unsplash.com/photo-1755104572227-904d7a0758fb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
    {
      name: "Soul",
      description: "Derishishi",
      image:
        "https://images.unsplash.com/photo-1758640920730-a4b27cd8aa21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
      friend: false,
    },
  ];

  const [data, setData] = useState(raw);
  const handleClick = (changeCardIdx) => {
    setData((prev) => {
      return prev.map((item, idx) => {
        if (idx == changeCardIdx)
          return {
            ...item,
            friend: !item.friend,
          };
        return item;
      });
    });
  };

  return (
    <div>
      <div className="w-full h-screen gap-4 flex items-center justify-center">
        {data.map((item, idx) => (
          <Card key={idx} index={idx} values={item} hClick={handleClick} />
        ))}
      </div>
    </div>
  );
};
export default App;
// 20.11 38.18
