import React from 'react'
import { Menu } from '@mantine/core';

const DSCourse = () => {
  return (
    <>
       <Menu shadow="md" width={200} position={"right-start"} trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <p>DATA SCIENCE</p>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>DS</Menu.Label>
        <Menu.Item >FULL STACK DATA SCIENCE</Menu.Item>
        <Menu.Item >PYTHON</Menu.Item>
        <Menu.Item >PYTHON PROJECT</Menu.Item>
        <Menu.Item >PYTHON INTERVIEW</Menu.Item>
        <Menu.Item >MACHINE LEARNING</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  )
}

export default DSCourse
