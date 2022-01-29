import React from "react";
import CardFollow from "./components/CardFollow";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Follow({ nick }) {
  const [loginName, setLoginName] = useState();

  useEffect(() => {
    api.get(`${nick}/followers`).then((result) => setLoginName(result.data));
  }, [nick]);

  return (
    <>
      {loginName?.map((user) => (
        <CardFollow login={user.login} key={user.id} />
      ))}
    </>
  );
}

export default Follow;
