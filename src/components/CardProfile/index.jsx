import React from "react";
import Perfil from "../Profile";
import group from "../../assets/profilecard/people_black_24dp.svg";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

function CardProfile({ cardData }) {
  const navigate = useNavigate();

  const onNavigate = (tab) => {};
  return (
    <div className={style.cardprofile}>
      <Perfil img={cardData.img} className={style.profile} />
      <div className={style.name}>
        <h1>{cardData.name}</h1>
        <span>{cardData.nick}</span>
      </div>
      <span className={style.bio}>{cardData.bio}</span>
      <button>Edit profile</button>
      <div className={style.follow}>
        <div className={style.group}>
          <img src={group} alt="group" />
          <span>
            <strong>{cardData.followersCount}</strong> followers .
          </span>
        </div>
        <span>
          <strong>{cardData.followingCount}</strong> following
        </span>
      </div>
    </div>
  );
}

export default CardProfile;
