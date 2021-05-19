
// import React, { useState} from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
      persons: [
        { name: 'Samon', age: 25 },
        { name: 'Emon', age: 22 }
      ],
      showPersons: false
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

  toogleHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
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
    const style = {
      backgroundColor: "hotpink",
      border: "1px solid #ccc",
      color: "white",
      padding: "10px 20px",
      borderRadius: "8px"
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }

    return (
        <div className="App">
          <h1>Hello World</h1>
          <button style={style} onClick={this.toogleHandler}>show</button>
          {persons}
        </div>
      );
  }    
}

export default App;
