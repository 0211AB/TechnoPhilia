import React from 'react'
import './PatientMain.css'

const PatientMain = () => {
    return <div className="wrapper">
        <div className="nav">
            <div className="logo">
                <h4>HealthCare.</h4>
            </div>
            <div className="links">
                <a href="#" className="mainlink">Corona Updates</a>
                <a href="#">Help</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>

        <div className="landing">
            <div className="landingText" data-aos="fade-up" data-aos-duration="1000">
                <h1>Stay In.<span style={{ color: '#e0501b', fontSize: '4vw' }}> Stay Safe.</span> </h1>
                <h3>Lets all work together to put an end to this pandemic. <br /> Help stop the spread.</h3>
                <div className="btn">
                    <a href="#">Learn More</a>
                </div>
            </div>
            <div className="landingImage" data-aos="fade-down" data-aos-duration="2000">
                <img src="img/bg.png" alt="" />
            </div>
        </div>

        <div className="about">
            <div className="aboutText" data-aos="fade-up" data-aos-duration="1000">
                <h1>Why is it important that <br /> <span style={{ color: '#2f8be0', fontSize: '3vw' }}>You Stay Home?</span> </h1>
                <img src="img/doctor-woman-400px.png" alt="" />
            </div>
            <div className="aboutList" data-aos="fade-left" data-aos-duration="1000">
                <ol>
                    <li>
                        <span>01</span>
                        <p>Covid-19, which is now a fast growing global pandemic. The number of confirmed cases worldwide has exceeded 25,65,000 due to rapid spreading of the virus.</p>
                    </li>
                    <li>
                        <span>02</span>
                        <p>Covid-19, spreads very easily, much easier than many other regular illnesses we deal with on a regular basis. That's what makes it so dangerous.</p>
                    </li>
                    <li>
                        <span>03</span>
                        <p>The best course of action is to stay at home prevent the spread of the disease as well as hospitals getting overwhelmed with patients who simply shoudn't be there.</p>
                    </li>
                    <li>
                        <span>04</span>
                        <p>As of today, there is no know cure and no approved vaccine for Covid-19</p>
                    </li>

                </ol>
            </div>
        </div>

        <div className="infoSection">
            <div className="infoHeader" data-aos="fade-up" data-aos-duration="1000">
                <h1>Things you could do during the <br /> <span style={{ color: '#e0501b' }}>Coronavirus Quarantine.</span> </h1>
            </div>
            <div className="infoCards">
                <div className="card one" data-aos="fade-up" data-aos-duration="1000">
                    <img src="img/movie.png" className="cardoneImg" alt="" data-aos="fade-up" data-aos-duration="1100" />
                    <div className="cardbgone"></div>
                    <div className="cardContent">
                        <h2>Binge Watch</h2>
                        <p>Binge-watch all your favorite TV Shows or Movies during this Quarantine!</p>
                        <a href="#">
                            <div className="cardBtn">
                                <img src="img/next.png" alt="" className="cardIcon" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card two" data-aos="fade-up" data-aos-duration="1300">
                    <img src="img/learn.png" className="cardtwoImg" alt="" data-aos="fade-up" data-aos-duration="1200" />
                    <div className="cardbgtwo"></div>
                    <div className="cardContent">
                        <h2>Learn a New Skill</h2>
                        <p>Try a new recipe, Write a blog or Learn a new language this Quarantine!</p>
                        <a href="#">
                            <div className="cardBtn">
                                <img src="img/next.png" alt="" className="cardIcon" />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card three" data-aos="fade-up" data-aos-duration="1600">
                    <img src="img/videocall.png" className="cardthreeImg" data-aos="fade-up" data-aos-duration="1300" alt="" />
                    <div className="cardbgone"></div>
                    <div className="cardContent">
                        <h2>Video Call</h2>
                        <p>Have fun video calling your friends or family this Quarantine!</p>
                        <a href="#">
                            <div className="cardBtn">
                                <img src="img/next.png" alt="" className="cardIcon" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer">
            <h2>HealthCare.</h2>
            <div className="footerlinks">
                <a href="#" className="mainlink">Corona Updates</a>
                <a href="#">Help</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </div>;
};

export default PatientMain;
