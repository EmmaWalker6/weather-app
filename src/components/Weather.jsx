import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import searchIcon from '../assets/searchIcon.png';
import cloudyImage from '../assets/cloudy.png';
import drizzleImage from '../assets/drizzle.png';
import partlyCloudyImage from '../assets/partlyCloudy.png';
import snowingImage from '../assets/snowing.png';
import sunnyImage from '../assets/sunny.png';
import {FaSearch} from 'react-icons/fa';

// Images from cleanpng


const Weather = () => {

  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);
  const [isMetric, setIsMetric] = useState(true);

  const allIcons = {
    // Icon ids and what image we attach to them. The codes go for day and night and the description is commented on the side of each day
    "01d": sunnyImage, //clear sky
    "01n": sunnyImage,
    "02d": partlyCloudyImage, //few clouds
    "02n": partlyCloudyImage,
    "03d": partlyCloudyImage, //scattered clouds
    "03n": partlyCloudyImage,
    "04d": cloudyImage, //broken clouds
    "04n": cloudyImage,
    "09d": drizzleImage, //rain shower
    "09n": drizzleImage,
    "010d": drizzleImage, //rain
    "010n": drizzleImage,
    "011d": drizzleImage, //thunder storm (maybe find another image)
    "011n": drizzleImage,
    "013d": snowingImage, //snow
    "013n": snowingImage,
    "50d": cloudyImage, //mist
    "50n": cloudyImage
  }

  const switchDegreeType = () => {
    // Using the functional update to ensure the latest state value
    setIsMetric(prevIsMetric => !prevIsMetric);
    
  };

  useEffect(() =>{
    if (inputRef.current.value !== '') {
      search(inputRef.current.value);
    }
  },[isMetric]);

  const getUnitType = () => (isMetric ? "metric" : "imperial");

  const search = async (city) => {
    try {
      if(city === ""){
        alert("Enter City Name");
        return;
      }
      const apiKey = process.env.REACT_APP_ID;
      console.log("In search Metric is:", isMetric);

      const unitType = getUnitType();
      console.log("Unit wanted is:", unitType);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unitType}&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);

      const icon = allIcons[data.weather[0].icon] || sunnyImage;
      setWeatherData({
          humidity: data.main.humidity,
          //possibly add wind speed
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: icon
      })

    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(false);
    }
  }


  return (
    <div className='site'>
        <div className='weather'>
            <div className='searchBar'>
                <p className='searchButton' onClick={switchDegreeType}>{isMetric ? 'C': 'F'}</p>
                <input ref={inputRef} type ="text" placeholder='Search'></input>
                <FaSearch className='searchButton' onClick={()=>search(inputRef.current.value)} />
                
            </div>
            {/* Checking if we actually have weather data to display */}
            {weatherData?<>
              <div className='weatherContent'>
                <img src={weatherData.icon} alt="" className='weatherIcon'/>
                <p className='temperature'>{weatherData.temperature} °{isMetric ? 'C': 'F'}</p>
                <p className='location'>{weatherData.location}</p>
                <p className='humidity'>Humidity: {weatherData.humidity}%</p>
            </div>
            </>:<></>}
            {/* Otherwise we have no data */}
            
        </div>
    </div>
  )
}

export default Weather