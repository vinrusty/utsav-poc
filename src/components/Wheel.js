import { Avatar, Button, Flex, FormControl, MenuList, MenuItem, Menu, MenuButton, Select, Switch } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import React, { useState, useEffect } from 'react'
import {getData} from '../helpers/getData.js'

function Wheel({setKey}) {

  const [click, setClick] = useState(false);
  
  return (
    <div>
        <Flex mt="20px" width="100%" justifyContent="center" alignItems="center" gap="5px">
          <Button onClick={() => setClick(!click)}>{click ? 'Clubs & Departments':'OC'}</Button>
        </Flex>
        {
          click ?
          <Flex width="100%" mt="2rem" alignItems="center" justifyContent="center" direction="column">
            <Menu width="400px">
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Clubs and Departments</MenuButton>
              <MenuList>
                <MenuItem>Augment.Ai</MenuItem>
                <MenuItem>GDSC</MenuItem>
                <MenuItem>ISE</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          :
          <Flex width="100%" mt="2rem" alignItems="center" justifyContent="center" direction="column">
            <Flex gap="30px">
              <Button onClick={() => {
                setKey("core1")
              }} colorScheme='linkedin'>Core 1</Button>
              <Button onClick={() => {
                setKey("core2")
              }} colorScheme='linkedin'>Core 2</Button>
            </Flex>
            <Flex gap="20px" mt="20px" alignItems="center">
              <Button onClick={() => {
                setKey("core3")
              }} colorScheme='linkedin'>Core 3</Button>
              <Avatar size='2xl' name='Utsav Logo' src='/images/utsav-logo.png' />
              <Button onClick={() => {
                setKey("core4")
              }} colorScheme='linkedin'>Core 4</Button>
            </Flex>
            <Flex gap="30px" mt="20px">
              <Button onClick={() => {
                setKey("core5")
              }} colorScheme='linkedin'>Core 5</Button>
              <Button onClick={() => {
                setKey("core6")
              }} colorScheme='linkedin'>Core 6</Button>
            </Flex>
          </Flex>
        }
    </div>
  )
}

export default Wheel