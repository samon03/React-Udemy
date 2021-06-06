import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${(props) => props.alt ? 'red' : 'green'};
  border: 1px solid #ccc;
  color: white;
  padding: 10px 20px;
  borderRadius: 8px;

  &:hover {
      background-color: ${(props) => props.alt ? 'salmon' : 'lightgreen'};
      color: black;
  }
`;

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

  nameChangerHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
 
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

  }

  render () {
    // const style = {
    //   backgroundColor: "green",
    //   border: "1px solid #ccc",
    //   color: "white",
    //   padding: "10px 20px",
    //   borderRadius: "8px",
    //   ':hover': {
    //       backgroundColor: 'lightgreen',
    //       color: 'black'
    //   }
    // }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
              click={() => {this.deleteHandler(index)}} 
              name={person.name} age={person.age} key={person.id} 
              changed={(event) => this.nameChangerHandler(event, person.id)} />
          })}
        </div>
      );
    }

    // let classes = ['red', 'bold'].join(' ');
    // red bold

    const classes = [];
    if(this.state.persons.length <= 2) {
        classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hello World</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <StyledButton alt={this.state.showPersons} onClick={this.toogleHandler}>show</StyledButton>
          {persons}
        </div>
      );
  }    
}

export default App;
