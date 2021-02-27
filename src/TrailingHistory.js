import React from 'react';
import { HStack, Box, Center} from '@chakra-ui/react';

import { Animate }  from 'react-simple-animate';

export function TrailingHistory(props) {
    var boxList = []

    // EMPTY BOX PUSHES ARE USED FOR POSITION PURPOSES
    if (props.history.length >= 2) {
        // LEFT BOX
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translateX(20vw) scale(2, 1.5)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                duration={0.1}
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg="tomato" rounded="xl">
                    <Center h="100%">{props.history[0]}</Center>
                </Box>
            </Animate>
        )
    }   else {
        boxList.push(
            <Box visibility="hidden" w="20vw" h="20vh" maxWidth="200px" />
        )
    }

    if (props.history.length >= 1) {
        // MAIN BOX
        boxList.push(
            <Animate
                play={true}
                start={{transform: "translateX(40vw) scale(0.5, 0.66)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                duration={0.1}
            >
                <Center>
                    <Box w="40vw" maxWidth="400px" h="30vh" bg="tomato" rounded="xl">
                        <Center h="100%">{props.history[0]}</Center>
                    </Box>
                </Center>
            </Animate>
        )
    }   else {
        boxList.push(
            <Center>
                <Box visibility="hidden" w="40vw" h="30vh" maxWidth="400px"/>
            </Center>
        )
    }

    if (props.history.length >= 0) {
        // LEFT BOX
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translateX(20vw) scale(0.5, 0.66)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                duration={0.1}
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg="tomato" rounded="xl">
                    <Center h="100%">{props.history[0]}</Center>
                </Box>
            </Animate>
        )
    }   else {
        boxList.push(
            <Box visibility="hidden" w="20vw" h="20vh" maxWidth="200px" />
        )
    }


    return (
        // YOOOO, HAVE UNIQUE KEY TO FORCE RE RENDER
        <HStack spacing={8} key={props.history[0]}>
            {boxList}
            {/* <Box visibility="hidden" w="20vw" h="20vh" maxWidth="200px"/> */}
        </HStack>
    )
}


export default TrailingHistory;