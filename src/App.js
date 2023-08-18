
import React, { Component } from 'react';
import Table from './components/Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicle: []
    }
  }

     componentDidMount() {
          var base64 = require("base-64");
          let headers = new Headers();

               const uname = "admin";
               const pword = "admin";

               headers.set('Authorization', 'Basic' + base64.encode(uname + ":" + pword));

             	fetch('http://54.237.115.48:80/vehicle',{mode: 'no-cors'}, {method: 'GET'},
             	{
                  headers: {Authorization: "Basic " + base64.encode(uname + ":" + pword),}
                 })
             	.then(res => res.json())
             	.then(json => json)
             	.then(vehicle => this.setState({ 'vehicle': vehicle })).catch(error => {console.error()});
             }

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="./">
                  <img src={logo} alt="logo" width="40" /> All Vehicles
                </a>
              </nav>
        <Table vehicle={ this.state.vehicle }/>
      </div>
    );
  }
}

export default App;
