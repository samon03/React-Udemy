import React from 'react';
import classStyle from './Person.module.css';

const Person = (props) => {

    return [
        <p key="i1" onClick={props.click}>I am {props.name} and I am {props.age}</p>,
        <p key="i2">{props.children}</p>,
        <input key="i3" type="text" onChange={props.changed} value={props.name} />
    ];
}

export default Person;
