import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities,selectedCity,handledCityChange}) => {
    
    console.log(selectedCity)
  return (
    <div className='button-area'>
        
        <Button 
        variant={`${selectedCity == null ? "light":"dark"}`} 
        onClick={()=>handledCityChange("current")}>
            current location
        </Button>


      {cities.map((item)=>(
        <Button 
        variant={`${selectedCity===item?"light":"dark"}`} 
        onClick={()=>handledCityChange(item)}>
            {item}
        </Button>
      ))}
      
    </div>
  )
}

export default WeatherButton