import React from 'react'
import WhyCard from './WhyCard'
import Coding from "../assets/coding.png"
import Medal from "../assets/medal.png"
import Hiring from "../assets/hiring.png"
import Geek from "../assets/geekyants.png"
import Tata from "../assets/tataiq.png"
import Wipro from "../assets/wipro.png"
import Zen from "../assets/zensar.png"
import Musigma from "../assets/musigma.png"
import GitHub from "../assets/github.png"
import Mind from "../assets/mindtree.png"
import Programs from './Programs'

const Main = () => {
  return (
    <>
      <main>
        <h3 className='text-black text-center mt-10 text-5xl md:text-6xl font-semibold'>Why iNeuron?</h3>
        <h4 className='text-blue mb-4 text-center text-3xl font-semibold'>“Pure Hardwork, No Shortcuts!”</h4>
        <div className='w-full flex flex-wrap justify-center gap-4'>
            <WhyCard img={Medal} title={"Highest in quality, affordable in price"} 
                text={"Digital entrepreneurs, Youtubers and content creators provide affordable courses across technologies."} />
            
            <WhyCard img={Hiring} title={"Learning that makes you ready for job"} 
                text={"Over 10k+ students got placed and proved that our courses worked for them. They write their own success story and make us feel rewarded"} />
            
            <WhyCard img={Coding} title={"Hack-A-Thon"} 
                text={"Our 24 hour offline coding events such as Hack-a-thons, Job-a-thons and Course-a-thons give participants an opportunity to exhibit their skills."} />
        </div>
        <section className='my-8'>
          <h3 className='text-black text-center mb-8 text-5xl md:text-6xl underline font-semibold'>Our Partners</h3>
          <div className='flex w-full justify-center flex-wrap gap-4 md:gap-8'>
             <div className='w-36 md:w-72'><img className='w-full' src={Geek} alt="img"/></div>
             <div className='w-36 md:w-72'><img className='w-full' src={Tata} alt="img"/></div>
             <div className='w-36 md:w-60'><img className='w-full' src={Wipro} alt="img"/></div>
             <div className='w-36 md:w-60'><img className='w-full' src={Musigma} alt="img"/></div>
             <div className='w-36 md:w-72'><img className='w-full' src={GitHub} alt="img"/></div>
             <div className='w-36 md:w-72'><img className='w-full' src={Mind} alt="img"/></div>
             <div className='w-36 md:w-72'><img className='w-full' src={Zen} alt="img"/></div>
          </div>
        </section>
        <Programs/>
      </main>
    </>
  )
}

export default Main
