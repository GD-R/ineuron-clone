import React from 'react'
import { Tabs, Input, Box, NavLink } from '@mantine/core';
import { IconCategory, IconUser, IconListSearch, IconSearch, IconCertificate, IconAtom2, IconPremiumRights, IconDeviceLaptop, IconAffiliate, IconAtom, IconJewishStar } from '@tabler/icons';

const TabElement = () => {

    

  return (
    <>
       <Tabs defaultValue="menu" color="#5bccf6" variant="pills">
         <Tabs.List position="apart">
           <Tabs.Tab value="menu" icon={<IconCategory size={28} />}>Menu</Tabs.Tab>
           <Tabs.Tab value="account" icon={<IconUser size={28} />}>Account</Tabs.Tab>
           <Tabs.Tab value="search" icon={<IconListSearch size={28} />}>Search</Tabs.Tab>
         </Tabs.List>

         <Tabs.Panel value="menu" pt="xs">
              <div style={{height:"100%", width:"80%", paddingBottom:"2rem"}} >
              <NavLink label="Courses" icon={<IconCertificate size={26} stroke={1.5} />} childrenOffset={28}>
                     <NavLink label="DATA SCIENCE" childrenOffset={28}>
                           <NavLink label="FULL STACK DATA SCIENCE" />
                           <NavLink label="PYTHON" />
                           <NavLink label="PYTHON PROJECT" />
                           <NavLink label="PYTHON INTERVIEW" />
                           <NavLink label="MACHINE LEARNING" />
                     </NavLink>

                     <NavLink label="WEB DEVELOPMENT" childrenOffset={28}>
                           <NavLink label="FULL STACK WEB DEVELOPMENT" />
                           <NavLink label="JAVASCRIPT" />
                           <NavLink label="REACT JS" />
                           <NavLink label="NODE JS" />
                           <NavLink label="HTML CSS" />
                     </NavLink>


                     <NavLink label="MOBILE DEVELOPMENT" childrenOffset={28}>
                           <NavLink label="REACT NATIVE" />
                           <NavLink label="ANDROID" />
                           <NavLink label="KOTLIN" />
                           <NavLink label="KOTLIN PROJECT" />
                           <NavLink label="IOS" />
                     </NavLink>


                 </NavLink>

                 <NavLink label="One Neuron"  icon={<IconAtom2 size={26} stroke={1.5} />} />
                 <NavLink label="Job Portal"  icon={<IconPremiumRights size={26} stroke={1.5} />} />
                 <NavLink label="Become an Affiliate"  icon={<IconAffiliate size={26} stroke={1.5} />} />
                 <NavLink label="Hall Of Fame"  icon={<IconJewishStar size={26} stroke={1.5} />} />
                 <NavLink label="Internship"  icon={<IconDeviceLaptop size={26} stroke={1.5} />} />

                 <NavLink label="Company" icon={<IconAtom size={26} stroke={1.5} />} childrenOffset={28}>
    
       
                       <NavLink label="About Us" />
                        <NavLink label="Contact Us" />
                        <NavLink label="Hack-A-Thon" />
                        <NavLink label="Careers" />
                        <NavLink label="Job Assistance" />
      
      </NavLink>
                
              </div>
      </Tabs.Panel>

      <Tabs.Panel value="account" pt="xs">
        <div className='text-center'>
           <div style={{ background: "#030e12", textAlign: "center", color:"#fcde67", padding: "1rem 0.5rem", margin: "1rem 0rem" }}><button>Sign Up</button></div>
           <div style={{ background: "#5bccf6", textAlign: "center", color:"#030e12", padding: "1rem 0.5rem", margin: "1rem 0rem" }}><button>Sign In</button></div>
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="search" pt="xs">
        <Input icon={<IconSearch />} placeholder="Search" size="md"/>
      </Tabs.Panel>


       </Tabs>
    </>
  )
}

export default TabElement
