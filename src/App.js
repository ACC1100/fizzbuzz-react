import React from 'react';
import {ChakraProvider, Box, Text, VStack, Grid, theme,} from '@chakra-ui/react';
import {ListItem, UnorderedList, OrderedList} from "@chakra-ui/react"
import {ButtonGroup, Button, Heading } from "@chakra-ui/react"
import {Center} from "@chakra-ui/react"

import {ColorModeSwitcher} from './ColorModeSwitcher';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"

import "./custom.css"

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            history: [],
            status: "start",
            buttonIsDisable: true,
            time: 0,
            currentTime: 0
        };
    }

    get_ul = () => {
        var rows = [];
        for (var i=0; i < this.state.history.length; i++) {
            rows.push(<ListItem key={i}>{this.state.history[i]}</ListItem>);
        }
        return <UnorderedList padding='4'>{rows}</UnorderedList>;
    }

    get_button = () => {
        var buttons = [];

        let numButton = this._get_individual_button(1, this.state.history.length + 1);
        let fizzButton = this._get_individual_button(2, "Fizz");
        let buzzButton = this._get_individual_button(3, "Buzz");
        let fizzBuzzButton = this._get_individual_button(4, "FizzBuzz");

        buttons.push(numButton, fizzButton, buzzButton, fizzBuzzButton);

        return <ButtonGroup variant="solid" spacing="6" isDisabled={this.state.buttonIsDisable}>{buttons}</ButtonGroup>;
    }

    _get_individual_button = (buttonNumber, content) => {
    return <Button onClick={() => this.button_click(buttonNumber)}>{content}</Button>
    }

    get_status = () => {
        if (this.state.status == "start") {
            return [
                <Center h="100%" padding="2"><Heading as="h1" size="md" color="primary.900">SELECT DIFFICULTY</Heading></Center>,
                <ButtonGroup variant="solid" spacing="6">
                    <Button isFullWidth onClick={() => this.play(5000)}>easy</Button>
                    <Button isFullWidth onClick={() => this.play(2500)}>medium</Button>
                    <Button isFullWidth onClick={() => this.play(1000)}>hard</Button>
                    <Button isFullWidth onClick={() => this.play(500)}>extreme</Button>
                </ButtonGroup>
            ]
        }   else if (this.state.status == "play" || this.state.status == "pause") {
            let text = (this.state.status == "play" ? "PLAYING" : "PAUSED, press buttons to start");

            if (this.state.currentTime > 0) {
                return [
                    <Center h="100%" padding="2"><Heading as="h1" size="md" color="primary.900">{text}</Heading></Center>,
                    <Center h="100%" padding="2"><Heading>{this.state.currentTime}ms</Heading></Center>
                ]
            } else {
                this.end();
            }

        }   else if (this.state.status == "done") {
            return [
                <Heading as="h1" size="md" color="primary.900" paddingBottom="20px">YOU JUST GOT BUZZED</Heading>,
                <Heading as="h2" size="md" color="primary.900" paddingBottom="20px">SCORE: {this.state.history.length}</Heading>,
                <Button onClick={() => this.restart()}>RESTART</Button>
            ]
        }
    }

    get_instructions = () => {
        return  [
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box>INSTRUCTIONS</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <OrderedList>
                            <ListItem>Click the number button to count incrementally</ListItem>
                            <ListItem>Click 'Fizz' if the number is divisible by 3</ListItem>
                            <ListItem>Click 'Buzz' if the number is divisible by 5</ListItem>
                            <ListItem>Click 'FizzBuzz' if the number is divisible by both 3 and 5!</ListItem>
                        </OrderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        ]
    }

    button_click = (buttonNumber) => {
        var pItem = '';
        var count = this.state.history.length + 1

        if (count % 15 == 0) {
            if (buttonNumber == 4) {
                pItem = 'FizzBuzz';
            }
        } else if (count % 5 == 0) {
            if (buttonNumber == 3) {
                pItem = 'Buzz';
            }
        } else if (count % 3 == 0) {
            if (buttonNumber == 2) {
                pItem = 'Fizz';
            }
        } else if (buttonNumber == 1) {
            pItem = count;
        }

        if (this.state.status == "play" || this.state.status == "pause") {
            if (pItem != '') {
                this.state.history.push(pItem);
                this.setState({
                    status: "play",
                    history: this.state.history,
                    currentTime: this.state.time,
                });
            } else {
                this.end();
            }
        }

    }

    play = (max_time) => {
        this.setState({
            status: "pause", // start paused
            buttonIsDisable: false,
            time: max_time,
            currentTime: max_time
        });
        this.timerID = setInterval(
            () => this.tick(),
            10
        );
    }

    tick() {
        if (this.state.status == 'play') {
            this.setState({
                currentTime: this.state.currentTime - 10 + (Math.floor(Math.random() * Math.floor(4)) - 2)
                // that math floor thing is random int between -2 and 2
                // so that it changes the smallest digit and looks more legit lmao, it averages out anyway
            });
        }
    }

    end = () => {
        this.setState({
            status: "done",
            buttonIsDisable: true,
        });
        clearInterval(this.timerID);
    }

    restart = () => {
        this.setState({
            history: [],
            status: "start"
        });
    }

    render () {
        return (
        <ChakraProvider theme={theme}>
            <VStack spacing={4} p={2} borderRadius="lg">

                <Grid templateColumns="repeat(2, 1fr)" minW="100vw" gap={10}>
                <Center h="100%"><Heading as="h1" size="md" color="primary.900" paddingBottom="20px">FizzBuzz game</Heading></Center>
                <Center h="100%"><ColorModeSwitcher justifySelf="flex-end"/></Center>
                </Grid>

                {this.get_button()}

                <Box w="80%" h="50vh" rounded="2xl" padding="50"><div class="overflowList">{this.get_ul()}</div></Box>

                {this.get_status()}

                {this.get_instructions()}

            </VStack>
        </ChakraProvider>
        );
    }
}

export default App;