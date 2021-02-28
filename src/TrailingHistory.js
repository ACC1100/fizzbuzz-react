import React from 'react';
import { Text, HStack, Box, Center} from '@chakra-ui/react';
import { ColorModeScript, useColorMode, useColorModeValue } from "@chakra-ui/react"

import { Animate }  from 'react-simple-animate';

export function TrailingHistory(props) {
    var boxList = []
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue("gray.100", "gray.700")
    const color = useColorModeValue("black", "white")

    // EMPTY BOX PUSHES ARE USED FOR POSITION PURPOSES
    
    // LEFT BOX
    if (props.history.length >= 2) {
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translateX(40vw) scale(2, 1.5)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                // duration={0.2}
                key="left"
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg={bg} color={color} rounded="xl" key="left2">
                    <Center h="100%"><Text fontSize="4xl">{props.history[1]}</Text></Center>
                </Box>
            </Animate>
        )
    }   else {
        boxList.push(
            <Box visibility="hidden" w="20vw" h="20vh" maxWidth="200px" key="left2"/>
        )
    }


    if (props.history.length >= 1) {
        // MAIN BOX
        boxList.push(
            <Animate
                play={true}
                start={{transform: "translateX(40vw) scale(0.5, 0.66)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                // duration={0.2}
                key="mid"
            >
                <Center>
                    <Box w="40vw" maxWidth="400px" h="30vh" bg={bg} color={color} rounded="xl" key="mid2">
                        <Center h="100%"><Text fontSize="6xl">{props.history[0]}</Text></Center>
                    </Box>
                </Center>
            </Animate>
        )
    }   else {
        boxList.push(
            <Center>
                <Box visibility="hidden" w="40vw" h="30vh" maxWidth="400px" key="mid2"/>
            </Center>
        )
    }

    if (props.history.length >= 0) {
        // RIGHT BOX
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translateX(20vw) scale(0.5, 0.66)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                // duration={0.2}
                key="right"
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg={bg} color={color} rounded="xl" key="right2"/>
            </Animate>
        )
    }


    return (
        // YOOOO, HAVE UNIQUE KEY TO FORCE RE RENDER
        <HStack spacing="4vw" key={props.history[0]} overflow="hidden">
            {boxList}
        </HStack>
    )
}


export default TrailingHistory;