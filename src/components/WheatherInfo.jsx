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
                <div className="w-full h-full text-xl">
                    <p>
                        Location: {AppContext.value.city}, {AppContext.value.country}
                    </p>
                    <p>
                        Temperature: {AppContext.value.temperature}C
                    </p>
                    <p>
                        Description: {AppContext.value.description}
                    </p>
                    <div className="w-full flex justify-between">
                        <p>Humidity</p>
                        <p>{AppContext.value.humidity}</p>
                    </div>
                    <p>
                        Wind Speed: {AppContext.value.wind_speed}
                    </p>
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