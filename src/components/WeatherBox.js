import React from 'react'

const WeatherBox = ({ weather }) => {
    console.log("weather?",weather)
    
  return (
    <div className='weather-box'>
        <div className='city-name'>{weather?.name}</div>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt='weather image'/>
        <div>{weather?.weather[0].description}</div>

        <div>{weather?.main.temp}°C, feels like: {weather?.main.feels_like}°C</div>
        <div className='faren'>({Math.floor(weather?.main.temp * 9/5 +32)}°F)</div>

    </div>
  )
}

export default WeatherBox