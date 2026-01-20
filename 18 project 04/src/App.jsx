import React from "react";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  // to do same logic in less code drei is used

  return (
    <>
      <main className="relative">
        <Canvas
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "1",
            backgroundImage: "url(/images/background-l.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Dog />
        </Canvas>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
};

export default App;
// 1:00
