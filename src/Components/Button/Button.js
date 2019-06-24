import React from 'react';
import './Button.css';

const button = (props) => {
    return <button onClick={props.click} value={props.value} className="button">{props.value}</button>
}


export default button;