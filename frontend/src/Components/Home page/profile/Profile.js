import React, { useState, useEffect } from "react";
import OffersVisualizer from "../Offers/OffersVisualizer";
import profileImage from "../../../images/profile.jpg";
import "../../../styles/home page/profile/profile.css";

import axios from "axios";

export default function Profile() {
  const [myOffers, setMyOffers] = useState([]);
  const [userInfos, setUserInfo] = useState({});
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const res = await axios.get("/login/");
      window.location.href = res.request.responseURL;
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    axios
      .get("/session/")
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
    axios
      .get("/api/announcements/me/")
      .then((res) => setMyOffers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="profile-ctn">
      <div className="profile-info">
        <div className="title">
          Profile
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        <img src={profileImage}></img>
        <div>
          <button onClick={handleLogin}>Login with Google</button>
          {error && <p>{error.message}</p>}
        </div>
        {JSON.stringify(userInfos)}
        <div>
          {userInfos.FirstName} {userInfos.LastName}
        </div>
        <div>{userInfos.Email}</div>
        <div>{userInfos.PhoneNumber}</div>
      </div>
      <OffersVisualizer
        offers={myOffers}
        place={"profile"}
        title={"Voici les annonces que vous avez partage"}
      />
    </div>
  );
}
