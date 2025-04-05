import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const[weather,setWeather]=useState(null)
  const[city,setCity]=useState(null)
  const[loading,setLoading]=useState(false)
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
    const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY

    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    console.log("ddd",data)
    setWeather(data)
    setLoading(false)
  }

  const getWeatherByCityName=async()=>{
    const API_KEY = '2008e5ebf8fec007efbb5c093c5827bd'
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
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
      {loading?(
        <div className='container'>
          <ClipLoader
          color='#ccc'
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        </div>
      ) : (
        <div className='container'>
          <WeatherBox weather={weather}/>
          <WeatherButton 
          selectedCity={city}
          cities={cities} 
          handledCityChange={handledCityChange}
          />
       </div>
      )}
      
     
    </div>
  );
}

export default App;
