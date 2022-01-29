import React from "react";

function Perfil({ className, img }) {
  const style = {
    borderRadius: "50%",
    objectFit: "cover",
  };
  return <img src={img} className={className} style={style} />;
}

export default Perfil;
