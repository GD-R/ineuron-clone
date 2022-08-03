import React from 'react'
import Logo from '../assets/in.png'
import FaceBook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import { IconMapPin, IconMail } from '@tabler/icons';

const Footer = () => {
  return (
    <>
       <footer className='bg-blue mt-8 py-8 px-4'>
       <div className='flex justify-between mb-4 items-center'>
           <div><img src={Logo} alt="logo"/></div>
           <div className='flex'>
              <img className='m-2 md:m-4 cursor-pointer' src={FaceBook} alt="image" />
              <img className='m-2 md:m-4 cursor-pointer' src={Twitter} alt="image" />
              <img className='m-2 md:m-4 cursor-pointer' src={Linkedin} alt="image" />
           </div>
       </div>
         <div className='flex justify-between gap-4 md:justify-around flex-wrap'>
            <div>
           <div className='flex justify-center items-center gap-4 my-4'>
              <div><IconMapPin color='#fcde67' /></div>
              <div><p className='text-white font-semibold'>17th Floor Tower A, Brigade <br/>Signature Towers, <br /> Sannatammanahalli, <br />Bengaluru, Karnataka 562129.</p></div>
           </div>
           <div className='flex justify-center items-center gap-4 my-4'>
              <div><IconMail color='#fcde67' /></div>
              <div><p className='text-white font-semibold'>Email us: contact@ineuron.ai</p></div>
           </div>
            </div>
            <div>
            <h4 className='underline font-bold text-2xl mb-2 text-white'>Company</h4>
               <p className='font-semibold text-white'>Contact Us</p>
                <p className='font-semibold text-white'>FAQs</p>
                <p className='font-semibold text-white'>Job Assistance</p>
                <p className='font-semibold text-white'>Terms & Conditions</p>
            </div>
            <div>
                <h4 className='underline font-bold text-2xl mb-2 text-white'>Products</h4>
                <p className='font-semibold text-white'>Job Portal</p>
                <p className='font-semibold text-white'>Internship portal</p>
                <p className='font-semibold text-white'>Become an affiliate</p>
                <p className='font-semibold text-white'>Hall of fame</p>
                <p className='font-semibold text-white'>InBlog</p>
            </div>
        </div>
       </footer>  
    </>
  )
}

export default Footer
