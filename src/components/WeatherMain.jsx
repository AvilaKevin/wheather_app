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
        <div className="h-full w-full lg:p-8 grid justify-center items-center lg:grid-cols-3 lg:grid-rows-3 lg:gap-2 sm:w-[60%]">

            {/* Main Info Cotainer: */}
            <section className="text-white lg:box lg:row-start-3 lg:col-start-1 lg:col-end-4 lg:flex lg:justify-center lg:items-end">

                <h1 className='text-6xl md:text-9xl font-bold mr-4'>{temperature}</h1>

                <div>
                    <p className='font-normal text-2xl md:text-6xl'>{city}</p>
                    <p className='text-2xl md:text-3xl'>{date}</p>
                </div>

                <figure className='ml-8'>
                    <img src={weatherIcon} />
                </figure>

            </section>

        </div>

    )
}

export { WeatherMain }