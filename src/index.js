import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
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
            rows.push(<li key={i}>{this.state.history[i]}</li>);
        }
        return <ul>{rows}</ul>;
    }

    get_button = () => {
        var buttons = [];
        
        let numButton = <button onClick={() => this.button_click(1)}>{this.state.history.length + 1}</button>;
        let fizzButton = <button onClick={() => this.button_click(2)}>Fizz</button>;
        let buzzButton = <button onClick={() => this.button_click(3)}>Buzz</button>;
        let fizzBuzzButton = <button onClick={() => this.button_click(4)}>FizzBuzz</button>;

        buttons.push(numButton, fizzButton, buzzButton, fizzBuzzButton);

        return buttons;
    }

    get_status = () => {
        if (this.state.status == true) {
            return <h1>PLAYING</h1>
        }   else {
            return [<h1>YOU JUST GOT BUZZED</h1>, <button onClick={() => this.restart()}>RESTART</button>]
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
            <div> 
                <div className="buttons center">
                    {this.get_button()}
                </div>
                <div className="moves">
                    {this.get_ul()}
                </div>
                <div className="center">
                    {this.get_status()}
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);