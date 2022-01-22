import React from 'react';
import src from '../../images/logo.png'

const FacilitiesBox = (props) => {
    return <div className="box" data-aos="fade-up">
        <div className="image">
            <img src={src} alt="" />
            <h3> <i className="fas fa-map-marker-alt"></i> mumbai </h3>
        </div>
        <div className="content">
            <div className="price"> 290.99 <span>350.99</span> </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
        </div>
    </div>;
};

export default FacilitiesBox;
