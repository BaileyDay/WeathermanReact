import React from 'react';
import "./input.css"



const InputLocation = (props) => {
    return (
        <div className="InputContainer">
            <div className="input-group mb-3" id="InputGroup">
                <input type="text" className="form-control" placeholder="Enter your location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit" id="button-addon2" onClick={props.click}>Get Weather</button>
                </div>
            </div>
        </div>
    )
}

export default InputLocation;