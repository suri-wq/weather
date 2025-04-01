import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './components/WeatherButton';


function App() {
  const[weather,setWeather]=useState(null)

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      console.log(lat,lon)
      getWeatherCurrentLocation(lat,lon)
    });
  }

  const getWeatherCurrentLocation=async(lat,lon)=>{
    const API_KEY = '2008e5ebf8fec007efbb5c093c5827bd'
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    let currentWeather = data.current
    console.log("ddd",data)
    console.log("current",currentWeather)
    setWeather(data)
  }

  

  
  useEffect(()=>{
    getCurrentLocation()
  })
  
  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton/>
      </div>
      
    </div>
  );
}

export default App;
