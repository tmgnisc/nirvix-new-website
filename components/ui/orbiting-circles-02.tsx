"use client";

import React, { type ComponentType } from "react";
import { FaAws, FaJava } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiMongodb, SiDjango, SiPhp } from "react-icons/si";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

interface OrbitIcon {
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  alt: string;
  angle: number;
  color: string;
}

const orbits: { size: string; duration: number; icons: OrbitIcon[] }[] = [
  {
    size: "w-110 h-110 md:w-180 md:h-180",
    duration: 18,
    icons: [
      { Icon: SiReact, alt: "React", angle: -60, color: "#61DAFB" },
      { Icon: SiNextdotjs, alt: "Next.js", angle: 0, color: "#000000" },
      { Icon: SiTypescript, alt: "TypeScript", angle: 60, color: "#3178C6" },
    ],
  },
  {
    size: "w-150 h-150 md:w-220 md:h-220",
    duration: 24,
    icons: [
      { Icon: SiMongodb, alt: "MongoDB", angle: 0, color: "#47A248" },
      { Icon: FaAws, alt: "AWS", angle: -90, color: "#FF9900" },
    ],
  },
  {
    size: "w-180 h-180 md:w-265 md:h-265",
    duration: 30,
    icons: [
      { Icon: FaJava, alt: "Java", angle: -60, color: "#E76F00" },
      { Icon: SiDjango, alt: "Django", angle: 0, color: "#092E20" },
      { Icon: SiPhp, alt: "PHP", angle: 60, color: "#777BB4" },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative w-full h-110 md:h-160 overflow-hidden flex justify-center">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-75 md:w-145 z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons: OrbitIcon[] = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            alt: `${ic.alt}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-border ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-8 origin-bottom flex flex-col justify-start items-center"
                style={
                  {
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="p-3 sm:p-4 border border-border rounded-full bg-background -mt-8 relative z-10"
                  style={
                    {
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    } as React.CSSProperties
                  }
                >
                  <iconData.Icon
                    className="w-6 h-6 md:w-8 md:h-8"
                    style={{ color: iconData.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
