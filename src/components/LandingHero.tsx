"use client"

import { Link } from "react-router-dom";
import { LayoutGroup, motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import { FloatingAnimation, FloatingElement } from "@/components/FloatingAnimation";
import { WavesDemo } from "@/components/WavesDemo";

const images = [
  {
    url: "/hero-images/download (18).png",
    alt: "Web Development",
    author: "M-E-C webcraft",
    width: 800,
    height: 600,
  },
  {
    url: "/hero-images/download (19).png",
    alt: "UI/UX Design",
    author: "M-E-C webcraft",
    width: 800,
    height: 600,
  },
  {
    url: "/hero-images/download (20).png",
    alt: "Mobile Development",
    author: "M-E-C webcraft",
    width: 800,
    height: 600,
  },
  {
    url: "/hero-images/download (22).png",
    alt: "Digital Solutions",
    author: "M-E-C webcraft",
    width: 800,
    height: 600,
  }
];

function LandingHero() {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative">
      {/* Waves background with reduced opacity */}
      <WavesDemo className="absolute inset-0 z-0 opacity-50" />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-5"></div>

      {/* Floating images need to be relative to sit on top of waves & overlay */}
      <FloatingAnimation className="absolute inset-0 w-full h-full pointer-events-none z-10"> {/* z-10 remains */}
        {/* Image 0: Hidden for this layout */}
        {/* <FloatingElement ... /> */}

        {/* Image 1: Top-Left */}
        <FloatingElement
          depth={1}
          // Symmetrical positioning, adjusted for responsiveness
          className="absolute top-[10%] left-[10%] sm:top-[15%] sm:left-[15%]"
        >
          <motion.img
            src={images[1].url}
            alt={images[1].alt}
            // Increased image size
            className="w-32 h-24 sm:w-40 sm:h-32 md:w-48 md:h-36 lg:w-56 lg:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        {/* Image 3: Top-Right (Using image index 3 for variety) */}
        <FloatingElement
          depth={2}
          // Symmetrical positioning (using right), adjusted for responsiveness
          className="absolute top-[10%] right-[10%] sm:top-[15%] sm:right-[15%]"
        >
          <motion.img
            src={images[3].url} // Using image 3 here
            alt={images[3].alt}
            // Increased image size
            className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>
        
        {/* Image 2: Bottom-Left */}
        <FloatingElement
          depth={1.5} // Adjusted depth slightly
          // Symmetrical positioning (using bottom), adjusted for responsiveness
          className="absolute bottom-[10%] left-[10%] sm:bottom-[15%] sm:left-[15%]"
        >
          <motion.img
            src={images[2].url}
            alt={images[2].alt}
            // Increased image size
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        {/* Image 4: Bottom-Right */}
        <FloatingElement
          depth={1}
          // Symmetrical positioning (using bottom and right), adjusted for responsiveness
          className="absolute bottom-[10%] right-[10%] sm:bottom-[15%] sm:right-[15%]"
        >
          <motion.img
            src={images[0].url}
            alt={images[0].alt}
            // Increased image size
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </FloatingAnimation>

      {/* Central text block (needs higher z-index than overlay) */}
      <div className="relative flex flex-col justify-center items-center w-full max-w-md md:max-w-2xl lg:max-w-4xl px-4 mx-auto z-20 pointer-events-auto"> {/* z-20 remains */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-3"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <div className="flex flex-row items-center justify-center">
            <span>Creating </span>
            <TextRotate
              texts={[
                "dynamic",
                "modern",
                "responsive",
                "elegant",
                "innovative",
              ]}
              mainClassName="overflow-hidden pr-3 text-[#FFD700] py-0 pb-2 md:pb-4 rounded-xl"
              staggerDuration={0.03}
              staggerFrom="last"
              rotationInterval={3000}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
            />
          </div>
          <span>
             web experience
          </span>
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center pt-6 sm:pt-10 md:pt-12 lg:pt-16"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Transforming ideas into exceptional digital solutions with cutting-edge technology and thoughtful design.
        </motion.p>

        <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20 text-xs">
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-background bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link to="/docs/introduction">
              View Project <span className="font-serif ml-1">→</span>
            </Link>
          </motion.button>
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-black bg-[#FFD700] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <a href="https://github.com/danielpetho/fancy" target="_blank" rel="noopener noreferrer">
              ★ on GitHub
            </a>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;