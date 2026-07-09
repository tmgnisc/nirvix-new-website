"use client";

import { Button } from "@/components/ui/button";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa";
import {
  SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook, SiMongodb, SiSpring
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#000000" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiSpring, color: "#6DB33F" },
];

export default function StackFeatureSection({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-16 sm:my-24 pl-6 sm:pl-10 flex items-center justify-between h-[26rem] sm:h-[30rem] border border-hairline bg-white overflow-hidden rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-1/2 z-10">
        <h2 className="text-3xl sm:text-6xl font-bold mb-4 text-neutral-900">
          Build Your Next Product
        </h2>
        <p className="text-ink-soft mb-6 max-w-lg text-sm sm:text-base">
          Nirvix Technology builds fast, scalable software using the tools trusted by modern
          engineering teams worldwide.
        </p>
        <div className="flex items-center gap-3">
          <Button variant="default" onClick={onOpenContact}>
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation cropped to 1/4 */}
      <div className="relative w-1/2 h-full flex items-center justify-start overflow-hidden">
        <div className="relative w-[50rem] h-[50rem] translate-x-[50%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-24 h-24 rounded-full bg-surface shadow-lg flex items-center justify-center">
            <FaReact className="w-12 h-12 text-brand-light" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-hairline"
                style={{
                  width: size,
                  height: size,
                  animation: `nirvix-orbit-sweep ${10 + orbitIdx * 4}s ease-in-out infinite alternate`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = (50 + 50 * Math.cos(angle)).toFixed(4);
                    const y = (50 + 50 * Math.sin(angle)).toFixed(4);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-white rounded-full p-1 shadow-md"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
