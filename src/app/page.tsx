
import React from 'react'
import { AuroraHero } from '@/components/AuroraHero'
import { CanvasRevealEffectDemo } from '@/components/canvas-reveal-demo'
import { Button } from '@/components/moving-border'
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Image from 'next/image';
import meritlogo from "@/assets/images/meritlogobuyuk.png"

const Home = () => {
  return (
    <>
      <AuroraHero/>
      <CanvasRevealEffectDemo/>
      <div className="bg-[#020617] py-8">
          <div className="h-[8rem] md:h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center bg-gradient-to-b from-sky-500 to-emerald-500 text-transparent bg-clip-text relative z-20">
              NASIL ÇALIŞIYORUZ ?
            </h1>
            <div className="w-[40rem] h-8 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              
              </div>
          </div> 
          <div className="flex flex-col justify-center items-center md:text-center md:flex-row gap-4 p-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button borderRadius="1.75rem" className="  text-black justify-start items-start h-72 ">
              <div className="flex flex-col justify-center items-center text-center gap-4 p-4 text-white">
              <IoCalendarOutline className='text-5xl text-center'/>
              <h1 className='text-2xl font-bold'>Planlama</h1>
              <h2 className='text-sm font-light'>Firmanızın ihtiyaçlarına göre analizlerin yapılması ve iş akış diyagramlarının oluşturulması.</h2>
              </div>
            </Button>
            <Button borderRadius="1.75rem" className="  text-black  justify-start items-start h-72 ">
              <div className="flex flex-col justify-center items-center text-center gap-4 p-4 text-white">
              <MdOutlineDesignServices className='text-5xl text-center'/>
              <h1 className='text-2xl font-bold'>Tasarım</h1>
              <h2 className='text-sm font-light'>Firmanızın amaç ve hedeflerine göre size özel tasarımın oluşturulması.</h2>
              </div>
            </Button>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button borderRadius="1.75rem" className="  text-black justify-start items-start h-72 ">
              <div className="flex flex-col justify-center items-center text-center gap-4 p-4 text-white">
              <FaCode className='text-5xl text-center'/>
              <h1 className='text-2xl font-bold'>Kodlama</h1>
              <h2 className='text-sm font-light'>Projenin sağlıklı ve stabil çalışması için komutların entegre edilmesi. Her uygulama ve tasarıma uygun alt yapıların kullanılması.</h2>
              </div>
            </Button>
            <Button borderRadius="1.75rem" className="  text-black  justify-start items-start h-72 ">
              <div className="flex flex-col justify-center items-center text-center gap-4 p-4 text-white">
              <IoCloudUploadOutline className='text-5xl text-center'/>
              <h1 className='text-2xl font-bold'>Yayınlama</h1>
              <h2 className='text-sm font-light'>Kodlama aşamasında oluşturulan projenin stabil çalışabilmesi için detaylı tüm testlerin yapılması ve yayınlanması.</h2>
              </div>
            </Button>
          </div>
      </div>   
      </div>

      <div className="bg-[#020617] py-8">
      <div className="h-[8rem] md:h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center bg-gradient-to-b from-sky-500 to-emerald-500 text-transparent bg-clip-text relative z-20">
              REFERANSLAR
            </h1>
            <div className="w-[40rem] h-8 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              
              </div>
          </div> 
          <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl border-white/[0.5] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                MERİTYMM
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 text-sm max-w-sm mt-2 "
              >
                Merit Yeminli Mali Müşavirlik
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4 bg-white rounded-xl">
                <Image
                  src={meritlogo.src}
                  width={1000}
                  height={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              
            </CardBody>
          </CardContainer>
      </div>
      
      <footer className='w-full bg-[#020617] border-t-[1px] border-solid border-white/[0.5]'>
        <div className="pt-0 w-full h-full inline-block z-0">
          <div className="py-8 px-24 flex items-center justify-center ">
            <div className='font-extralight text-sm flex gap-1 text-white'>
              <span>{new Date().getFullYear()}</span>
              <span>&copy;</span>
              <span>All Rights Reserved</span>
              </div>
            
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Home