import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyleDiv = styled.div`
    width: 40%;
    margin: 16px auto;
    text-align: center;
    padding: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;

    @media (min-width: 500px) {
        width: 450px;
    }
`; 

const Person = (props) => {

    return (
        <StyleDiv>
            <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyleDiv>
    )
}

export default Person;
