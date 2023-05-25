import React from "react";
import { FreeCamera, Vector3, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import SceneComp from "@/components/SceneComp";
import Navbar from "@/components/navbar/Nav";
import Sidebar from "@/components/mainElements/sidebarComp";

// added from Babylon.js React documentation

let box: any;

const onSceneReady = (scene: any) => {
  // This creates and positions a free camera (non-mesh)
  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 20, height: 20 }, scene);
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene: any) => {
  if (box !== undefined) {
    const deltaTimeInMillis = scene.getEngine().getDeltaTime();

    const rpm = 10;
    box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
  }
};

export default function BabylonTest() {
  return (
    <main className = "flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <Sidebar className = "sidebar"/>
      <div className = "mainScene">
        {
          <SceneComp antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
        }
      </div>
    </main>
  );
};