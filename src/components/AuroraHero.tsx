"use client"
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

import Image from "next/image";
import logo from "@/assets/images/logo.png"
import { TextGenerateEffect } from "./text-generate-effects";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const words="Mobil ve web yazılımlarla, işletmenizin dijital potansiyelini en üst seviyeye çıkarın. İhtiyaçlarınıza özel çözümler ile ve rekabet avantajınızı artırın.";

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center gap-10">
        <Image src={logo} alt="logo"></Image>

            <TextGenerateEffect className="my-6 max-w-xl text-center text-base leading-relaxed md:text-2xl md:leading-relaxed " words={words} />
            {/* <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-2xl md:leading-relaxed">
            
            </p> */}

        <motion.a href="#neler-yapiyoruz"
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Neler Yapıyoruz?
          <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
        </motion.a>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};