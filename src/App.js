import React, { Component } from 'react';
import { render } from 'react-dom';
import Leaderboard from './Leaderboard';

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    users: [
      {name: "Karl", score: Math.ceil((31 + ((new Date() - new Date("01/29/2023")) / (1000 * 3600 * 24)))), dateGuess: "Jan 29th", sexGuess: 'Girl'},
      {name: "Jess", score: Math.ceil((31 + ((new Date() - new Date("02/05/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 5th", sexGuess: 'Girl'},
      {name: "Anne", score: Math.ceil((31 + ((new Date() - new Date("02/03/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 3rd", sexGuess: 'Girl'},
      {name: "Carole", score: Math.ceil((31 + ((new Date() - new Date("02/07/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 7th", sexGuess: 'Boy'},
      {name: "Wan", score: Math.ceil((31 + ((new Date() - new Date("02/06/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 6th", sexGuess: 'Girl'},
      {name: "Dan S", score: Math.ceil((31 + ((new Date() - new Date("02/18/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 18th", sexGuess: 'Boy'},
      {name: "Petra", score: Math.ceil((31 + ((new Date() - new Date("02/20/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 20th", sexGuess: 'Boy'},
      {name: "Paula", score: Math.ceil((31 + ((new Date() - new Date("02/18/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 18th", sexGuess: 'Girl'},
      {name: "Clio", score: Math.ceil((31 + ((new Date() - new Date("02/20/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 20th", sexGuess: 'Girl'},
      {name: "Paul", score: Math.ceil((31 + ((new Date() - new Date("02/17/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 17th", sexGuess: 'Girl'},
      {name: "Nev", score: Math.ceil((31 + ((new Date() - new Date("02/13/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 13th", sexGuess: 'Boy'},
      {name: "Dode", score: Math.ceil((31 + ((new Date() - new Date("02/12/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 12th", sexGuess: 'Boy'},
      {name: "Rio", score: Math.ceil((31 + ((new Date() - new Date("02/06/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 6th", sexGuess: 'Boy'},
      {name: "Dan E", score: Math.ceil((31 + ((new Date() - new Date("02/12/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 12th", sexGuess: 'Girl'},
      {name: "Rick", score: Math.ceil((31 + ((new Date() - new Date("02/10/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 10th", sexGuess: 'Girl'},
      {name: "Claire", score: Math.ceil((31 + ((new Date() - new Date("02/14/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 14th", sexGuess: 'Girl'},
      {name: "Michelle", score: Math.ceil((31 + ((new Date() - new Date("02/22/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 22nd", sexGuess: 'Girl'},
      {name: "JJ", score: Math.ceil((31 + ((new Date() - new Date("02/17/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 17th", sexGuess: 'Girl'},
      {name: "Simon", score: Math.ceil((31 + ((new Date() - new Date("02/19/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 19th", sexGuess: 'Boy'},
      {name: "Ella", score: Math.ceil((31 + ((new Date() - new Date("02/19/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb19th", sexGuess: 'Girl'},
      {name: "Russ", score: Math.ceil((31 + ((new Date() - new Date("02/11/2023")) / (1000 * 3600 * 24)))), dateGuess: "Feb 11th", sexGuess: 'Boy'},
      {name: "Sam", score: Math.ceil((31 + ((new Date() - new Date("02/21/2023")) / (1000 * 3600 * 24)) )), dateGuess: "Feb 21st", sexGuess: 'Boy'},
      {name: "Nina", score: Math.ceil((31 + ((new Date() - new Date("02/28/2023")) / (1000 * 3600 * 24)) )), dateGuess: "Feb 28th", sexGuess: 'Boy'},
],
    paginate: 23
  };
}
  render() {
    return (
      <div className="App" style={{overflow:"scroll"}}>
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
      </div>
    );
  }
}

export default App;
