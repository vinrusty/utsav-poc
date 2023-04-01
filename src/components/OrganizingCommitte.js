import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import TabCards from './TabCards'
import { getData } from '../helpers/getData'

function OrganizingCommitte({data}) {


  return (
    <div>
        <Box width="100%" padding="2rem">
            {
                data.length === 0 ?
                <>
                </>
                :
                <>
                    <Breadcrumb separator={<ChevronRightIcon color="gray.400" />}>
                        <BreadcrumbItem>
                            <Text fontSize="xl">{data.name}</Text>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Text fontSize="xl">{data.phone}</Text>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Text fontSize="xl">{data.email}</Text>
                        </BreadcrumbItem>
                    </Breadcrumb>

                    <Tabs mt="2rem">
                        <TabList>
                            {
                                data && data?.depts.map((item, index) => (
                                    <Tab>{item.name}</Tab>
                                ))
                            }
                        </TabList>
                        <TabPanels>
                            {
                                data && data?.depts.map((item, index) => (
                                    <TabPanel>
                                        <TabCards seniorCoordinators={item.seniorCoordinators} juniorCoordinators={item.juniorCoordinators} />
                                    </TabPanel>
                                ))
                            }
                        </TabPanels>
                    </Tabs>
                </>
            }
        </Box>
    </div>
  )
}

export default OrganizingCommitte