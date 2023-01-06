import React from 'react'
import '../../../styles/home page/offers/offer.css'
import offerImage from '../../../images/house.jpg'
import sellerImage from '../../../images/seller.png'
import { Link } from 'react-router-dom'

export default function (props) {
  const {
    price,
    title,
    description
  } = props 
  return (
    <div className='offer-container'>
        <img src={offerImage} className='offer-image'></img>
        <img src={sellerImage} className='seller-image'></img>
        <div className='offer-price'> <span className='org-text'>DA </span>{price}</div>
        <div className='offer-title'>{title}</div>
        <div className='offer-description'>{description}</div>
        <div className='offer-options'>
          <div><i class="fa-solid fa-heart"></i></div>
          <div><i class="fa-solid fa-comment-dots"></i></div>
          <Link to = '/home/1'><button>Details</button></Link>
        </div>
    </div>
  )
}
