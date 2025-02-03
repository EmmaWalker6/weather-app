import React from 'react'
import './Weather.css'
import searchIcon from '../assets/searchIcon.png'
import cloudyImage from '../assets/cloudy.png'
import drizzleImage from '../assets/drizzle.png'
import partlyCloudyImage from '../assets/partlyCloudy.png'
import snowingImage from '../assets/snowing.png'
import sunnyImage from '../assets/sunny.png'

// Images from cleanpng


const Weather = () => {
  return (
    <div>
        <div className='weather'>
            <div className='searchBar'>
                <input type ="text" placeholder='Search'></input>
                <img id='searchButton' src={searchIcon} alt=''/>
            </div>
            <div className='weatherContent'>
                <img src={sunnyImage} alt="" className='weatherIcon'/>
                <p className='temperature'>16-c</p>
                <p className='location'>London</p>
            </div>
        </div>
        {/* possibly add in huminity and wind speed */}
    </div>
  )
}

export default Weather