import React from 'react';
import './Form.css'

const Form = (props) => {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form data-testid="forecast-form" onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input data-testid="city-input" type="text" 
                            className="form-control" 
                            name="city" 
                            autoComplete="off"
                            placeholder="City"
                         />
                    </div>
                    <div className="col-md-3 mt-md-0 py-2 text-md-left">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please enter a valid city
        </div>
    );
}

export default Form;