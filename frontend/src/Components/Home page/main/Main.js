import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Offer from '../Offers/Offer'
import OffersVisualizer from '../Offers/OffersVisualizer'
import Search from '../Search/Search'

export default function Main() {
  const [latestOffers, setLatestOffers] = useState([
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
    {
      title: 'Beautiful big house',
      price: '200,501',
      description: 'nice house with a great location and a sea view, 5 bedrooms and two bathrooms!'
    },
   
  ])
  return (
    <div>
      <OffersVisualizer offers = {latestOffers} place = {'home'} title={'Offres plus recentes:'}/>
      <Link to='/home/create-offer'><div className='new-offer' ><i class="fa-solid fa-plus"></i></div></Link>
    </div>
  )
}
