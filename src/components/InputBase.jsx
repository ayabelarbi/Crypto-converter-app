import React from "react";

const InputBase = ({textLabel, ...props }) => (
    <>
        <input type = "Number" className="form-control" />
        <span className="input-group-text">{textLabel}</span>
 
    </>

);

export default InputBase; 