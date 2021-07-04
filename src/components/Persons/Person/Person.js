import React, { Component, Fragment } from 'react';
import classStyle from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
   render() {
        return (
            <Aux>
                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>  
        );
   }
    
}

Person.propTypes = {
   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   change: PropTypes.func
};

export default withClass(Person, classStyle.Person);
