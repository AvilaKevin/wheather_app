import React from 'react'
import { useAppcontext } from '../Context/AppContext';

// Render:
// - Main Weather Info
// Props:
// - AppContext(value)
// - AppContext(weatherIcon)

function WeatherMain() {

    // Context Called:
    const {
        value,
        weatherIcon
    } = useAppcontext();

    // Value Destructuring:
    const {
        temperature,
        city,
    } = value;

    // Date value:
    const d = new Date();
    const date = d.toDateString();

    return (
        // Grid:
        <div className="h-full w-full sm:p-8 grid justify-center items-center sm:grid-cols-3 sm:grid-rows-3 sm:gap-2 sm:w-[60%]">

            {/* Main Info Cotainer: */}
            <section className="text-white box row-start-3 col-start-1 col-end-4 flex justify-center items-end">

                <h1 className='text-2xl sm:text-9xl font-bold mr-4'>{temperature}</h1>

                <div>
                    <p className='font-normal text-6xl'>{city}</p>
                    <p className='text-3xl'>{date}</p>
                </div>

                <figure className='ml-8'>
                    <img src={weatherIcon} />
                </figure>

            </section>

        </div>

    )
}

export { WeatherMain }