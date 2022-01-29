import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CardProfile from "./components/CardProfile";
import NavBody from "./components/NavBody";
import RouterProvider from "./routes/routers";

import api from "./services/api";

function App() {
  const [nick, setNick] = useState("nedbat");
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get(nick)
      .then((response) => setData(response.data))
      .catch((erro) => console.log(erro));
  }, [nick]);

  const cardData = {
    img: data?.avatar_url,
    bio: data?.bio,
    name: data?.name,
    nick: data?.login,
    followersCount: data?.followers,
    followingCount: data?.following,
  };

  return (
    <>
      <Header setNick={setNick} img={cardData.img} nick={nick} />

      <main>
        <div className="container__content">
          <CardProfile cardData={cardData} />
          <div className="container__body">
            <div className="line">
              <NavBody nick={nick} />
            </div>
            <RouterProvider nick={nick} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
