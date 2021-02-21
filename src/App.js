import React from 'react';
import {ChakraProvider, Box, Text, VStack, Grid, theme,} from '@chakra-ui/react';
import {ListItem, UnorderedList } from "@chakra-ui/react"
import {ButtonGroup, Button, Heading } from "@chakra-ui/react"
import { Center} from "@chakra-ui/react"

import { ColorModeSwitcher } from './ColorModeSwitcher';

import "./custom.css"

class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          history: [],
          status: true,
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
      // buttons.push(<ColorModeSwitcher justifySelf="flex-end"/>)

      return <ButtonGroup variant="solid" spacing="6">{buttons}</ButtonGroup>;
  }

  _get_individual_button = (buttonNumber, content) => {
    return <Button onClick={() => this.button_click(buttonNumber)}>{content}</Button>
  }

  get_status = () => {
      if (this.state.status == true) {
          return <Heading as="h1" size="md" color="primary.900">PLAYING</Heading >
      }   else {
          return [<Heading as="h1" size="md" color="primary.900" paddingBottom="20px">YOU JUST GOT BUZZED</Heading>, <Button isFullWidth onClick={() => this.restart()}>RESTART</Button>]
      }
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

      if (this.state.status == true) {
          if (pItem != '') {
              this.state.history.push(pItem);
              this.setState({
                  history: this.state.history
              });
          } else {
              pItem = 'WRONG'
              this.state.history.push(pItem);
              this.setState({
                  history: this.state.history,
                  status: false
              });
          }
      }

  }

  restart = () => {
      this.setState({
          history: [],
          status: true
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
              
              <div className="center">
                  {this.get_status()}
              </div>

            </VStack>
        </ChakraProvider>
      );
  }
}

export default App;