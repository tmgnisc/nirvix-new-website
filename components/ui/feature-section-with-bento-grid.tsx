"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { motion } from "framer-motion";

const HACKATHON_IMAGES = [
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%20100xnepal.webp?updatedAt=1765200219252",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/first%20hackathon.jpg?updatedAt=1761543749716",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%205.jpg?updatedAt=1761543749711",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%208.jpg?updatedAt=1761543749705",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%206.jpg?updatedAt=1761543749703",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%203.jpg?updatedAt=1761543749665",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%207.jpg?updatedAt=1761543749659",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%204.jpg?updatedAt=1761543749659",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%209.jpg?updatedAt=1761543749550",
  "https://ik.imagekit.io/bczuzbcoa/my%20image/hackathon%2011.jpg?updatedAt=1761543749471",
];

export function FeaturesSectionWithBentoGrid() {
  const features = [
    {
      title: "Built from real hackathons",
      description:
        "Crafted by developers who turned hackathon victories into production-ready technology.",
      skeleton: <SkeletonOne />,
      className: "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-hairline",
    },
    {
      title: "A glimpse into our victory",
      description:
        "An innovative team that thrives under pressure, turning bold ideas into working products across 11+ hackathon wins.",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-hairline",
    },
    {
      title: "Trusted by Clients Worldwide",
      description:
        "We've helped businesses around the world transform their ideas into reliable digital products through innovative development and exceptional service.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-hairline",
    },
    {
      title: "Delivering Solutions Worldwide",
      description:
        "From Nepal to businesses across the globe, we build scalable websites, software, and AI solutions that drive real results.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none",
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-24">
      <div className="px-8">
        <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-neutral-900 lg:text-5xl lg:leading-tight">
          Everything You Need, Built Right
        </h2>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-ink-soft lg:text-base">
          From custom web platforms to global-ready infrastructure, Nirvix Technology combines
          careful engineering with real, measurable results.
        </p>
      </div>

      <div className="relative">
        <div className="mt-12 grid grid-cols-1 rounded-md border border-hairline md:grid-cols-6 lg:grid-cols-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>{children}</div>;
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className="mx-auto max-w-5xl text-left text-xl tracking-tight text-neutral-900 md:text-2xl md:leading-snug">
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-ink-soft",
        "mx-0 my-2 max-w-sm text-left md:text-sm"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div className="mx-auto h-full w-full bg-white p-5 shadow-2xl">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          <Image
            src={HACKATHON_IMAGES[0]}
            alt="Nirvix Technology team celebrating a hackathon win"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-top"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a href="#testimonials" className="group/image relative flex h-full gap-10">
      <div className="mx-auto h-full w-full bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          <Image
            src="https://ik.imagekit.io/bczuzbcoa/my%20image/nirvix%20team.webp"
            alt="The Nirvix Technology team"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-center"
          />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [...HACKATHON_IMAGES, ...HACKATHON_IMAGES];

  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-10 overflow-hidden p-8">
      <motion.div
        className="flex flex-row gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {images.map((image, idx) => (
          <div
            key={"carousel-" + idx}
            className="flex-shrink-0 overflow-hidden rounded-xl border border-hairline bg-white p-1"
          >
            <Image
              src={image}
              alt={`Nirvix Technology team at hackathon ${(idx % HACKATHON_IMAGES.length) + 1}`}
              width={500}
              height={500}
              className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex h-72 flex-col items-center bg-transparent md:h-60">
      <Globe className="absolute -right-16 -bottom-40 md:-right-10 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let animationFrameId: number;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.09, 0.42, 0.71],
      glowColor: [1, 1, 1],
      markers: [
        // Kathmandu, Nepal — Nirvix HQ
        { location: [27.7172, 85.324], size: 0.1 },
      ],
    });

    // cobe 2.x dropped the onRender callback in favor of driving rotation
    // ourselves via globe.update() inside our own animation loop.
    function frame() {
      globe.update({ phi });
      phi += 0.01;
      animationFrameId = requestAnimationFrame(frame);
    }
    animationFrameId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "auto", maxWidth: 600, aspectRatio: 1 }}
      className={className}
    />
  );
};
