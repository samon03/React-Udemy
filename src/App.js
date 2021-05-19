
// import React, { useState} from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
      persons: [
        { id:'aswe', name: 'Samon', age: 25 },
        { id:'dfev', name: 'Emon', age: 22 }
      ],
      showPersons: false
  }

  toogleHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  deleteHandler = (personIndex) => {
      // const persons = this.state.persons;
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  nameChangerHandler = (event) => {
    this.setState( 
      {
        persons: [
          { id:'aswe', name: 'Samon', age: 25 },
          { id:'dfev', name: event.target.value, age: 22 }
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
          { this.state.persons.map((person, index) => {
            return <Person 
              click={() => {this.deleteHandler(index)}} 
              name={person.name} age={person.age} key={person.id} />
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
