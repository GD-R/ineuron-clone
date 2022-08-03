import React from 'react'
import { Menu } from '@mantine/core';
import { IconCertificate, IconChevronRight } from '@tabler/icons';
import DSCourse from './DSCourse';
import WDCourse from './WDCourse';
import MDCourse from './MDCourse';

const CourseMenu = () => {
  return (
    <>
      <Menu shadow="md" width={200}  trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <div className='flex'>
         <IconCertificate/><span className="hidden group-hover:inline-block ml-3 align-bottom pb-1">Courses</span>
         </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>COURSES</Menu.Label>
        <Menu.Item rightSection={<IconChevronRight/>}><DSCourse/></Menu.Item>
        <Menu.Item rightSection={<IconChevronRight/>}><WDCourse/></Menu.Item>
        <Menu.Item rightSection={<IconChevronRight/>}><MDCourse/></Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  )
}

export default CourseMenu
