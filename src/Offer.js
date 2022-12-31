import React from 'react'
import './styles/offer.css'

export default function (props) {
  const {
    price,
    title,
    description
  } = props 
  return (
    <div className='offer-container'>
        <div className='offer-image-container'></div>
        <div className='price'>{price} <span className='org-text'>DA</span></div>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
    </div>
  )
}
