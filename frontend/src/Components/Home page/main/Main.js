import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Offer from '../Offers/Offer'
import OffersVisualizer from '../Offers/OffersVisualizer'
import Search from '../Search/Search'

import axios from "axios";

export default function Main() {
  const [latestOffers, setLatestOffers] = useState([])
  useEffect(() => {
    axios
    .get("/api/announcements/")
    .then((res) => setLatestOffers(res.data.slice(0,5)))
    .catch((err) => console.log(err));
  },[]);
  return (
    <div>
      <OffersVisualizer offers = {latestOffers} place = {'home'} title={'Offres plus recentes:'}/>
      <Link to='/home/create-offer'><div className='new-offer' ><i class="fa-solid fa-plus"></i></div></Link>
    </div>
  )
}
