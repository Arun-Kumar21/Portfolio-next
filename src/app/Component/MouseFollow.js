"use client";
import { useState , useEffect } from "react";

export default function MouseFollow() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const onMouseMove = (e) => {
        setTimeout(() => {
          setPosition({ x: e.clientX, y: e.clientY + window.scrollY});
        }, 100);
      };


      document.addEventListener('mousemove', onMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }, []);


  return (
    <>
      <div
        className="hidden lg:block dot bg-violet-500"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      </div>
    </>
  );
}
