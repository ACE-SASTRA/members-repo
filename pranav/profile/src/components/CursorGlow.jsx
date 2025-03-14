import { useEffect, useState } from "react";
import "../App.css";

function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isGlowing, setGlow] = useState(false);

  const settingGlow = (e) => {
    setPosition({ x: e.clientX, y: e.clientY }); // Set position before enabling glow
    setGlow(true);
  };

  const removingGlow = () => {
    setGlow(false);
  };

  useEffect(() => {
    if (!isGlowing) return;
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isGlowing]);
  return (
    <div
      className="cursor-container"
      onMouseEnter={settingGlow}
      onMouseLeave={removingGlow}
    >
      {isGlowing && (
        <div
          className="cursor-glow"
          style={{
            transform: `translate(${position.x - 150}px, ${
              position.y - 150
            }px)`,
          }}
        ></div>
      )}
    </div>
  );
}

export default CursorGlow;
