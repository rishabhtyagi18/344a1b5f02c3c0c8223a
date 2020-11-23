import React, { useState } from 'react';
import './capitalWeather.css'

const CapitalWeather = props => {

    const { weather, input, visibleWeather } = props;

    return (
      <div>
          {visibleWeather && 
          (
          <>
            <h1>Capital Weather</h1>
            
            <div className="grid">
                <div>{weather.temperature}</div>
                <img src={weather.weather_icons} />
                <div>{weather.wind_speed}</div>
                <div>{weather.precip}</div>
            </div>
        </>
        )}
        
      </div>
    );
  };
 
  export default CapitalWeather;
  