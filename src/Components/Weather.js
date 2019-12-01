import React from 'react';

const Weather = props => {
    return (
        <div className="weather__info">
        {
        props.city && props.country && 
        <h1 className="weather__value">{props.city}, {props.country}</h1>
        }
        {
        props.temperature && props.description && 
        <h1 className="weather__key">Currently: <span className="weather__value">{props.temperature}°F | {props.description}</span></h1>
        }
        {
        props.temp_max && <h1 className="weather__key">Today's high: <span className="weather__value">{props.temp_max}°F</span></h1>
        }
        {
        props.temp_min && <h1 className="weather__key">Today's low: <span className="weather__value">{props.temp_min}°F</span></h1>
        }
        {
        props.error && <p className="weather__value">{props.error}</p>
        }
        </div>
    )
}

export default Weather;