import React, {useState} from 'react'
import OffersVisualizer from '../Offers/OffersVisualizer'
import profileImage from '../../../images/profile.jpg'
import '../../../styles/home page/profile/profile.css'

export default function Profile() {
  const [myOffers, setMyOffers] = useState([
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
    }
  ])
  return (
    <div className='profile-ctn'>
      <div className='profile-info'>
        <div className='title'>
          Profile
        <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <img src = {profileImage}></img>
        <div>Amina Razi</div>
        <div>amina34@gmail.com</div>
        <div>+213(0)556984213</div>
      </div>
      <OffersVisualizer offers = {myOffers} place = {'profile'} title = {'Voici les annonces que vous avez partage'}/>
    </div>
  )
}
