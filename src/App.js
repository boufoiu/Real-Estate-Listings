import { useState, useEffect} from "react";
import Navbar from "./Navbar";
import PopularOffers from "./PopularOffers";
import SearchBar from "./SearchBar";
import "./styles/App.css"
import "./styles/welcomePage.css"


function App() {

   return (
   <div className='main-div'>
    <Navbar></Navbar> 
    <div className="welcome-text">
      <h1 className="landing-text1">Le <span className="org-text">1er</span> site de <br/> l’immobilier en <br/> Algérie </h1>
      <h3 className="landing-text2">Accordez plus de visibilité à vos annonces immobilières 
         <br/> et aidez les gens à trouver les meilleurs endroits</h3>
      <button className="start-button">Commencer</button>
      <ul className="stats">
        <li className="stats"><span className="big-text"><span className="org-text">+</span> 2K</span> <br/> Annonces</li>
        <li className="stats"><span className="big-text"><span className="blue-text">+</span> 5K <br/></span> Clients fideles</li>
        <li className="stats"><span className="org-text big-text">58</span> <br/> Wilaya</li>
      </ul>
    </div>
    <image className="main-image"></image>
    <SearchBar></SearchBar>
    <div className="welcome-text2">
      <h1 className="landing-text3">Darek, Meilleur endroit <br/> en ligne pour les <span className="blue-text">meilleures</span>
        <br/> <span className="org-text">offres</span> immobilières </h1>
      <h3 className="landing-text4">Vous aussi, Vous êtes un(e) Agence immobilière!
         <br/> Donner de la visibilité a votre Agence immobilière
         <br/> et de vos annonces immobilieres, inscrivez-vous
         <br/> gratuitement sur Darek et publiez vos
         <br/> vos annonces immobilière</h3>
      <div className="buttons-container">
        <button className="share-button">Partager une offre</button>
        <button className="navigate-button">Consulter une offre</button>
      </div>
    </div>
    <image className="main-image2"></image>
    <PopularOffers></PopularOffers>

    <div className="subscription">
      <div className="sub-img" ></div>
      <div className="sub-text">
        <h1 className="sub-text1">abonnez vous pour recevoir les dernieres
          <br/> actualites de darek</h1>

        <h3 className="sub-text2">rien ne vaudra jamais la satisfaction d'un client, heureux de
          <br/> l'expérience qu'il vient de vivre</h3>

        <div className="sub-email">
          <input className="email-input" type={"email"}></input>
          <button className="sub-submit">Abonner</button>
        </div>
      </div>
    </div>

    <div className="contact">
      <div className="org-text contact-title1">contact</div>
      <div className=" title2">Contactez nous<br/> facilement</div>
      <div className="contact-desc">
      Vous aussi, Vous êtes un(e) Agence immobilière !<br/>
       Donner de la visibilité a votre Agence immobilière et de<br/>
        vos annonces immobilieres, inscrivez-vous<br/>
         gratuitement sur Dar Jadida et publiez vos annonces<br/> immobilieres
      </div>
      <div className="contact-btn-container">
        <button className="tlphn-btn">Telephone</button>
        <button className="email-btn">Email</button>
      </div>
    </div>
    
    <div className="about">
        <div>
          <div className="about-title">A propos</div>
          <div>Lorem Ipsum is simply dummy text<br/>
           of the printing and typesetting industry.<br/>
            Lorem Ipsum has been the industry's standard<br/>
             dummy text ever since the 1500s</div>
        </div>  
        <div>
          <div className="about-title">Nos service</div>
          <ul>
            <li>Location</li>
            <li>Vente</li>
            <li>Achat</li>
            <li>Echange</li>
            <li>Location pour vacance</li>
          </ul>
        </div>  
        <div>
          <div className="about-title">Nos contacts</div>
          <ul>
            <li>Rue 24, Alger, Algeria</li>
            <li>+213-652144589</li>
            <li>Darek@gmail.com</li>
          </ul>
        </div>  
        <div className="about-img"></div>
        <div className="rights">Darek immobilieres@2020 All Rights Reserved</div>
      </div>
   </div>
  );
}

export default App;
