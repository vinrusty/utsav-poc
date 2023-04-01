import { CheckCircleIcon, ChevronRightIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Avatar, Box, Breadcrumb, BreadcrumbItem, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

function TabCards({seniorCoordinators, juniorCoordinators}) {
  return (
    <div>
        <Flex alignItems="center" justifyContent="center" gap="20px">
            <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px">
                <Text fontSize="2xl">Senior Coordinators</Text>
                {/* <Box mt="20px"></Box> */}
                    {
                        seniorCoordinators && seniorCoordinators.map((item, index) => (
                            <>
                                <Text textAlign="left" mt="10px" fontSize="xl">{item.name}</Text>
                                <List textAlign="left">
                                    <ListItem>
                                        <ListIcon as={PhoneIcon} />
                                        {item.phone}
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={EmailIcon} />
                                        {item.email}
                                    </ListItem>
                                </List>
                            </>
                        ))
                    }
            </Box>
            <Box padding="2rem" backgroundColor="gray.200" borderRadius="10px">
                <Text fontSize="2xl">Junior Coordinators</Text>
                {/* <Box mt="20px"></Box> */}
                {
                        juniorCoordinators && juniorCoordinators.map((item, index) => (
                            <>
                                <Text textAlign="left" mt="10px" fontSize="xl">{item.name}</Text>
                                <List textAlign="left">
                                    <ListItem>
                                        <ListIcon as={PhoneIcon} />
                                        {item.phone}
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={EmailIcon} />
                                        {item.email}
                                    </ListItem>
                                </List>
                            </>
                        ))
                    }
            </Box>

            
            
        </Flex>
    </div>
  )
}

export default TabCards