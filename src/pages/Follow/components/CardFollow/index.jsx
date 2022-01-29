import React from "react";
import style from "./style.module.scss";
import Profile from "../../../../components/Profile";
import api from "../../../../services/api";
import { useEffect, useState } from "react";
import company from "../../../../assets/company.svg";
import location from "../../../../assets/location.svg";

function CardFollow({ login }) {
  const [dataFollow, setDataFollow] = useState();
  useEffect(() => {
    api.get(login).then((result) => setDataFollow(result.data));
  }, [login]);

  return (
    <>
      {dataFollow && (
        <div className={style.container}>
          <div>
            <Profile img={dataFollow.avatar_url} />
            <div className={style.content}>
              <div className={style.name}>
                <h1>{dataFollow.name}</h1>
                <span>{dataFollow.login}</span>
              </div>
              <p>{dataFollow.bio}</p>
              <div>
                <span>
                  <img src={company} alt="" /> {dataFollow.company}
                </span>
                <span>
                  {" "}
                  <img src={location} alt="" />
                  {dataFollow.location}
                </span>
              </div>
            </div>
          </div>

          <button>Follow or Unfollow</button>
        </div>
      )}
    </>
  );
}

export default CardFollow;
