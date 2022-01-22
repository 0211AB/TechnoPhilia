import React, { useEffect, useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import './Facilities.css'
import FacilitiesBox from './FacilitiesBox';

const Facilities = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [input, setInput] = useState(null)

  const onButtonClick = () => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(inputRef.current.value)}&key=AIzaSyDOUyJnlIwclbsyXghNp0x2Cz2ro221jvg`)

  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {

      setLatitude(pos.coords.latitude)
      setLongitude(pos.coords.longitude)
    })

  }, [])

  const inputRef = useRef(null);

  const url = `https://www.google.com/maps/embed/v1/search?center=${latitude},${longitude}&q=hospital+dispensary+clinic&zoom=14&key=AIzaSyB933ANy5iPjo3MpN9zNYztWeVcqy2KIY8`

  return <>
    <header className="header">

      <Link to='/' className="logo">{input}HealthCare</Link>

      <form action="" className="search-form">
        <input type="search" ref={inputRef} placeholder="Search For Nearby Healthcare Facilities..." id="search-box" />
        <button className='btn' onClick={onButtonClick}><FaSearch></FaSearch></button>
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
