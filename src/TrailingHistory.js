import React from 'react';
import { HStack, Box, Center} from '@chakra-ui/react';
import { Slide, useDisclosure } from "@chakra-ui/react"

import Button from "@chakra-ui/react"

// function SlideEx() {
//     const { isOpen, onToggle } = useDisclosure()
  
//     return (
//       <>
//         <Button onClick={onToggle}>Click Me</Button>
//         <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
//           <Box
//             p="40px"
//             color="white"
//             mt="4"
//             bg="teal.500"
//             rounded="md"
//             shadow="md"
//           >
//             aksdjhajksehlaksjheklajhselkjh
//           </Box>
//         </Slide>
//       </>
//     )
//   }

// export class TrailingHistory extends React.Component {
//     constructor (props) {
//         super(props);

//         // this.history = this.props.history;
//         // const { isOpen, onToggle } = useDisclosure();

//     }

//     // SlideEx() {
        
//     // }


//     render() {
//         // console.log(this.props.history)


//         return (
//             <HStack  spacing={8}>
//                 <Box w="20vw" h="20vh" bg="tomato" rounded="xl">
//                     {this.props.history[0]}
//                 </Box>

//                 <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
//                 <Center>
//                     <Box w="40vw" h="30vh" bg="tomato" rounded="xl">
//                         {this.props.history[1]}
//                     </Box>
//                 </Center>
//                 </Slide>

//                 <Box visibility="hidden" w="20vw" h="20vh" bg="tomato" rounded="xl">
//                     THIS IS JUST HERE FOR POSITIONING PURPOSES
//                 </Box>
//             </HStack>
//         )
//     }
// }

export function TrailingHistory(props) {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <HStack  spacing={8}>
            <Box w="20vw" h="20vh" bg="tomato" rounded="xl">
                {props.history[1]}
            </Box>

            {/* <Slide direction="right" in={false}> */}
            <Center>
                <Box w="40vw" h="30vh" bg="tomato" rounded="xl">
                    {props.history[0]}
                </Box>
            </Center>
            {/* </Slide> */}

            <Box visibility="hidden" w="20vw" h="20vh" bg="tomato" rounded="xl">
                THIS IS JUST HERE FOR POSITIONING PURPOSES
            </Box>
        </HStack>
    )
}


export default TrailingHistory;