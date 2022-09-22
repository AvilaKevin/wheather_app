import React from "react";
import { useAppcontext } from "../Context/AppContext";

function WeatherInfo() {
    const AppContext = useAppcontext();
    return (
        <div className="w-full h-full">
            {
                AppContext.value.error &&
                <div>
                    <p>{AppContext.value.error}</p>
                </div>
            }
            {AppContext.value.temperature ?
                <div className="w-full h-full text-lg sm:text-xl">

                    <h1 className="my-4 sm:mt-8">Weather Details</h1>

                    <div className="hidden sm:w-full sm:flex sm:justify-between sm:my-8">
                        <p className="text-gray-500 font-medium">Location</p>
                        <p>{AppContext.value.city}, {AppContext.value.country}</p>
                    </div>

                    <div className="w-full flex justify-between mb-2 sm:mb-8">
                        <p className="text-gray-500 font-medium">Cloudy</p>
                        <p>{AppContext.value.cloudy}</p>
                    </div>

                    <div className="w-full flex justify-between mb-2 sm:mb-8">
                        <p className="text-gray-500 font-medium">Description</p>
                        <p>{AppContext.value.description}</p>
                    </div>

                    <div className="w-full flex justify-between mb-2 sm:mb-8">
                        <p className="text-gray-500 font-medium">Humidity</p>
                        <p>{AppContext.value.humidity}</p>
                    </div>

                    <div className="w-full flex justify-between">
                        <p className="text-gray-500 font-medium">Wind Speed</p>
                        <p>{AppContext.value.wind_speed}</p>
                    </div>

                </div>
                :
                <div >
                    <p>No request yet</p>
                </div>
            }
        </div>
    )
};

export { WeatherInfo };