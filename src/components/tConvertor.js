import React, { Component } from 'react';
import { Header, Segment, Input } from 'semantic-ui-react'

//validations are left
export class Tconvertor extends Component{
    constructor(props){
        super(props);
        this.state={celcius:'-40',fahrenheit:'-40'}      
    }

    handleChange = event => {
    	console.log("triggered")
    	const name = event.target.name
    	const value = event.target.value
    	this.setState({
    		[name]:value
    	})
    	if(name=="celcius"){
    		this.setState({
    			fahrenheit:value*9/5+32
    		})
    	}
    	else{
    		this.setState({
    			celcius:(value-32)*5/9
    		})
    	}
    }


    render(){
        return(
            <div className="box">
                <Header as='h2' attached='top'>
                    Temperature Convertor
                </Header>
                <Segment attached>
                    <fieldset>
                    	<legend>Enter Temperature in Celcius:</legend>
                    	<Input type="text" placeholder="Temperature in Celcius" name="celcius" onChange={this.handleChange} value={this.state.celcius}/>
                    </fieldset>
                    <fieldset>
                    	<legend>Enter Temperature in Fahrenheit:</legend>
                    	<Input type="text" placeholder="Temperature in Fahrenheit" name="fahrenheit" onChange={this.handleChange} value={this.state.fahrenheit}/>
                    </fieldset>
                </Segment>
            </div>
        )
    }
}