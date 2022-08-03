import React from 'react'
import "./navbar.css"
import { IconAtom2, IconPremiumRights, IconDeviceLaptop, IconAffiliate, IconArticle, IconJewishStar } from '@tabler/icons';
import MobileNav from './MobileNav';
import CourseMenu from './CourseMenu';
import CompanyMenu from './CompanyMenu';

const NavBar = () => {
  return (
    <>
        
        <nav className='lg:hidden'>
            <MobileNav/>
        </nav>
     
      <nav className='w-full h-32 items-center px-4 justify-between hidden lg:flex'>

           <div className="h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
               <input type="search" name="search" id="search" placeholder="Search"
                   className="appearance-none w-full outline-none focus:outline-none active:outline-none"/>
               <button type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        viewBox="0 0 24 24" className="w-6 h-6">
                       <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>

<div className="px-4 bg-blue shadow-lg rounded-2xl">
    <div className="flex gap-4">


        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  {/* <IconCertificate/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Courses</span> */}
                  <CourseMenu/>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  <IconAtom2/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">One Neuron</span>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  <IconPremiumRights/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Job Portal</span>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  <IconDeviceLaptop/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Internship</span>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  <IconAffiliate/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Affiliate</span>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  <IconJewishStar/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Hall Of Fame</span>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  <IconArticle/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Blog</span>
                </span>
            </p>
        </div>

        <div className="cursor-pointer hover:inline-block group">
            <p  className="flex py-2 group-hover:w-full text-black">
                <span className="block p-2 group-hover:bg-indigo-100 rounded-full group-hover:flex">
                  {/* <IconAtom/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Company</span> */}
                  <CompanyMenu/>
                </span>
            </p>
        </div>


        
        


        
       
        

        

       

       

        
    </div>
</div>

       <div>
        <button className='px-4 py-2 mr-4 hover:bg-blue'>Sign Up</button>
        <button className='bg-black text-yellow py-2 px-4'>Sign In</button>
       </div>






       
      </nav>
    </>
  )
}

export default NavBar
