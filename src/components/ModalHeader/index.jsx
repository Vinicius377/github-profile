import React from "react";
import style from "./style.module.scss";

function ModalHeader({ children }) {
  return <section className={style.container}>{children}</section>;
}

export default ModalHeader;
