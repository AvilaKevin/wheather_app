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

        <aside className='w-full bg-opacity-70 bg-[#0d242e] backdrop-blur-md text-white flex flex-col items-center p-5 lg:p-12 sm:w-[40%]'>

          <WeatherForm />
          <WeatherInfo />

        </aside>

      </DinamicBackground>

    </Store>

  );

}

export default App;
