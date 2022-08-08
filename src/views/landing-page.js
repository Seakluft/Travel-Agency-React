import React from 'react'

import { Helmet } from 'react-helmet'

import OutlineButton from '../components/outline-button'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Serveur DD</title>
        <meta property="og:title" content="Serveur DD" />
      </Helmet>
      <div className="landing-page-top-container">
        <div className="landing-page-hero">
          <h1 className="landing-page-text">Bienvenue sur le serveur DD</h1>
        </div>
      </div>
      <div id="main-section" className="landing-page-main">
        <div className="landing-page-container01">
          <h1>Rubriques</h1>
        </div>
        <div className="landing-page-cards-container">
          <div className="landing-page-container02">
            <img
              alt="image"
              src="/playground_assets/6-69948_cars-2-sarge-cars-2-characters-300w.png"
              className="landing-page-image"
            />
            <div className="landing-page-container03">
              <span className="landing-page-text1">Temps aux tours</span>
              <span className="landing-page-text2">
                Ici tu trouveras les temps aux tours
              </span>
              <OutlineButton button1="Accéder à la rubrique"></OutlineButton>
            </div>
          </div>
          <div className="landing-page-container04">
            <div className="landing-page-container05">
              <img
                alt="image"
                src="/playground_assets/guido1-200h.png"
                className="landing-page-image1"
              />
              <div className="landing-page-container06">
                <span className="landing-page-text3">Mods</span>
                <span className="landing-page-text4">
                  Ici tu vas trouver les mods requis pour la serveur DD Cup
                </span>
                <OutlineButton button1="Accéder à la rubrique"></OutlineButton>
              </div>
            </div>
            <div className="landing-page-container07">
              <img
                alt="image"
                src="b2242a57-6086-42a9-8ce6-5ee571e3c05b"
                className="landing-page-image2"
              />
              <div className="landing-page-container08">
                <span className="landing-page-text5">Aide</span>
                <span className="landing-page-text6">
                  Nous sommes là pour vous aider
                </span>
                <OutlineButton button1="Accéder à la rubrique"></OutlineButton>
              </div>
            </div>
          </div>
          <div className="landing-page-container09">
            <img
              alt="image"
              src="/playground_assets/59db69923752880e93e16ef6-200h.png"
              className="landing-page-image3"
            />
            <div className="landing-page-container10">
              <span className="landing-page-text7">Skins</span>
              <span className="landing-page-text8">
                Ici tu trouveras les skins de la serveur DD Cup
              </span>
              <OutlineButton button1="Accéder à la rubrique"></OutlineButton>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-footer"></div>
    </div>
  )
}

export default LandingPage
