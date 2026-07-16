"use client";

import { useState, useEffect, useRef, type ComponentType, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { FaAws, FaJava } from "react-icons/fa";
import {
    SiReact,
    SiNextdotjs,
    SiSpring,
    SiDjango,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiTypescript,
} from "react-icons/si";
import logoImg from "@/app/logo.png";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
    label: string;
    color?: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const IMG_WIDTH = 60;  // Reduced from 100
const IMG_HEIGHT = 85; // Reduced from 140

function FlipCard({
    Icon,
    label,
    color,
    index,
    total,
    phase,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            // Smoothly animate to the coordinates defined by the parent
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}

            // Initial style
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d", // Essential for the 3D hover effect
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <Icon className="h-8 w-8" style={color ? { color } : undefined} />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-brand-light uppercase tracking-widest mb-1">Tech</p>
                        <p className="text-xs font-medium text-white">{label}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// --- Main Hero Component ---
const TOTAL_IMAGES = 10;
const MAX_SCROLL = 3000; // Virtual scroll range

// Nirvix tech stack — the tools and languages behind our work
const TECH_STACK: { Icon: ComponentType<{ className?: string; style?: CSSProperties }>; label: string; color?: string }[] = [
    { Icon: SiReact, label: "React", color: "#61DAFB" },
    { Icon: SiNextdotjs, label: "Next.js", color: "#000000" },
    { Icon: FaJava, label: "Java", color: "#E76F00" },
    { Icon: SiSpring, label: "Spring Boot", color: "#6DB33F" },
    { Icon: SiDjango, label: "Django", color: "#092E20" },
    { Icon: SiPhp, label: "PHP", color: "#777BB4" },
    { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
    { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
    { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
    { Icon: FaAws, label: "AWS", color: "#FF9900" },
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        // Initial set
        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Virtual Scroll Logic ---
    const virtualScroll = useMotionValue(0);
    const scrollRef = useRef(0); // Keep track of scroll value without re-renders

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            // Once fully scrolled through (or back at the start), release control
            // back to the page's own scroll instead of trapping the wheel here.
            const atMax = scrollRef.current >= MAX_SCROLL;
            const atMin = scrollRef.current <= 0;
            if ((atMax && e.deltaY > 0) || (atMin && e.deltaY < 0)) {
                return;
            }

            // Prevent default to stop browser overscroll/bounce, and stop
            // propagation so the page's own smooth-scroll library (Lenis) never
            // sees this event and scrolls the page in lockstep underneath us.
            e.preventDefault();
            e.stopPropagation();

            const newScroll = Math.min(Math.max(scrollRef.current + e.deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        // Touch support
        // On mobile the arc layout is already fully settled without any
        // scroll input (see morphForUI below), so there's nothing left for a
        // captured touch gesture to drive — trapping it would just force
        // users to swipe repeatedly to escape the hero. Let touch scroll pass
        // straight through to the page so a single swipe moves on to the
        // next section, same as scrolling anywhere else.
        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            const isMobile = window.innerWidth < 768;
            if (isMobile) return;

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            touchStartY = touchY;

            const atMax = scrollRef.current >= MAX_SCROLL;
            const atMin = scrollRef.current <= 0;
            if ((atMax && deltaY > 0) || (atMin && deltaY < 0)) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            const newScroll = Math.min(Math.max(scrollRef.current + deltaY, 0), MAX_SCROLL);
            scrollRef.current = newScroll;
            virtualScroll.set(newScroll);
        };

        // Attach listeners to container instead of window for portability
        container.addEventListener("wheel", handleWheel, { passive: false });
        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [virtualScroll]);

    // 1. Morph Progress: 0 (Circle) -> 1 (Bottom Arc)
    // Happens between scroll 0 and 600
    const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

    // 2. Scroll Rotation (Shuffling): Starts after morph (e.g., > 600)
    // Rotates the bottom arc as user continues scrolling
    const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;

            // Normalize -1 to 1
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            // Move +/- 100px
            mouseX.set(normalizedX * 100);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // --- Random Scatter Positions ---
    // Deterministic zeroed placeholder for SSR so the initial hydration matches
    // exactly; real randomized scatter is filled in client-side after mount so
    // Math.random() never has to agree between server and client.
    const [scatterPositions, setScatterPositions] = useState(() =>
        TECH_STACK.map(() => ({ x: 0, y: 0, rotation: 0, scale: 0.6, opacity: 0 }))
    );

    useEffect(() => {
        setScatterPositions(
            TECH_STACK.map(() => ({
                x: (Math.random() - 0.5) * 1500,
                y: (Math.random() - 0.5) * 1000,
                rotation: (Math.random() - 0.5) * 180,
                scale: 0.6,
                opacity: 0,
            }))
        );
    }, []);

    // --- Render Loop (Manual Calculation for Morph) ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    // --- Mobile: skip the "circle around the text" stage ---
    // On phones the circle formation sits directly on top of the headline
    // with no room to breathe, and reaching the arc layout via scroll takes
    // several swipes. Once the intro reaches the circle phase, mobile jumps
    // straight to the fully-morphed arc-below-text layout instead.
    const isMobile = containerSize.width > 0 && containerSize.width < 768;
    const morphForUI = isMobile ? 1 : morphValue;

    // --- Content Opacity ---
    // Fade in content when arc is formed (morphForUI > 0.8)
    const contentOpacityValue = Math.min(Math.max((morphForUI - 0.8) / 0.2, 0), 1);
    const contentYValue = lerp(20, 0, contentOpacityValue);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#FAFAFA] overflow-hidden">
            {/* Container */}
            <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">

                {/* Intro Text (Fades out) */}
                <div className="absolute z-20 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={introPhase === "circle" && morphForUI < 0.5 ? { opacity: 1 - morphForUI * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 1 }}
                        className="max-w-2xl text-xl font-medium tracking-tight text-gray-800 sm:text-2xl md:text-4xl"
                    >
                        Your Vision, Our Code - Leading IT Company in Nepal
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={introPhase === "circle" && morphForUI < 0.5 ? { opacity: 1 - morphForUI * 2, y: 0 } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="mt-3"
                    >
                        <Image
                            src={logoImg}
                            alt="Nirvix Technology"
                            className="h-16 w-auto object-contain sm:h-20"
                            priority
                        />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" && morphForUI < 0.5 ? { opacity: 0.5 - morphForUI } : { opacity: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500"
                    >
                        SCROLL TO EXPLORE
                    </motion.p>
                </div>

                {/* Arc Active Content (Fades in) */}
                <motion.div
                    style={{ opacity: contentOpacityValue, y: contentYValue }}
                    className="absolute top-[18%] z-20 flex flex-col items-center justify-center text-center pointer-events-none px-4 sm:top-[16%]"
                >
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                        Software Built For Growth
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
                        Nirvix Technology delivers high-quality software, web apps, mobile apps, and
                        custom digital solutions. <br className="hidden md:block" />
                        Scroll to see how we bring your vision to life.
                    </p>
                </motion.div>

                {/* Main Container */}
                <div className="relative z-0 flex items-center justify-center w-full h-full">
                    {TECH_STACK.slice(0, TOTAL_IMAGES).map((tech, i) => {
                        let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        // 1. Intro Phases (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i];
                        } else if (introPhase === "line") {
                            const lineSpacing = 70; // Adjusted for smaller images (60px width + 10px gap)
                            const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            // 2. Circle Phase & Morph Logic

                            // Responsive Calculations
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // A. Calculate Circle Position
                            const circleRadius = Math.min(minDimension * 0.35, 350);

                            const circleAngle = (i / TOTAL_IMAGES) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // B. Calculate Bottom Arc Position
                            // "Rainbow" Arch: Convex up. Center is highest point.

                            // Radius:
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                            const arcRadius = baseRadius * (isMobile ? 1.15 : 1.1);

                            // Position:
                            // On mobile the arc sits directly under the "Software Built For
                            // Growth" text with no scroll to bridge the distance, so the apex
                            // is pulled much closer to center than on desktop to avoid a big
                            // dead gap between the copy and the first row of icons.
                            const arcApexY = containerSize.height * (isMobile ? 0.1 : 0.25);
                            const arcCenterY = arcApexY + arcRadius;

                            // Spread angle:
                            const spreadAngle = isMobile ? 100 : 130;
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = spreadAngle / (TOTAL_IMAGES - 1);

                            // Apply Scroll Rotation (Shuffle) with Bounds
                            // We want to clamp rotation so images don't disappear.
                            // Map scroll range [600, 3000] to a limited rotation range.
                            // Range: [-spreadAngle/2, spreadAngle/2] keeps them roughly in view.
                            // We map 0 -> 1 (progress of scroll loop) to this range.

                            // Note: rotateValue comes from smoothScrollRotate which maps [600, 3000] -> [0, 360]
                            // We need to adjust that mapping in the hook above, OR adjust it here.
                            // Better to adjust it here relative to the spread.

                            // Let's interpret rotateValue (0 to 360) as a progress 0 to 1
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);

                            // Calculate bounded rotation:
                            // Move from 0 (centered) to -spreadAngle (all the way left) or similar.
                            // Let's allow scrolling through the list.
                            // Total sweep needed to see all items if we start at one end?
                            // If we start centered, we can go +/- spreadAngle/2.

                            // User wants to "stop on the last image".
                            // Let's map scroll to: 0 -> -spreadAngle (shifts items left)
                            const maxRotation = spreadAngle * 0.8; // Don't go all the way, keep last item visible
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.4 : 1.8, // Increased scale for active state
                            };

                            // C. Interpolate (Morph)
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphForUI),
                                y: lerp(circlePos.y, arcPos.y, morphForUI),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphForUI),
                                scale: lerp(1, arcPos.scale, morphForUI),
                                opacity: 1,
                            };
                        }

                        return (
                            <FlipCard
                                key={i}
                                Icon={tech.Icon}
                                label={tech.label}
                                color={tech.color}
                                index={i}
                                total={TOTAL_IMAGES}
                                phase={introPhase} // Pass intro phase for initial animations
                                target={target}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
