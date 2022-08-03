import React from 'react'
import { Burger, Drawer,  useMantineTheme } from '@mantine/core';
import { useAppContext } from '../context/ContextApi';
import TabElement from './TabElement';



const MobileNav = () => {

    const theme = useMantineTheme();
 
    const {allState : { burger, setBurger, drawer, setDrawer }} = useAppContext();

    const handelDrawer = () => {
        setBurger((previous) => !previous)
        setDrawer(true)
    }

  return (
    <>
    <div className='flex px-4 h-16 items-center'>
       <div>
          <Burger size={"md"} color="#030e12" opened={burger} onClick={handelDrawer} />
       </div>
         <h1 className='text-black text-center ml-auto mr-auto text-4xl'>iNeur<span className='text-blue'>o</span>n</h1>
    </div>

    <div className=''>
       <Drawer opened={drawer} onClose={() => {setDrawer(false); setBurger(false) }} padding="xl" size="xl">
            <div style={{height:"100%", width:"100%", overflowY:'scroll' }}><TabElement/></div>
        </Drawer>
    </div>

   </>
  )
}

export default MobileNav
