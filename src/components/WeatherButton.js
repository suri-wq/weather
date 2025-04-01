import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = () => {
  return (
    <div className='button-area'>
      <Button variant="warning">서울</Button>
      <Button variant="warning">파리</Button>
      <Button variant="warning">런던</Button>
    </div>
  )
}

export default WeatherButton