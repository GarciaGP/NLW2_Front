import React from 'react'
import {Link} from 'react-router-dom'; // Evita que a aplicação seja recarregada completamente ao trocar de página

import logoImg from '../../assets/images/logo.svg' // Imagens precisam ser importadas dessa forma
import landingImg from '../../assets/images/landing.svg' // Imagens precisam ser importadas dessa forma

import studyIcon from '../../assets/images/icons/study.svg' // Imagens precisam ser importadas dessa forma
import giveClassesIcon from '../../assets/images/icons/give-classes.svg' // Imagens precisam ser importadas dessa forma
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg' // Imagens precisam ser importadas dessa forma

import './styles.css'

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
                </span>

            </div>
        </div>
    )
}

export default Landing;