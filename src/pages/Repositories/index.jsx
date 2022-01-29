import React, { useEffect, useState } from "react";
import CardRepo from "./components/CardRepo";
import api from "../../services/api";
import { useParams } from "react-router-dom";

import style from "./style.module.scss";

function Repositories() {
  const [dataRepo, setDataRepo] = useState();
  const { user } = useParams();

  useEffect(() => {
    api.get(`${user}/repos`).then((response) => setDataRepo(response.data));
  }, [user]);

  return (
    <div className={style.cardrepo__container}>
      {dataRepo?.map((repo) => (
        <CardRepo
          name={repo.name}
          visibility={repo.visibility}
          description={repo.description}
          key={repo.id}
          langauge={repo.language}
          update={repo.updated_at}
        />
      ))}
    </div>
  );
}

export default Repositories;
