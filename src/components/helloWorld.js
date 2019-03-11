import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'


export class HelloWorld extends Component{
    constructor(props){
        super(props)
        this.state={time:new Date().toLocaleTimeString()}
        setInterval(this.handleTime,1000);
    }

    handleTime = () => {this.setState({time:new Date().toLocaleTimeString()})}

    render(){
        return(
            <div className="box">
                <Header as='h2' attached='top'>
                   Currently Playing . . .
                </Header>
                <Segment attached>
                    This moment : {this.state.time}
                </Segment>
            </div>
        )
    }
}