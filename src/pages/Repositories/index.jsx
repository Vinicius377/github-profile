import React, { useEffect, useState } from "react";
import CardRepo from "./components/CardRepo";
import api from "../../services/api";
import { useParams } from "react-router-dom";

import book from "../../assets/navbody/book_black_24dp.svg";
import style from "./style.module.scss";

function Repositories() {
  const [dataRepo, setDataRepo] = useState();
  const { user } = useParams();

  useEffect(() => {
    api.get(`${user}/repos`).then((response) => setDataRepo(response.data));
  }, [user]);

  return (
    <section className={style.cardrepo__container}>
      <section className={style.filter}>
        <input type="text" />
        <div>
          <button>Type ▼</button>
          <button>Language ▼</button>
          <button>Sort ▼</button>
        </div>
        <button className={style.btn__new}>
          <img src={book} width="20" />
          New
        </button>
      </section>
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
    </section>
  );
}

export default Repositories;
