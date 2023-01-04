import React,{useEffect, useState} from 'react'
import Offer from './Offer'
import './styles/landing-page/popular-offers.css'
export default function () {
const[currOfferType, setCurrOfferType] = useState('')
const[popularOffers, setPopularOffers] = useState({
vente:[
            {price : 1500000,
            title : 'Nice big house',
            description : 'sea view, 4 bedrooms, large living room, bathroom and chicken'},
            {price : 2400000,
            title : 'Beautiful appartement',
            description : 'sea view, 4 bedrooms, large living room, bathroom and chicken'},
            {price : 2400000,
            title : 'Beautiful appartement',
            description : 'sea view, 4 bedrooms, large living room, bathroom and chicken'}],
location:[
            {price : 500000,
            title : 'Good  house',
            description : 'sea view, 4 bedrooms, large living room, bathroom and chicken'},
            {price : 430000,
            title : 'Beautiful mansion',
            description : 'sea view, 4 bedrooms, large living room, bathroom and chicken'},
            {price : 752000,
            title : 'Beautiful appartement',
            description : 'sea view, 4 bedrooms, large living room, bathroom and chicken'}]
})
const[currentPopularOffers, setCurrentPopularOffers] = useState([])

useEffect(()=>{
  setCurrOfferType('Vente')
  setCurrentPopularOffers(popularOffers.vente)
},[])

const handleRightClick = (e)=>
{
  setCurrOfferType('Location');
  setCurrentPopularOffers(popularOffers.location)
}

const handleLeftClick = (e)=>
{
  if(currOfferType == 'Location'){
    setCurrOfferType('Vente');
    setCurrentPopularOffers(popularOffers.vente)
  }
}
  return (
    <div className='popular-offers'>
        <span className='org-text title'>Meilleures offres</span>
        <div className='current-popular'>
            <span className='title2'>{currOfferType} Populaires</span>
            <button className='left-button' onClick={handleLeftClick}></button>
            <button className='right-button' onClick={handleRightClick}></button>
        </div>
        <div className='offers-container'>
          {currentPopularOffers.map(offer=>{
            return <Offer price = {offer.price} title = {offer.title} description = {offer.description}></Offer>
          })}
        </div>
    </div>
  )
}
