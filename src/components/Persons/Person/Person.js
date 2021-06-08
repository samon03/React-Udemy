import React from 'react';
import classStyle from './Person.module.css';

const Person = (props) => {

    return (
        <div className={classStyle.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;
