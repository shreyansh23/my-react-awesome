import React, { Component } from 'react';
import { Header, Segment,Input } from 'semantic-ui-react'


export class BorderColor extends Component{
    constructor(props){
        super(props);
        this.state={color:""}
    }

    handleChange = (event) =>{
        this.setState({color:event.target.value})
    }
    handleSubmit = (event) => {
        document.getElementById("change-border").style.borderRight="3px solid #"+this.state.color

        event.preventDefault();

    }
    render(){
        return(
            <div className="box" id="change-border">
                <Header as='h2' attached='top'>
                    Change my border color!
                </Header>
                <Segment attached>
                    <form onSubmit={this.handleSubmit}>
                    <Input type="text" placeholder="Enter color's hex value" onChange={this.handleChange} value={this.state.color}/><Input type="submit" value="Change"/>
                    </form>
                </Segment>
            </div>
        )
    }
}