import { useState, useEffect} from "react";
import Navbar from "./Navbar";
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
      <ul>
        <li><span className="big-text"><span className="org-text">+</span> 2K</span> <br/> Annonces</li>
        <li><span className="big-text"><span className="blue-text">+</span> 5K <br/></span> Clients fideles</li>
        <li><span className="org-text big-text">58</span> <br/> Wilaya</li>
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
   </div>
  );
}

export default App;
