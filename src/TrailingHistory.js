import React from 'react';
import { HStack, Box, Center} from '@chakra-ui/react';
// import { Slide, useDisclosure } from "@chakra-ui/react"
// import Button from "@chakra-ui/react"

import { Animate }  from 'react-simple-animate';


export function TrailingHistory(props) {
    // const { isOpen, onToggle } = useDisclosure();
    var boxList = []

    if (props.history.length >= 2) {
        boxList.push(
            <Box w="20vw" h="20vh" bg="tomato" rounded="xl">
                {props.history[1]}
            </Box>
        )
    }   else {
        boxList.push(
            <Box visibility="hidden" w="20vw" h="20vh" />
        )
    }

    if (props.history.length >= 1) {
        boxList.push(
            <Center>
                <Box w="40vw" h="30vh" bg="tomato" rounded="xl">
                    {props.history[0]}
                </Box>
            </Center>
        )
    }   else {
        boxList.push(
            <Center>
                <Box visibility="hidden" w="40vw" h="30vh"/>
            </Center>
        )
    }

    return (
        <HStack  spacing={8}>
            {boxList}

            {/* <Animate>
            
            </Animate> */}

            <Box visibility="hidden" w="20vw" h="20vh"/>
        </HStack>
    )
}


export default TrailingHistory;