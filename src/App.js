
import { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: 'Samon', age: 25 },
      { name: 'Emon', age: 22 }
    ]
  }

  switchHandler = () => {
     console.log("Clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.switchHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello world</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    );
  }
}

export default App;
