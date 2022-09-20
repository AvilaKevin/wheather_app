import React from 'react'
import { useAppcontext } from '../Context/AppContext';

function WeatherMain() {

    //Context Called:
    const {
        value,
        weatherIcon
    } = useAppcontext();

    const {
        temperature,
        city,
    } = value;


    const d = new Date();
    const date = d.toDateString();


    return (

        <div>
            <h1>{temperature}°C, {city}</h1>
            <p>{date}</p>
            <figure>
                <img src={weatherIcon} />
            </figure>
        </div>

    )
}

export { WeatherMain }