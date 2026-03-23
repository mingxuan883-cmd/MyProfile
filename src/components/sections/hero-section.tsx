"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const [subtitle, setSubtitle] = useState("");
  const [bio, setBio] = useState("");
  const [mounted, setMounted] = useState(false);

  const fullSubtitle = "Full Stack Developer";
  const fullBio = "Passionate developer building modern web applications with cutting-edge technologies.";

  // Mouse position for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [30, -30]);
  const rotateY = useTransform(mouseX, [-300, 300], [-30, 30]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect for subtitle
  useEffect(() => {
    if (!mounted) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullSubtitle.length) {
        setSubtitle(fullSubtitle.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [mounted]);

  // Typewriter effect for bio
  useEffect(() => {
    if (!mounted) return;

    const startDelay = fullSubtitle.length * 80 + 200;
    const timer = setTimeout(() => {
      let index = 0;
      const bioTimer = setInterval(() => {
        if (index <= fullBio.length) {
          setBio(fullBio.slice(0, index));
          index++;
        } else {
          clearInterval(bioTimer);
        }
      }, 30);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [mounted]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
          <div className="space-y-8">
            <div style={{ minHeight: "180px" }} />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground" style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)" }}>
              Andrew Yuan
            </h1>
            <div className="min-h-[2rem]" />
            <div className="min-h-[3rem]" />
            <div className="flex justify-center space-x-4 min-h-[3rem]" />
            <div className="min-h-[3rem]" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
        <div className="space-y-8">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="mx-auto flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/file.svg"
                alt="Andrew Yuan Portfolio Logo"
                className="w-32 h-32 object-contain"
                width={180}
                height={180}
                priority
                sizes="(max-width: 768px) 140px, 180px"
                style={{ width: "180px", height: "180px" }}
              />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1000px" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground cursor-pointer"
              style={{
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)",
                rotateX,
                rotateY,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Andrew Yuan
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto min-h-[2rem]"
          >
            {subtitle}
          </motion.h2>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto min-h-[3rem]"
          >
            {bio}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center space-x-4"
          >
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full"
            >
              <a
                href="https://github.com/YuKiAndrew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full"
            >
              <a
                href="mailto:mingxuan883@gmail.com"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="rounded-full"
            >
              <a
                href="https://www.linkedin.com/in/mingxuan-yuan-6084aab7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="bg-black text-white hover:bg-black/90 dark:bg-black dark:text-white dark:hover:bg-black/90">
              <a href="#projects" aria-label="View featured projects">
                View My Work
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/about" aria-label="Learn more">
                Learn More
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
