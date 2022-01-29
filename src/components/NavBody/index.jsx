import React from "react";
import { NavLink } from "react-router-dom";

import style from "./style.module.scss";

import closeBook from "../../assets/navbody/book_black_24dp.svg";
import cube from "../../assets/navbody/cube-svgrepo-com.svg";
import openBook from "../../assets/navbody/menu_book_black_24dp.svg";
import star from "../../assets/navbody/star_black_24dp.svg";
import grid from "../../assets/navbody/view_quilt_black_24dp.svg";

function NavBody({ nick }) {
  const activeLink = ({ isActive }) => {
    return isActive ? style.activeLink : undefined;
  };

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <div className={style.navbody__item}>
            <img src={openBook} alt="" />
            <NavLink to={`/${nick}`} className={activeLink}>
              Overview
            </NavLink>
          </div>
        </li>
        <li>
          <div className={style.navbody__item}>
            <img src={closeBook} alt="" />
            <NavLink to={`/${nick}/repo`} className={activeLink}>
              Repositories
            </NavLink>
          </div>
        </li>
        <li>
          <div className={style.navbody__item}>
            <img src={grid} alt="" />
            <a>Projects</a>
          </div>
        </li>
        <li>
          <div className={style.navbody__item}>
            <img src={cube} alt="" />
            <a>Packages</a>
          </div>
        </li>
        <li>
          <div className={style.navbody__item}>
            <img src={star} alt="" />
            <a>Stars</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBody;
