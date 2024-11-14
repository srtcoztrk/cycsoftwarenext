"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/canvas-reveal-effect";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TbWorldSearch } from "react-icons/tb";


export function CanvasRevealEffectDemo() {
  return (
    <>
    <section id="neler-yapiyoruz" className="min-h-screen overflow-hidden bg-[#020617] flex flex-col">
    <div className="h-[8rem] md:h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center bg-gradient-to-b from-sky-500 to-emerald-500 text-transparent bg-clip-text relative z-20">
        NELER YAPIYORUZ ?
      </h1>
      <div className="w-[40rem] h-8 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        
      </div>
    </div>    
      
      
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        
        <Card title={
            <div className="flex flex-col text-start">
            <ul className="text-sm list-disc font-normal pl-2">
                <li>Güvenilir ve esnek altyapı</li>
                <li className="pt-2">Çözüm odaklı yaklaşımlarla rakiplerinizin önüne geçin</li>
                <li className="pt-2">İşletmenizin hedeflerini gerçekleştirmek için modern ve ölçeklenebilir web yazılım çözümleri geliştiriyoruz</li>
                <li className="pt-2">Müşteri odaklı ve çözüm odaklı bir yaklaşım benimseyerek, işletmenizin ihtiyaçlarına uygun çözümler sunuyoruz</li>
            </ul>
        </div>
        } icon={<div className="flex flex-col gap-5 text-center justify-center content-center">
          <div className="flex gap-2">
              <TbWorldSearch  className="text-emerald-600 text-4xl"/>
              <h1 className="text-2xl font-normal text-emerald-600">WEB UYGULAMA</h1>
          </div>
         
          <h2 className="text-sm font-light text-white underline underline-offset-4">Detay Görüntüle</h2>
      </div>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900"
            colors={[[147, 255, 220]]}
          />
        </Card>

        <Card title={
            <div className="flex flex-col text-start">
                <ul className="text-sm list-disc font-normal pl-2">
                    <li>Mobil yazılım çözümleri ile dijital dönüşümünüzü hızlandırın</li>
                    <li className="pt-2">Mobil deneyimi yeniden tanımlıyoruz</li>
                    <li className="pt-2">Çeşitli platformlara uyum sağlıyoruz</li>
                    <li className="pt-2">iOS, Android veya hibrit platformlar için özelleştirilmiş çözümler sunarak, müşterilerinizin tercih ettiği her platformda güçlü bir varlık olmanızı sağlıyoruz</li>
                </ul>
            </div>
        } icon={
        <div className="flex flex-col gap-5 text-center justify-center content-center">
            <div className="flex gap-2">
                <IoPhonePortraitOutline className="text-sky-600 text-4xl"/>
                <h1 className="text-2xl font-normal text-sky-600">MOBİL UYGULAMA</h1>
            </div>
           
            <h2 className="text-sm font-light text-white underline underline-offset-4">Detay Görüntüle</h2>
        </div>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      </section>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: React.ReactNode;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.5] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] cursor-pointer"
    >

      <Icon className="absolute h-6 w-6 -top-3 -left-3  text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3  text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3  text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-white dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
