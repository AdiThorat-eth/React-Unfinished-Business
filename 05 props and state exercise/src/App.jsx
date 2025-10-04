import React, { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

const App = () => {
  const raw = [
    {
      musician: "Brook",
      name: "Yohohoho",
      image:
        "https://images.unsplash.com/photo-1758535557154-af85568c1e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      fav: false,
    },
    {
      musician: "Teach",
      name: "Zihahaha",
      image:
        "https://images.unsplash.com/photo-1757868483984-ebe5b16526b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fav: false,
    },
    {
      musician: "Kaido",
      name: "Arararara",
      image:
        "https://images.unsplash.com/photo-1755104572227-904d7a0758fb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fav: false,
    },
    {
      musician: "Soul",
      name: "Derishishi",
      image:
        "https://images.unsplash.com/photo-1758640920730-a4b27cd8aa21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
      fav: false,
    },
  ];

  const [data, setData] = useState(raw);

  const addedFav = (cardIdx) => {
    setData((prev) => {
      return prev.map((item, idx) => {
        if (idx == cardIdx)
          return {
            ...item,
            fav: !item.fav,
          };
        return item;
      });
    });
  };

  return (
    <div className="bg-violet-200 overflow-hidden">
      <Navbar values={data} />

      <div className="w-full h-screen gap-10 flex items-center justify-center flex-wrap">
        {data.map((item, idx) => (
          <Card values={item} index={idx} key={idx} bClicked={addedFav} />
        ))}
      </div>
    </div>
  );
};
export default App;
// 20.11 38.18
