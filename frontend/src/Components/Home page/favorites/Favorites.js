import React,{useState} from 'react'
import OffersVisualizer from '../Offers/OffersVisualizer'

export default function Favorites() {
  const [favOffers, setFavOffers] = useState([
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
      <OffersVisualizer offers = {favOffers} place = {'favorites'} title={'Vos offres favoris:'}/>
    </div>
  )
}
