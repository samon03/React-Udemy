import React from 'react'

function Person(props) {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Person
