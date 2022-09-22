import React, { createContext, useContext, useState } from 'react';
import { WHEATHER_KEY } from '../keys';
import Main from '../Icons/Main.jpg';
import Clouds from '../Icons/Clouds.jpg'
import Thunderstorm from '../Icons/Thunderstorm.jpg'
import Rain from '../Icons/Rain.jpg'
import Snow from '../Icons/Snow.jpg'
import Clear from '../Icons/Clear.jpg'

const AppContext = createContext();

export default function Store({ children }) {
    //STATES:
    // Store the wheather info:
    let [value, setValue] = useState({});
    // Store the Background:
    const [appBackground, setAppBackground] = useState(Main);
    // Store the Icon:
    const [weatherIcon, setWeatherIcon] = useState()


    //API CONSUMER:
    const getWeather = async (e) => {

        // Capture the form info:
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        // Validate the form info:
        if (cityValue && countryValue) {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WHEATHER_KEY}&units=metric`;

            const response = await fetch(API_URL);

            const data = await response.json();


            setValue({
                temperature: Math.trunc(data.main.temp) + "°",
                description: data.weather[0].description,
                humidity: data.main.humidity + "%",
                wind_speed: Math.trunc(data.wind.speed) + "km/h",
                city: data.name,
                country: data.sys.country,
                cloudy: data.clouds.all + "%",
                error: null
            });


            // Dinamic Icon:
            const icon = data.weather[0].icon;
            const urlIcon = `https://openweathermap.org/img/wn/${icon}@2x.png`
            setWeatherIcon(urlIcon);


            // Dinamic Weather:
            const main = data.weather[0].main;
            switch (main) {
                case 'Thunderstorm':
                    setAppBackground(Thunderstorm);
                    break;
                case 'Drizzle':
                    setAppBackground(Rain);
                    break;
                case 'Rain':
                    setAppBackground(Rain);
                    break;
                case 'Snow':
                    setAppBackground(Snow);
                    break;
                case 'Clear':
                    setAppBackground(Clear);
                    break;
                case 'Clouds':
                    setAppBackground(Clouds);
                    break;
            }

        } else {
            setValue({ error: 'Please enter a city and a country' })
        };

    };


    return (
        <AppContext.Provider
            value={{
                value,
                getWeather,
                appBackground,
                setAppBackground,
                weatherIcon
            }}
        >
            {children}
        </AppContext.Provider>
    );

};


export function useAppcontext() {
    return useContext(AppContext)
};