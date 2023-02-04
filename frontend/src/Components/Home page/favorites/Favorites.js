import React,{useState, useEffect} from 'react'
import OffersVisualizer from '../Offers/OffersVisualizer'

export default function Favorites() {
  const [favOffers, setFavOffers] = useState([])
  useEffect(() => {
    axios
    .get("/api/favorite/")
    .then((res) => setLatestOffers(res.data))
    .catch((err) => console.log(err));
  },[]);
  return (
    <div>
      <OffersVisualizer offers = {favOffers} place = {'favorites'} title={'Vos offres favoris:'}/>
    </div>
  )
}
