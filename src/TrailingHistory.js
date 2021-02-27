import React from 'react';
import { HStack, Box, Center} from '@chakra-ui/react';

import { Animate }  from 'react-simple-animate';

export function TrailingHistory(props) {
    var boxList = []

    // EMPTY BOX PUSHES ARE USED FOR POSITION PURPOSES
    
    // LEFT BOX
    if (props.history.length >= 2) {
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translateX(40vw) scale(2, 1.5)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                duration={1}
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg="tomato" rounded="xl">
                    <Center h="100%">{props.history[1]}</Center>
                </Box>
            </Animate>
        )
    }   else {
        boxList.push(
            <Box visibility="hidden" w="20vw" h="20vh" maxWidth="200px" />
        )
    }

    // USED FOR LEFT BOX EXIT ANIMATION
    if (props.history.length == 3) {
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translate(-24vw, -10vh)"}}
                end={{transform: "translate(-44vw, -5vh) scale(0.5, 0.66)"}}
                duration={1}
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg="tomato" rounded="xl" position="absolute">
                    <Center h="100%">{props.history[2]}</Center>
                </Box>
            </Animate>
        )
    }
    

    if (props.history.length >= 1) {
        // MAIN BOX
        boxList.push(
            <Animate
                play={true}
                start={{transform: "translateX(40vw) scale(0.5, 0.66)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                duration={1}
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
        // RIGHT BOX
        boxList.push(
            <Animate 
                play={true}
                start={{transform: "translateX(20vw) scale(0.5, 0.66)"}}
                end={{transform: "translateX(0px) scale(1, 1)"}}
                duration={1}
            >
                <Box w="20vw" maxWidth="200px" h="20vh" bg="tomato" rounded="xl">
                    {/* blank box */}
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
        // <HStack spacing={8} key={props.history[0]}>
        <HStack spacing="4vw" key={props.history[0]}>
            {boxList}
        </HStack>
    )
}


export default TrailingHistory;