import React from 'react'
import SearchBar from '../../SearchBar'
import About from './About'
import Contact from './Contact'
import Share from './Share'
import Subscription from './Subscription'
import Welcome from './Welcome'
import "../../styles/landing-page/responsive.css"
import CreateAccount from '../Forms/CreateAccount'
import Navbar from './Navbar'

export default function LandingPage() {
  return (
    <>
        {/* <CreateAccount/> */}
        
        <Welcome/> 
        <SearchBar/>
        <Share/>
        <Subscription/>
        <Contact/>    
        <About/>
    </>
  )
}
