import React, { useState, useEffect } from "react";
import "../../../styles/home page/offers/offerDetails.css";
import offerImage from "../../../images/offer-details.jpg";
import sellerImage from "../../../images/seller.png";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function OfferDetails() {
  const { a_id } = useParams();
  const [offer, setOffer] = useState({});
  const [seller, setSeller] = useState({});
  useEffect(() => {
    axios
      .get("/api/announcements/${a_id}")
      .then((res) => setOffer(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/api/user/${offer.Owner}")
      .then((res) => setSeller(res.data))
      .catch((err) => console.log(err));
  }, []);
  const {
    id,
    PubDate,
    Title,
    Description,
    Price,
    Area,
    Type,
    Category,
    Wilaya,
    Commune,
    Adress,
    Owner,
  } = offer;
  return (
    <div className="offer-details-ctn">
      <div className="offer-time">
        PubDate
        <div className="seller-contact">
          <img src={sellerImage}></img>
          Salim zemir
          <i class="fa-solid fa-message"></i>
          <i class="fa-solid fa-phone"></i>
        </div>
      </div>
      <div className="offer-images-ctn">
        {offer.images.map((image) => (
          <img src={image} className="offer-details-image"></img>
        ))}
      </div>
      <div className="offer-details-btns">
        <div>Type</div>
        <div>Area</div>
        <div>4 piece</div>
      </div>
      <div className="title-ctn">
        <div className="title">{offer.title}</div>
        <div className="price">
          <span>DA </span>
          {offer.price}
        </div>
      </div>
      <p className="description">{offer.description}</p>
    </div>
  );
}
