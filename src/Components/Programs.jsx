import React from 'react'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import ProgramCard from './ProgramCard'
import Program1 from '../assets/program1.jpg'
import Program2 from '../assets/program2.jpg'
import Program3 from '../assets/program3.jpg'
import Program4 from '../assets/program4.jpg'
import Program5 from '../assets/program5.jpg'
import Program6 from '../assets/program6.jpg'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons';

const Programs = () => {

    const autoplay = useRef(Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement));
     
    const card1 = {person:"Anurag Tiwari", title: "DSA for FAANG preparation with Python and JavaScript"}
    const card2 = {person:"Navin Reddy", title: "Full Stack Web Development using Python in Hindi"}
    const card3 = {person:"Amresh Bharti", title: "Advance Facebook Marketing Course in Hindi"}
    const card4 = {person:"Shashank Mishra", title: "Job Guaranteed Big Data Bootcamp"}
    const card5 = {person:"Amresh Bharti", title: "YouTube Mastery Batch 2 in Hindi"}
    const card6 = {person:"Amresh Bharti", title: "Digital Marketing Batch 2 in Hindi"}
    

  return (
    <div className='my-16 '>
       <h3 className='text-black text-center my-4 text-5xl md:text-6xl underline font-semibold'>Our Programs</h3>
      <div className='my-8 text-center'>
        

         <Carousel  nextControlIcon={<IconArrowRight color='#030e12' size={16} />}
      previousControlIcon={<IconArrowLeft color='#030e12' size={16} />}  mx="auto" align={"center"} plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
            <Carousel.Slide><ProgramCard img={Program1} person={card1.person} title={card1.title}/> <ProgramCard img={Program2} person={card2.person} title={card2.title}/> <ProgramCard img={Program3} person={card3.person} title={card3.title}/></Carousel.Slide>
            <Carousel.Slide><ProgramCard img={Program4} person={card4.person} title={card4.title}/><ProgramCard img={Program5} person={card5.person} title={card5.title}/><ProgramCard img={Program6} person={card6.person} title={card6.title}/></Carousel.Slide>
            
    </Carousel>
         
      </div>
    </div>
  )
}

export default Programs
