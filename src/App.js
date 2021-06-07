import React, { Component } from 'react';
import classStyle from './App.module.css';
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

    let persons = null;
    let btnClass = [classStyle.button];

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

      btnClass.push(classStyle.red);
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
        classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className={classStyle.App}>
          <h1>Hello World</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button className={btnClass.join(' ')} onClick={this.toogleHandler}>Display</button>
          {persons}
        </div>
      );
  }    
}

export default App;
