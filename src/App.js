
import React, { Component, useState, useEffect } from 'react';
import Table from './components/Table.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

/*
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicle: []
    }
  }

     componentDidMount() {
          var base64 = require("base-64"); // install it before use from npm i base-64
          let headers = new Headers();

               const uname = "admin";
               const pword = "admin";

               headers.set('Authorization', 'Basic' + base64.encode(uname + ":" + pword));

             	fetch('http://100.25.223.36:80/vehicle',{mode: 'no-cors'}, {method: 'GET'},
             	{
                                  headers: {
                                         Authorization: "Basic " + base64.encode(uname + ":" + pword),
                                       },

                                 },
                                      )

             	.then(res => res.json())
             	.then(json => json)
             	.then(vehicle => this.setState({ 'vehicle': vehicle })).catch(error => {console.error()});

             }

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="./">
                  <img src={logo} alt="logo" width="40" /> City List
                </a>
              </nav>
        <Table vehicle={ this.state.vehicle }/>
      </div>
    );
  }
}



export default App;

*/



/*
export default function App(){
    const [results, setResults] = useState([]);
    const controller = new AbortController();

    const URL = 'http://localhost:8080/passenger_repo'

    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const data = await response.json();
            setResults(data);
    }
    getData();

    console.log(results, "results");



    });

}

*/

export default function App(){

var base64 = require("base-64"); // install it before use from npm i base-64
   const uname = "admin";
   const pword = "admin";

   let headers = new Headers();
headers.set('Authorization', 'Basic ' + Buffer.from(uname + ":" + pword).toString('base64'));

const [cars, setCars] = useState(null);

const handleDelete = (id) => {
const newCars = cars.filter(car => car.id !==id);
setCars(newCars);
}

useEffect(() => {
fetch('http://18.234.253.32:80/vehicle',{headers : headers, mode: 'no-cors'}, )
.then(response => {
return response.json()
})
.then((data) => {
console.log(data);
setCars(data);
});

}, []);


}








/*

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
     var base64 = require("base-64"); // install it before use from npm i base-64
          let username = 'admin';
          let password = 'admin';
          let formdata = new FormData();
          let headers = new Headers();


          formdata.append('grant_type','password');
          formdata.append('username','testname');
          formdata.append('password','qawsedrf');

          headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
          fetch('http://100.25.223.36:80/vehicle', {
           method: 'GET',
           headers: headers,
           mode: 'no-cors',

          }).then((response) => response.json())
          .then((responseJson) => {
           console.log(responseJson);
           this.setState({
               data: formdata
            })
             })
              .catch((error) => {
            console.error(error);

});
             //.then(vehicle => this.setState({ 'vehicle': vehicle })).catch(error => {console.error()});

             }

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="./">
                  <img src={logo} alt="logo" width="40" /> City List
                </a>
              </nav>
        <Table vehicle={ this.state.vehicle }/>
      </div>
    );
  }
}



export default App;
*/



