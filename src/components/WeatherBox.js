import React from 'react'

const WeatherBox = ({ weather }) => {
    console.log("weather?",weather)
    
  return (
    <div className='weather-box'>
        <div className='city-name'>{weather?.name}</div>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}/>
        <div>{weather?.weather[0].description}</div>

        <div>{weather?.main.temp}°C, feels like: {weather?.main.feels_like}</div>
        <div className='faren'>({weather?.main.temp * 9/5 +32}°F)</div>

    </div>
  )
}

export default WeatherBox