import React from 'react'
import '../../../styles/home page/offers/createOffer.css'

export default function CreateOffer() {
  return (
    <div className = 'create-offer-form'>
        <div className='title' >Ajouter une annonce</div>
        <div className='input-ctn'>
            <select>
                <option key={'alger'}  >Wilaya</option>
                <option key={'Tizi Ouzou'} value={'Tizi Ouzou'}>Tizi Ouzou</option>
            </select>
            <select>
                <option key={'Beni Yenni'} >Commune</option>
                <option key={'Ouacifs'} value={'Tizi Ouzou'}>Ouacifs</option>
            </select>

        </div>
        <input className='input-full' type={'text'} placeholder="L'adresse exacte du bien"></input>
        <div className='input-ctn'>
            <select>
                <option key={'appartement'}> Type du Bien</option>
                <option key={'Villa'}> Villa</option>
                <option key={'Garage'}> Garage</option>
            </select>
            <input className='input-half' type={'number'} placeholder='Surface habitable en m2'></input>
        </div>
        <div className='input-ctn'>
            <input className='input-half' type={'number'} placeholder='Nombre de Pieces: 2 Pour F2 ..etc'></input>
            <div className='input-ctn half-ctn' >
                <input className='input-half'></input>
                
            </div>
        </div>
        <div>
            <input></input>
            <div></div>
        </div>
        <button>Publier l'annonce</button>
    </div>
  )
}
