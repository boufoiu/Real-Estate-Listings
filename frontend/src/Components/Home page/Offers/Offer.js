import React, { useState, useEffect } from "react";
import "../../../styles/home page/offers/offer.css";
import offerImage from "../../../images/house.jpg";
import sellerImage from "../../../images/seller.png";
import { Link } from "react-router-dom";

import axios from "axios";

export default function (props) {
  const [offerProps, setOfferProps] = useState({});
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
  } = props.offer;
  const [seller, setSeller] = useState({});
  useEffect(() => {
    axios
      .get("/api/announcements/${a_id}")
      .then((res) => setOfferProps(res.data))
      .catch((err) => console.log(err));

    axios
      .get("/api/user/${offerProps.Owner}")
      .then((res) => setSeller(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="offer-container">
      <img src={seller.PfP} className="offer-image"></img>
      <img src={seller} className="seller-image"></img>
      <div className="offer-price">
        {" "}
        <span className="org-text">DA </span>
        {Price}
      </div>
      <div className="offer-title">{Title}</div>
      <div className="offer-description">
        {Description.substring(0, 70) + "..."}
      </div>
      <div className="offer-options">
        <div>
          <i className="fa-solid fa-heart"></i>
        </div>
        <div>
          <i className="fa-solid fa-comment-dots"></i>
        </div>
        <Link to="/home/1">
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
