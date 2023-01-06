import React, { useState } from 'react'
import '../../../styles/home page/offers/offerDetails.css'
import offerImage from '../../../images/offer-details.jpg'
import sellerImage from '../../../images/seller.png'

export default function OfferDetails() {
   const [offer, setOffer] = useState({
    title: 'Tres belle maison',
    price: '1.325.144',
    description: 'achete cette maison frero! tu ne retrouvra jamais assi pire que celle ci',
    images: [offerImage]
   }) 
  return (
    <div className='offer-details-ctn'>
        <div className='offer-time'>
            Partager il y a 2h par 
            <div className='seller-contact'>
                <img src={sellerImage}></img>
                Salim zemir
                <i class="fa-solid fa-message"></i>
                <i class="fa-solid fa-phone"></i> 
            </div>
        </div>
        <div className='offer-images-ctn'>
            {offer.images.map(image=>(
                <img src={image} className='offer-details-image'></img>
            ))}
        </div>
        <div className='offer-details-btns'>
            <div>Villa</div>
            <div>110 m2</div>
            <div>4 piece</div>
        </div>
        <div className='title-ctn'>
            <div className='title'>{offer.title}</div>
            <div className='price'><span>DA </span>{offer.price}</div>
        </div>
        <p className='description'>{offer.description}</p>
    </div>
  )
}
