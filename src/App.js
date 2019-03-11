import React, { Component } from 'react';
import './App.css'
import {PageHeader} from './components/header';
import {HelloWorld} from './components/helloWorld';
import {BorderColor} from './components/borderColor';
import {Tconvertor} from './components/tConvertor';




class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <HelloWorld/>
        <BorderColor/>
        <Tconvertor/>
      </div>
    );
  }
}

export default App;
