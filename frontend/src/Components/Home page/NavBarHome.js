import React from "react";
import "../../styles/home page/home/navBarHome.css";
import logo from "../../images/logo-home.png";
import { Link } from "react-router-dom";

export default function NavBarHome() {
  return (
    <>
      <div className='virtual-nav-bar'></div>
      <div className='nav-bar-home'>
          <img src={logo}/>
          <div className='parameters'>
              <Link to ='/home/'><div className='parameter'><i class="fa-sharp fa-solid fa-house"></i>Accueil</div></Link>
              <Link to = '/home/CreateOffer'><div className='parameter'>AjouterAnnonce</div></Link>
              <Link to = '/home/messages'><div className='parameter'><i class="fa-solid fa-message"></i>Messagerie</div></Link>
              <Link to ='/home/favorites'><div className='parameter'><i class="fa-solid fa-heart"></i>Favoris</div></Link>
              <Link to = '/home/profile'><div className='parameter'><i class="fa-solid fa-user"></i>Profile</div></Link>
              <Link to = '/home/help'><div className='parameter'><i class="fa-solid fa-circle-info"></i>Aide</div></Link>

          </div>
        </Link>
      </div>
    </>
  );
}
