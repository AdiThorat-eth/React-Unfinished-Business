import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useTexture,
  useAnimations,
} from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Dog = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  // useGLTF is used to load the 3d model
  const model = useGLTF("/models/dog.drc.glb");

  // if you want to use camera, scene, renderer(gl) you can do using useThree hook
  useThree(({ camera, scene, gl }) => {
    // console.log(camera.position);
    camera.position.z = 0.5;

    // 1,2,3 are used to enhance the colors and textures
    gl.toneMapping = THREE.ReinhardToneMapping; // 1
    gl.outputColorSpace = THREE.SRGBColorSpace; // 2
  });

  const { actions } = useAnimations(model.animations, model.scene);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  // const textures = useTexture(
  //   {
  //     normalMap: "/images/dog_normals.jpg",
  //     sampleMatCap: "/matcap/mat-2.png",
  //   },
  //   // callback if given to apply settings to all textures
  //   (texture) => {
  //     texture.flipY = false;
  //     texture.colorSpace = THREE.SRGBColorSpace; // 3
  //   },
  // );

  const [normalMap, sampleMatCap] = useTexture([
    "/images/dog_normals.jpg",
    "/matcap/mat-2.png",
  ]).map((texture) => {
    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  const [branchMap, branchNormalMap] = useTexture([
    "/images/branches_diffuse.jpeg",
    "/images/branches_normals.jpeg",
  ]).map((texture) => {
    texture.flipY = true;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  });

  // material is already created so same material will be used
  const dogMaterial = new THREE.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: sampleMatCap,
  });

  const branchMaterial = new THREE.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    map: branchMap,
  });

  model.scene.traverse((child) => {
    if (child.name.includes("DOG")) {
      child.material = dogMaterial;
    } else {
      child.material = branchMaterial;
    }
  });

  const dogModel = useRef(model);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-3",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: true,
      },
    });
    // if you want to move model from current position you have to use -= or +=
    tl.to(dogModel.current.scene.position, {
      z: "-=0.75",
      y: "+=0.05",
    })
      .to(dogModel.current.scene.rotation, {
        x: `+=${Math.PI / 8}`,
      })
      .to(
        dogModel.current.scene.rotation,
        {
          y: `-=${Math.PI}`,
        },
        "third", // by using "third" we are telling that both "third" animation should start at the same time
      )
      .to(
        dogModel.current.scene.position,
        {
          x: "-=0.5",
          z: "+=0.3",
        },
        "third",
      );
  });

  return (
    <>
      <primitive
        object={model.scene}
        position={[0.2, -0.56, 0]}
        rotation={[-Math.PI / 30, Math.PI / 5, 0]}
      />
      <directionalLight intensity={10} color={0xffffff} position={[0, 5, 5]} />
      {/* <OrbitControls /> */}
    </>
  );
};

export default Dog;
