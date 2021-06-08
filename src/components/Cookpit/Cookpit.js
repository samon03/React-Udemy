import React from 'react';
import classStyle from './Cookpit.module.css';

const cookpit = (props) => {

    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classStyle.red;
    }

    if(props.persons.length <= 2) {
        classes.push(classStyle.red);
    }
    if(props.persons.length <= 1) {
      classes.push(classStyle.bold);
    }

   return (
        <div className={classStyle.Cookpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Display</button>
        </div>
   )
}


export default cookpit;