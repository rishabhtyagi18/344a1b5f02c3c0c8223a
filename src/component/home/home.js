import React, { useState } from 'react';
import './home.css';
import Countrydata from '../countrydata/countrydata';

const Home = props => {

    const [input, setInput] = useState('');
    const [countryInfo, setCountryInfo] = useState([]);
    const [visible , setVisible] = useState(false);

    function SubmitInput() {
        if(input) {
            const apiurl= `https://restcountries.eu/rest/v2/name/${input}`;

            fetch(apiurl)
                .then((res) => res.json())
                .then((res) => {
                    setCountryInfo(res);
                    setVisible(true);
                })
                .catch((err) => console.error(err))
        }
        else {
            alert("Please enter Country name")
        }
    }


    return (
    <>
      <div className="container">
          <form>
              <input 
                className="align"
                placeholder="Enter Country" 
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={e => {
                e.preventDefault();
                SubmitInput();}}>
                Submit
              </button>
          </form> 
      </div>

      {input && <Countrydata info={countryInfo} input={input} visible={visible} />}
    </>
    );
  };
  
  export default Home;