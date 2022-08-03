import React from 'react'
import { Menu } from '@mantine/core';

const WDCourse = () => {
  return (
    <>
       <Menu shadow="md" width={200} position={"right-start"} trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <p>WEB DEVELOPMENT</p>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>WD</Menu.Label>
        <Menu.Item >FULL STACK WEB DEVELOPMENT</Menu.Item>
        <Menu.Item >JAVASCRIPT</Menu.Item>
        <Menu.Item >REACT JS</Menu.Item>
        <Menu.Item >NODE JS</Menu.Item>
        <Menu.Item >HTML CSS</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  )
}

export default WDCourse
