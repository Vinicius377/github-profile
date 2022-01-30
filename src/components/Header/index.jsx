import React, { useEffect, useState } from "react";
import style from "./style.module.scss";

import Perfil from "../Profile";

import githubIcon from "../../assets/header/iconmonstr-github-1.svg";
import notification from "../../assets/header/notifications_black_24dp.svg";
import plus from "../../assets/header/add_black_24dp.svg";
import { useNavigate } from "react-router-dom";

function Header({ setNick, img, nick }) {
  const [activeSearch, setActiveSearch] = useState(false);
  const navigate = useNavigate();

  const focusSearach = () => {
    setActiveSearch(!activeSearch);
  };
  const onSetNick = (e) => {
    if (e.key === "Enter") {
      setNick(e.target.value);
    }
  };

  useEffect(() => {
    navigate(`/${nick}`);
  }, [nick]);

  return (
    <header className={style.header}>
      <div className={style.header__first}>
        <img src={githubIcon} width="32" />
        <div
          className={style.search__box}
          style={{ width: activeSearch && 400 }}
        >
          <input
            type="text"
            placeholder="Search or jump to..."
            onFocus={focusSearach}
            onKeyUp={onSetNick}
          />
          <span>/</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Pull requests</a>{" "}
            </li>
            <li>
              <a href="#">Issues</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.header__second}>
        <img src={notification} alt="notification" width="20" />
        <div className={style.arrow__container}>
          <img src={plus} alt="plus" width="20" />
          <small>▼</small>
        </div>
        <div className={style.arrow__container}>
          <Perfil img={img} />
          <small>▼</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
