import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/forms/createAccount.css'
import Navbar from '../Landing page/Navbar'
export default function CreateAccount() {
  return (
    <div className='form-back'>
      <Navbar/>
      <div className='create-acc-form'>
          <Link to = '/'><i class="fa-solid fa-arrow-left" ></i></Link>
          <div>
            <h1>Cree un compte chez Darek</h1>
            <p>Agences immobilières, Promoteurs, vous n'avez pas encore de compte sur Darek?<br/>
              Inscrivez-vous sur le premier site d'annonce immobilière en Algérie.</p>
          </div>
              <div className='inputs-row'>
                <div className='sign-up-input-ctn'><i class="fa-regular fa-user"></i><input type={'text'} placeholder={'Votre nom complet'}></input></div>
                <div className='sign-up-input-ctn'><i class="fa-regular fa-envelope"></i><input type={'email'} className={'sign-up-input'} placeholder={'Votre adresse mail'}/></div>
              </div>
              <div className='inputs-row'>
                <div className='sign-up-input-ctn'><i class="fa-solid fa-phone"></i><input type={'number'} placeholder='Votre numero de telephone'></input></div>
                <div className='sign-up-input-ctn'><i class="fa-solid fa-eye"></i><input type={'password'} placeholder={'Mot de passe'}></input></div>
              </div>
          <div class='terms'><input id='check2' type={'checkbox'}></input> J'accepte les <a href='#'>termes et conditions</a> d'utilisation<a/></div>
              <Link to= '/home'><button class='connect'>S'inscrire</button></Link>
      </div>
  </div>
  )
}
