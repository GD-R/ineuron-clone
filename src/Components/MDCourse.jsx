import React from 'react'
import { Menu } from '@mantine/core';

const MDCourse = () => {
  return (
    <>
       <Menu shadow="md" width={200} position={"right-start"} trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <p>MOBILE DEVELOPMENT</p>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>MD</Menu.Label>
        <Menu.Item >REACT NATIVE</Menu.Item>
        <Menu.Item >ANDROID</Menu.Item>
        <Menu.Item >KOTLIN</Menu.Item>
        <Menu.Item >KOTLIN PROJECT</Menu.Item>
        <Menu.Item >IOS</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </>
  )
}

export default MDCourse
