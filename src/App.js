
import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {

  const [personsState, setPeronsState] = useState(
    {
      persons: [
        { name: 'Samon', age: 25 },
        { name: 'Emon', age: 22 }
      ]
    }
  );

  const switchHandler = () => {
    setPeronsState(
      {
        persons: [
          { name: 'Shiliya', age: 25 },
          { name: 'Emon', age: 21 }
        ]
      }
    )
  }

  return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={switchHandler}>Switch</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Hello world</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      </div>
    );
}

export default App;
