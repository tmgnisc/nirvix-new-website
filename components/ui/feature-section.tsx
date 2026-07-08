"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Palette, Lightbulb } from "lucide-react";

const tasks = [
  {
    title: "Custom web applications",
    subtitle: "High-performance, scalable platforms",
    icon: <Globe className="w-4 h-4" />,
  },
  {
    title: "Mobile app development",
    subtitle: "Native & cross-platform apps",
    icon: <Smartphone className="w-4 h-4" />,
  },
  {
    title: "Cloud & DevOps",
    subtitle: "Scalable infrastructure & deployment",
    icon: <Cloud className="w-4 h-4" />,
  },
  {
    title: "UI/UX design",
    subtitle: "User-focused interface design",
    icon: <Palette className="w-4 h-4" />,
  },
  {
    title: "IT consulting",
    subtitle: "Digital transformation guidance",
    icon: <Lightbulb className="w-4 h-4" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-background text-foreground">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT SIDE - Task Loop with Vertical Bar */}
        <div className="relative w-full max-w-sm">
          <Card className="overflow-hidden bg-muted/30 backdrop-blur-md shadow-xl rounded-lg">
            <CardContent className="relative h-[320px] p-0 overflow-hidden">
              <div className="relative h-full overflow-hidden">
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 border-b border-hairline relative"
                    >
                      <div className="flex items-center justify-between flex-1">
                        <div className="flex items-center gap-2">
                          <div className="bg-surface w-10 h-10 rounded-xl shadow-md" />
                          <div>
                            <p className="text-sm font-medium text-neutral-900">{task.title}</p>
                            <p className="text-xs text-ink-soft">{task.subtitle}</p>
                          </div>
                        </div>
                        {task.icon}
                      </div>
                    </div>
                  ))}
                </motion.div>

                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            How We Work
          </Badge>
          <h3 className="text-lg sm:text-md lg:text-2xl font-normal text-neutral-900 leading-relaxed">
            Building software that just works{" "}
            <span className="text-ink-soft text-sm sm:text-base lg:text-2xl">
              we help you turn ideas into reliable, scalable products — from custom web and
              mobile apps to cloud infrastructure and ongoing IT support. Our solutions are
              built to reduce complexity, ship faster, and grow with your business.
            </span>
          </h3>

          <div className="flex gap-3 flex-wrap">
            <Badge className="px-4 py-2 text-sm">Custom Solutions</Badge>
            <Badge className="px-4 py-2 text-sm">50+ Projects Delivered</Badge>
            <Badge className="px-4 py-2 text-sm">Client-Focused</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
