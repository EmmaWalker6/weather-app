import React from 'react'
import './Weather.css'

const Weather = () => {
  return (
    <div>
        <div className='weather'>
            <div className='searchBar'>
                <input type ="text" placeholder='Search'></input>
                <button>Search</button>
                {/* <img src="" alt/> */}
            </div>
        </div>
    </div>
  )
}

export default Weather