import React, { useState } from 'react';
import './countrydata.css';
import CapitalWeather from '../capitalWeather/capitalWeather';

const Countrydata = props => {

    const { info, input, visible } = props;
    const [weather, setWeather] = useState([]);
    const [visibleWeather , setVisibleWeather] = useState(false);

    function FetchCountryWeather(data) {
        if(input) {
        const apiUrl = `http://api.weatherstack.com/current?access_key=9d13e28899b480742c2d2054618dba1f&query=${data}`

        fetch(apiUrl)
                .then((res) => res.json())
                .then((res) => {
                    setWeather(res.current);
                    setVisibleWeather(true)
                })
                .catch((err) => console.error(err))
        }
    }
    return (
      <div>
        <table id="country">
        {visible && (<tr>
            <td>Capital</td>
            <td>Population</td>
            <td>Latlng</td>
            <td>Flag</td>
            <td></td>
        </tr>)}
        
         {info && info.map((data) => {
             return (
                <>
                <tr>
                    <td>{data.capital}</td>
                    <td>{data.population}</td>
                    <td>{data.latlng}</td>
                    <td>
                        <img 
                            src={data.flag} 
                            className="flag-img"
                        />
                    </td>
                    <td>
                        <button
                            onClick={e => {
                                e.preventDefault();
                                FetchCountryWeather(data.capital);}}
                        >Capital Weather</button>
                    </td>
                </tr>
                </>
             )
         })}
        </table>

        <CapitalWeather weather={weather} input={input} visibleWeather={visibleWeather} />
      </div>
    );
  };

  
  export default Countrydata;

