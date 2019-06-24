import React from 'react';
import './ResultText.css';

const resultText = (props) => {
    return <input className="result" type="text" value={props.value} readOnly />
}

export default resultText;