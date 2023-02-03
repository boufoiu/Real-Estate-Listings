import React from 'react'
import landingImage2 from "../../images/landing-image-2.jpg"
import "../../styles/landing-page/share.css"

export default function Share() {
  return (
    <div className="content2">
      <img src={landingImage2} className="main-image2"></img>
      <div className="welcome-text2">
        <h1 className="landing-text3">Darek, Meilleur endroit en ligne pour les <span className="blue-text">meilleures </span>
        <span className="org-text">offres</span> immobilières </h1>
        <h3 className="landing-text4">Vous aussi, Vous êtes un(e) Agence immobilière!
           Donner de la visibilité a votre Agence immobilière
           et de vos annonces immobilieres, inscrivez-vous
           gratuitement sur Darek et publiez vos
           vos annonces immobilière</h3>
        <div className="buttons-container">
          <button className="share-button">Partager une offre</button>
          <button className="navigate-button">Consulter une offre</button>
        </div>
      </div>
    </div>
  )
}
