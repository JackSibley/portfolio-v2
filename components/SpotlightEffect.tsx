import React, { useState } from "react";

export const SpotlightEffect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Calculate mouse position relative to the viewport
    const x = e.clientX;
    const y = e.clientY;

    // Get the current scroll position
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Adjust the position for the scroll
    setPosition({ x: x + scrollX, y: y + scrollY });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group/spotlight relative"
    >
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(29,78,216,.15), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};
