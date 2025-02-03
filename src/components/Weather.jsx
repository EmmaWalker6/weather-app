import React from 'react'
import './Weather.css'
import searchIcon from '../assets/searchIcon.png'

const Weather = () => {
  return (
    <div>
        <div className='weather'>
            <div className='searchBar'>
                <input type ="text" placeholder='Search'></input>
                <img id='searchButton' src={searchIcon} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Weather