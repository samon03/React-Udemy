import React, { Component } from 'react';
import classStyle from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
   render() {
        return (
            <Auxiliary>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxiliary>  
        );
   }
    
}

export default Person;
