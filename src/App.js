
// import React, { useState} from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
      persons: [
        { name: 'Samon', age: 25 },
        { name: 'Emon', age: 22 }
      ]
  }

  switchHandler = (newName) => {
    this.setState( 
      {
        persons: [
          { name: newName, age: 25 },
          { name: 'Emon', age: 21 }
        ]
      }
    )
  }

  nameChangerHandler = (event) => {
    this.setState( 
      {
        persons: [
          { name: 'Samon', age: 25 },
          { name: event.target.value, age: 22 }
        ]
      }
    )
  }

  render () {
    return (
        <div className="App">
          <h1>Hello World</h1>
          <button onClick={() => this.switchHandler('Shiliya')}>Switch</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>Hello world</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangerHandler}
            click={this.switchHandler.bind(this, 'Sam')} />
        </div>
      );
  }    
}

export default App;
