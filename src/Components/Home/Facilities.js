import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'

import './Facilities.css'

const Facilities = () => {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)


  /*
      navigator.geolocation.getCurrentPosition((pos) => {
  
        setLatitude(pos.coords.latitude)
        setLongitude(pos.coords.longitude)*/

  const [navClasses, setnavClasses] = useState('nav')
  const [isOpen, setisOpen] = useState('false')

  const clickHandler = () => {
    setisOpen(!isOpen)
    if (isOpen) {
      setnavClasses('nav nav-toggle')
    }
    else
      setnavClasses('nav')
  }

  const url = `https://www.google.com/maps/embed/v1/search?center=${latitude},${longitude}&q=hospital+dispensary+clinic&zoom=12&key=AIzaSyB933ANy5iPjo3MpN9zNYztWeVcqy2KIY8`

  return <>
    <header className="header">

      <Link to='/' className="logo">HealthCare</Link>

      <form action="" className="search-form">
        <input type="search" placeholder="Search For Nearby Healthcare Facilities..." id="search-box" />
        <button className='btn'><FaSearch></FaSearch></button>
      </form>

    </header>

    <div className='container facilities-container'>
      <section class="packages" id="packages">
      <h6 class="heading">Nearby HeathCare Facilities  </h6>
        <div class="box-container">
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-1.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> mumbai </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-2.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> hawaii </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-3.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> sydney </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-4.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> paris </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-5.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> tokyo </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>

          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>
          <div class="box" data-aos="fade-up">
            <div class="image">
              <img src="images/p-6.jpg" alt="" />
              <h3> <i class="fas fa-map-marker-alt"></i> egypt </h3>
            </div>
            <div class="content">
              <div class="price"> 290.99 <span>350.99</span> </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
              <a href="#" class="btn"> book now</a>
            </div>
          </div>

        </div>

      </section>
      <div id='list'></div>
      <div id='map'>
        <iframe width="600" height="450" loading="lazy" src={url}></iframe></div>
    </div>

  </>;
};

export default Facilities;
