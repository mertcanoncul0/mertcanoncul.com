"use client";

import { useRef } from "react";

import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react"; // <-- import the hook from our React package

export default function App() {
  const container = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);
  const app = useRef(null);

  const { context, contextSafe } = useGSAP(
    () => {
      (xTo.current = gsap.quickTo(".flair", "x", {
        duration: 0.8,
        ease: "power3",
      })),
        (yTo.current = gsap.quickTo(".flair", "y", {
          duration: 0.8,
          ease: "power3",
        }));
    },
    { scope: app }
  );

  const moveShape = contextSafe((e) => {
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });

  return (
    <div
      className="app h-screen bg-slate-600 w-screen"
      ref={app}
      onMouseMove={(e) => moveShape(e)}>
      <div className="flair text-white bg-purple-700 p-20 shadow-2xl rounded-full flex items-center justify-center h-10 w-10">
        Hello
      </div>
    </div>
  );
}
