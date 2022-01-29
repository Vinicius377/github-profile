import React from "react";
import star from "../../../../assets/navbody/star_black_24dp.svg";
import style from "./style.module.scss";
import COLORS from "./COLORSLANGUAGE.js";
import { dateInterval } from "../../../../utils/dateInterval";

function CartRepo({ name, visibility, description, langauge, update }) {
  const interval = dateInterval(update);

  return (
    <div className={style.container}>
      <div className={style.repo__item}>
        <div className={style.repo__name}>
          <h1>{name} </h1>
          <span>{visibility}</span>
        </div>
        <span className={style["size--m"]}>{description}</span>
        <div className={style.repo__tec}>
          {langauge && (
            <>
              <small style={{ backgroundColor: COLORS[langauge] }}></small>
              <span
                className={`${style["size--m"]} ${style["repo__tec--language"]}`}
              >
                {langauge}
              </span>
            </>
          )}
          <span className={style["size--m"]}>Updated {interval} </span>
        </div>
      </div>

      <div>
        <div className={style.star}>
          <button>
            <img src={star} alt="" />
            Star
          </button>
          <button>▼</button>
        </div>
        {/* <span>linha aqui</span> */}
      </div>
    </div>
  );
}

export default CartRepo;
