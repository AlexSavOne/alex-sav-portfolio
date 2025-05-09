// src/components/NeonCursor/NeonCursor.tsx
import React, { useEffect, useState } from "react";

export default function NeonCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      // Сохраняем координаты курсора
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `${pos.y}px`,
        left: `${pos.x}px`,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        background:
          "radial-gradient(circle, rgba(255,65,108,0.8) 0%, transparent 50%)",
        mixBlendMode: "screen",
        filter: "blur(8px)",
        animation: "neonPulse 2.5s ease-in-out infinite",
        zIndex: 9999,
      }}
    />
  );
}
