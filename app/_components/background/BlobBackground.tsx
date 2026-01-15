"use client";

import { useState, useEffect, useRef } from "react";

export default function BlobBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate offset from center, inverted for "push away" effect
      targetPosition.current = {
        x: -(e.clientX - window.innerWidth / 2) * 0.2,
        y: -(e.clientY - window.innerHeight / 2) * 0.2,
      };
    };

    const animate = () => {
      setMousePosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.02,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.02,
      }));
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="intro-animation">
      <div
        className="blobs-wrapper"
        style={{
          // @ts-expect-error - CSS custom properties
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
          "--scale": 1,
        }}
      >
        <div
          className="blob"
          id="blob-1"
          style={{
            // @ts-expect-error - CSS custom properties
            "--offsetX": `${mousePosition.x}px`,
            "--offsetY": `${mousePosition.y}px`,
            "--scale-min": 0.5,
            "--scale-max": 1,
            "--animation-duration": "10s",
          }}
        >
          <div className="blob-inner" />
        </div>
        <div
          className="blob"
          id="blob-2"
          style={{
            // @ts-expect-error - CSS custom properties
            "--offsetX": `${mousePosition.x * 1.2}px`,
            "--offsetY": `${mousePosition.y * 1.2}px`,
            "--scale-min": 0.75,
            "--scale-max": 1.25,
            "--animation-duration": "8s",
          }}
        >
          <div className="blob-inner" />
        </div>
        <div
          className="blob"
          id="blob-3"
          style={{
            // @ts-expect-error - CSS custom properties
            "--offsetX": `${mousePosition.x * 0.3}px`,
            "--offsetY": `${mousePosition.y * 0.3}px`,
            "--scale-min": 1,
            "--scale-max": 1.25,
            "--animation-duration": "6s",
          }}
        >
          <div className="blob-inner" />
        </div>
      </div>
    </div>
  );
}