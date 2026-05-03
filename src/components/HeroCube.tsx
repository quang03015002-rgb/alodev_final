"use client";
import { useEffect, useRef } from "react";

const FACE_COLORS = [
  { cls: "face-orange", label: "front" },
  { cls: "face-blue",   label: "back" },
  { cls: "face-green",  label: "right" },
  { cls: "face-red",    label: "left" },
  { cls: "face-white",  label: "top" },
  { cls: "face-yellow", label: "bottom" },
];

const FACE_TRANSFORMS = [
  "rotateY(0deg) translateZ(70px)",
  "rotateY(180deg) translateZ(70px)",
  "rotateY(90deg) translateZ(70px)",
  "rotateY(-90deg) translateZ(70px)",
  "rotateX(90deg) translateZ(70px)",
  "rotateX(-90deg) translateZ(70px)",
];

export default function HeroCube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const rotX = useRef(10);
  const rotY = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lastTime = 0;

    const animate = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      rotY.current += dt * 0.03;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${rotX.current}deg) rotateY(${rotY.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      rotX.current = 10 + ((e.clientY - cy) / cy) * -12;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className="cube-scene animate-float"
      style={{ width: 140, height: 140, perspective: "600px" }}
      aria-hidden="true"
    >
      <div ref={cubeRef} className="cube" style={{ transformStyle: "preserve-3d" }}>
        {FACE_COLORS.map((face, i) => (
          <div
            key={face.label}
            className={`cube__face ${face.cls}`}
            style={{ transform: FACE_TRANSFORMS[i] }}
          >
            {Array.from({ length: 9 }).map((_, j) => (
              <div key={j} className="cube__cell" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
