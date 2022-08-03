import React from 'react'
import { Menu } from '@mantine/core';
import { IconAtom } from '@tabler/icons';

const CompanyMenu = () => {
  return (
    <>
      <Menu shadow="md" width={200}  trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <div className='flex'>
         <IconAtom/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">COMPANY</span>
         </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Company</Menu.Label>
        <Menu.Item >About Us</Menu.Item>
        <Menu.Item >Contact Us</Menu.Item>
        <Menu.Item >Hack-A-Thon</Menu.Item>
        <Menu.Item >Careers</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  )
}

export default CompanyMenu
