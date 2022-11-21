import axios from 'axios';
import React, {  useState } from 'react';
import "./weather.css"
import logo from "./weather02-512.webp";

function Weather() {

  const [inputcity, setinputcity] = useState("indore");
  const [data, setdata] = useState({});

  const getweatherdetail = (cityName) => {

    if (!cityName) return
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=4e0fec895494b9c633da317c7212c37c"
    axios.get(apiurl)
      .then(res => {
        setdata(res.data);

      }).catch((err) => {
      })
  }

  const handleDeatails = (e) => {
    setinputcity(e.target.value)
  }

  const handelsearch = () => {
    getweatherdetail(inputcity)
  }

  return (
    <div>
      <div className='col-md-12'>
        <div className='weather-bp'>
          <h2 className='heading'>Weather App</h2>
           <div className='d-grid  gap-3 col-4 pt-4'>
            <input type="text" value={inputcity} className='form-control' onChange={handleDeatails}></input>
            <button onClick={handelsearch} type="button" class="btn btn-warning">search</button>
         </div>
        </div>
      </div>
      <div className='col-md-12 text-center weather-body mt-5'>
        <div className='shadow text-center'>
          <img className='logo' src={logo} alt=''></img>
          <h5 className='pt-4'>{data?.name}</h5>
          <h6 className='pt-2 pb-5'>{((data?.main?.temp) - 273.15).toFixed(2)} 'c</h6>
        </div>
      </div>
    </div>
  )
};

export default Weather;