import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import fetchSmurfs from './actions/index'
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import {connect} from 'react-redux'

export class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();

  }

  render() {
    return (

      <div className="App">
              {console.log(this.props.item)}
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}


//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.


export default connect(null, {fetchSmurfs})(App)