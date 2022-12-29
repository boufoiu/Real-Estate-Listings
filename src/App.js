import { useState, useEffect} from "react";
import Navbar from "./Navbar";
import "./styles/App.css"
import "./styles/welcomePage.css"




function App() {

   return (
   <div className='main-div'>
    <Navbar></Navbar> 
    <div className="welcome-text">
      <h1>Le <span className="org-text">1er</span> site de <br/> l’immobilier en <br/> Algérie </h1>
      <h3>Accordez plus de visibilité à vos annonces immobilières 
         <br/> et aidez les gens à trouver les meilleurs endroits</h3>
      <button className="start-button">Commencer</button>
      <ul>
        <li><span className="big-text"><span className="org-text">+</span> 2K</span> <br/> Annonces</li>
        <li><span className="big-text"><span className="blue-text">+</span> 5K <br/></span> Clients fideles</li>
        <li><span className="org-text big-text">58</span> <br/> Wilaya</li>
      </ul>
    </div>
    <image className="main-image"></image>
   </div>
  );
}

export default App;
