import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OffersVisualizer from "../Offers/OffersVisualizer";
import Offer from "../Offers/Offer";
import Search from "../Search/Search";

import axios from "axios";

export default function Main() {
  const [latestOffers, setLatestOffers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/announcements/")
      .then((res) => {
        console.log(res.data.images);
        setLatestOffers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <OffersVisualizer
        offers={latestOffers}
        place={"home"}
        title={"Offres plus recentes:"}
      />
      <Link to="/home/create-offer">
        <div className="new-offer">
          <i className="fa-solid fa-plus"></i>
        </div>
      </Link>
    </div>
  );
}
