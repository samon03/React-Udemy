
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

    return (
        <div className="App">
          <h1>Hello World</h1>
          <button style={style} onClick={this.toogleHandler}>show</button>
         {
           this.state.showPersons === true ?
           <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}>Hello world</Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed={this.nameChangerHandler}
                click={this.switchHandler.bind(this, 'Sam')} />
           </div> : null
         }
        </div>
      );
  }    
}

export default App;
