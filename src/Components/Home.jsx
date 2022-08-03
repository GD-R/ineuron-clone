import React from 'react'
import Neuron from "../assets/neuron.png"
import Pic1 from "../assets/1.png"
import Pic2 from "../assets/2.png"
import Pic3 from "../assets/3.jpg"
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import "./home.css"
import Main from './Main'
import Footer from './Footer'
import Testimonials from './Testimonials'
import ChatBox from './ChatBox'

const Home = () => {

    const autoplay = useRef(Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement));

  return (
    <>
      <header className='my-8 px-4 flex justify-around flex-col gap-8 items-center lg:flex-row lg:justify-around lg:gap-0'>
              <div className=' lg:w-[50%]'>
              <Carousel
     
      withIndicators
      withControls={false}
      align="center"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide><img src={Pic1} width="100%" height={"100%"} alt='image'/></Carousel.Slide>
      <Carousel.Slide><img src={Pic2} width="100%" height={"100%"} alt='image'/></Carousel.Slide>
      <Carousel.Slide><img src={Pic3} width="100%" height={"100%"} alt='image'/></Carousel.Slide>
     
    </Carousel>
              </div>

         <div>
            <h2 className='text-7xl md:text-8xl text-center text-black'>iNeur<span><img className='inline-block w-[4rem] md:w-[6rem] lg:w-[8rem] animate' src={Neuron} alt="img"/></span>n</h2>  
         </div>
         <div className='relative z-50'>
         <ChatBox/>
         </div>
      </header>
     
      <Main/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home
