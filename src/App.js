import React, { Component } from 'react';
import './App.css'
import {PageHeader} from './components/header';
import {HelloWorld} from './components/helloWorld';
import {BorderColor} from './components/borderColor';



class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <HelloWorld/>
        <BorderColor/>
      </div>
    );
  }
}

export default App;
