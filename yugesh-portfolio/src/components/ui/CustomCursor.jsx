import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-998 transition-all duration-300 ease-out blur-3xl
        ${
          isPointer ? "w-40 h-40 bg-amber-400/20" : "w-28 h-28 bg-amber-400/10"
        }`}
        style={{
          transform: `translate(${position.x - 60}px, ${position.y - 60}px)`,
        }}
      />

      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-999 transition-all duration-150 ease-out border backdrop-blur-md
        ${
          isPointer
            ? "w-14 h-14 border-amber-400 bg-amber-400/10"
            : "w-5 h-5 border-white bg-white/5"
        }`}
        style={{
          transform: `translate(${position.x - (isPointer ? 28 : 10)}px, ${
            position.y - (isPointer ? 28 : 10)
          }px)`,
        }}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300`}
        >
          <div
            className={`rounded-full bg-amber-400 transition-all duration-300
            ${isPointer ? "w-2 h-2" : "w-1.5 h-1.5"}`}
          />
        </div>
      </div>
    </>
  );
}
