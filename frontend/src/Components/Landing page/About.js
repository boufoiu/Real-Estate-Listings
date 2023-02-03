import React from 'react'
import "../../styles/landing-page/about.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="about">
        <div>
          <div className="about-title">A propos</div>
          <div className="about-text">Lorem Ipsum is simply dummy text<br/>
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
          <ul className='contact-list'>
            <li><i class="fa-solid fa-location-dot"></i> Rue 24, Alger, Algeria</li>
            <li><i class="fa-solid fa-phone"></i> +213-652144589</li>
            <li><i class="fa-regular fa-envelope"></i> Darek@gmail.com</li>
          </ul>
        </div>  
      </div>

      <div className="tail">
        <div className="social-icons">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-linkedin"></i> 
        </div>
        <div className="rights">Darek immobilieres@2020 All Rights Reserved</div>
      </div>
    </div>

  )
}


