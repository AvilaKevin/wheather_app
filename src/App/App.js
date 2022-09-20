import React from 'react';
import { WeatherInfo } from '../components/WheatherInfo';
import { WeatherForm } from '../components/WeatherForm';
import { WeatherMain } from '../components/WeatherMain';
import { DinamicBackground } from '../components/DinamicBackground';
import Store from '../Context/AppContext';


function App() {

  return (

    <Store>

      <DinamicBackground>
        <WeatherMain />

        <div>

          <WeatherForm />
          <WeatherInfo />

        </div>

      </DinamicBackground>

    </Store>

  );

}

export default App;
