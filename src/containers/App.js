import React, { Component } from 'react';
import classStyle from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cookpit from '../components/Cookpit/Cookpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  state = {
      persons: [
        { id:'aswe', name: 'Samon', age: 25 },
        { id:'dfev', name: 'Emon', age: 22 }
      ],
      showPersons: false,
      showCookpit: true
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

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons
              persons = {this.state.persons}
              clicked={this.deleteHandler} 
              changed={this.nameChangerHandler} />
        </div>
      );
    }

    return (
        <WithClass classes={classStyle.App}>
          <button onClick={() => { this.setState({ showCookpit: false }) }}>Remove Cookpit</button>
           { this.state.showCookpit ? 
              (
                <Cookpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons} 
                persons={this.state.persons} 
                clicked={this.toogleHandler}/>
              ) : null }
           {persons} 
        </WithClass>
      );
  }    
}

export default App;
