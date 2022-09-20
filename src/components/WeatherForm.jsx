import React from "react";
import { useAppcontext } from "../Context/AppContext";

function WeatherForm() {
    const AppContext = useAppcontext();


    return (

        <div>
            <form onSubmit={AppContext.getWeather}>
                <div>
                    <input type="text" name="city" placeholder="Your city name" autoFocus />
                </div>
                <div>
                    <input type="text" name="country" placeholder="Your country name" autoFocus />
                </div>
                <button>
                    Get Weather
                </button>
            </form>
        </div>

    )
};

export { WeatherForm };