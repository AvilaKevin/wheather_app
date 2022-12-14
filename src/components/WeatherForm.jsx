import React from "react";
import { useAppcontext } from "../Context/AppContext";

// Render:
// - Form
// Props:
// - AppContext(getWeather)

function WeatherForm() {

    // Context Called
    const AppContext = useAppcontext();

    return (

        <div className="w-full">

            <form onSubmit={AppContext.getWeather} className="flex flex-col items-center border-b-2 border-b-gray-500">

                {/* City Input */}
                <div className="relative z-0 mb-3 sm:mb-12 w-4/6">
                    <input
                        type="text" name="city" autoFocus
                        placeholder=" "
                        className="block py-2.5 px-0 w-full text-lg sm:text-xl bg-transparent border-b-2 border-b-gray-500 focus:outline-none focus:border-b-gray-400 peer"
                    />
                    <label className="peer-focus:font-medium absolute text-lg sm:text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your city name</label>
                </div>

                {/* Country Input */}
                <div className="relative z-0 w-4/6">
                    <input
                        type="text" name="country"
                        placeholder=" "
                        className="block py-2.5 px-0 w-full text-lg sm:text-xl bg-transparent border-0 border-b-2 border-b-gray-500 focus:outline-none focus:border-b-gray-400 peer"
                    />
                    <label className="peer-focus:font-medium absolute text-lg sm:text-xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your country name</label>
                </div>

                {/* Form Button */}
                <button className=" w-1/2 md:w-auto lg:w-1/2 py-1 sm:py-2 px-4 my-6 sm:my-14 bg-transparent text-white text-lg sm:text-xl sm:font-semibold border border-b-gray-400 hover:bg-opacity-70 hover:bg-gray-200 hover:border-transparent duration-300">
                    Get Weather
                </button>

            </form>

        </div>

    )
};

export { WeatherForm };