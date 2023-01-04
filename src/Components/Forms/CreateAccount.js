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
                <input type={'text'} placeholder={'Votre nom complet'}></input>
                <input type={'email'} placeholder={'Votre adresse email'}></input>
              </div>
              <div className='inputs-row'>
                <input type={'number'} placeholder='Votre numero de telephone'></input>
                <input type={'password'} placeholder={'Mot de passe'}></input>
              </div>
          <div class='terms'><input type={'checkbox'}></input> J'accepte les <a href='#'>termes et conditions</a> d'utilisation<a/></div>
              <button class='connect'>Submit</button>
      </div>
  </div>
  )
}
