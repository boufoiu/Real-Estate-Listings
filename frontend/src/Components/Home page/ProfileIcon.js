import React from 'react'
import { Link } from 'react-router-dom'
import profileImage from '../../images/profile.jpg'
import '../../styles/home page/profileIcon.css'

export default function ProfileIcon() {
  return (
    <Link to = '/home/profile'>
        <div className='profile-icon'>
            Salima <img src = {profileImage}></img>
        </div>
    </Link>
  )
}
