import React, { useRef, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './Facilities.css'
import FacilitiesBox from './FacilitiesBox';

const Facilities = () => {
  const [latitude, setLatitude] = useState(22.5726)
  const [longitude, setLongitude] = useState(88.3639)
  const location = useRef()

  const getPlacesData = async (location) => {
    try {
      const data = await axios.get(`https://forward-reverse-geocoding.p.rapidapi.com/v1/search`, {
        params: {
          q: location||'kolkata', 'accept-language': 'en','countrycodes':'in'
        },
        headers: {
          'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com',
          'x-rapidapi-key': '7449b52200msh1221ff45cc1eb7ap10d0c2jsn7f19c18f3385'
        }
      });
      setLongitude(data?.data[0]?.lon||22.5726)
      setLatitude(data?.data[0]?.lat||88.3639)

    } catch (error) {
      console.log(error);
    }
  }

  const changeHandler = async () => {
    setTimeout(()=>{getPlacesData(location.current.value)},1200)
  }

  const url = `https://www.google.com/maps/embed/v1/search?center=${latitude},${longitude}&q=hospital&zoom=14&key=AIzaSyB933ANy5iPjo3MpN9zNYztWeVcqy2KIY8`

  return <>
    <header className="header">

      <Link to='/' className="logo">HealthCare</Link>

      <form className="search-form">
        <input type="search" onChange={changeHandler} ref={location} placeholder="Search For Nearby Healthcare Facilities..." id="search-box" />
      </form>

    </header>

    <div className='container facilities-container'>
      <div id='map'>
        <iframe loading="lazy" src={url}></iframe>
      </div>
      <section className="packages" id="packages">
        <h1 className="text-centered">Nearby HeathCare Facilities  </h1>
        <div className="box-container">
          <FacilitiesBox />
          <FacilitiesBox />
          <FacilitiesBox />
          <FacilitiesBox />
        </div>
      </section>
    </div>

  </>;
};

export default Facilities;
