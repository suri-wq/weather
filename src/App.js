import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './components/WeatherButton';


function App() {
  const[weather,setWeather]=useState(null)
  const[city,setCity]=useState(null)
  const cities =['paris','new york','tokyo','seoul']

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
    console.log("ddd",data)
    setWeather(data)
  }

  const getWeatherByCityName=async()=>{
    const API_KEY = '2008e5ebf8fec007efbb5c093c5827bd'
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
  }
  


  
  useEffect(()=>{
    if(city=='' || city==null){
      getCurrentLocation()
    } else {
      getWeatherByCityName()
    }
  },[city])

  const handledCityChange=(city)=>{
    if (city === "current"){
      setCity(null);
      // getCurrentLocation();
    }else{
      setCity(city)
    }
  }
  
  
  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton 
        selectedCity={city}
        cities={cities} 
        handledCityChange={handledCityChange}
        />
      </div>
      
    </div>
  );
}

export default App;
