import React from "react";
import { useAppcontext } from "../Context/AppContext";

function WeatherInfo() {
    const AppContext = useAppcontext();
    // console.log(AppContext.value)
    // console.log("prueba: " + AppContext.value.error)
    return (
        <div>
            {
                AppContext.value.error &&
                <div>
                    <p>{AppContext.value.error}</p>
                </div>
            }
            {AppContext.value.temperature ?
                <div >
                    <p>
                        Location: {AppContext.value.city}, {AppContext.value.country}
                    </p>
                    <p>
                        Temperature: {AppContext.value.temperature}°C, {AppContext.value.description}
                    </p>
                    <p>
                        Humidity: {AppContext.value.humidity}
                    </p>
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