import React from 'react'
import Navbar from '../Landing page/Navbar'
import landingImage1 from "../../images/landing-image-1.jpg"
import '../../styles/forms/connect.css'
import { Link } from 'react-router-dom'

export default function Connect() {
  return (
    <div className='form-back'>
        <Navbar/>
        <div className='sign-in-content'>
            <div className='sign-in-form'>
                <Link to = '/'><i class="fa-solid fa-arrow-left"></i></Link>
                <div>
                    <h1>Conncetez vous</h1>
                    <p>Membre chez Darek, Connectez vous a votre compte</p>
                </div>
                <div className='sign-in-input-ctn'><i class="fa-regular fa-envelope"></i><input type={'email'} className={'sign-in-input'} placeholder={'Email'}/></div>
                <div className='sign-in-input-ctn'><i class="fa-solid fa-eye"></i><input type={'password'} className={'sign-in-input'} placeholder={'Mot de pass'}/></div>
                <div>Mot de pass oublie? <a href='#'>Reinitialisez votre mot de passe</a></div>
                <button className='connect'>Connexion</button>
            </div>
            <img src={landingImage1} className={'connect-image'}></img>
        </div>
    </div>
  )
}
