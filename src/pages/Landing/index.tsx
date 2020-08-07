import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';




function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg}
                     alt="Plataforma de estudos"
                     className="hero-image"
                />

                <div className="buttons-container">
                    <a href="http://localhost:3000" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="http://localhost:3000" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Estudar
                    </a>
                </div>
            </div>
        </div> 
    )
}

export default Landing;