import React, { useEffect, useState } from "react";

import LogoImg from "../../assets/img/logo@1x.png";
import { ReactComponent as MoneyBag } from "../../components/svg/money-bag.svg";
import { ReactComponent as NotifyMe } from "../../components/svg/notify-me.svg";
import { ReactComponent as GooglePlay } from "../../components/svg/google-play.svg";
import { ReactComponent as IosApp } from "../../components/svg/ios-app.svg";
import Button from "../../components/Button";
import { ReactComponent as Progress } from "../../components/svg/progress.svg";

import s from "./style.module.scss";
import PlayerInfo from "../../components/PlayerInfo";
import playLineApi from "../../services/playLineApi";

interface IPlayer {
  last_name: string;
  points: number;
}

const Home: React.FC = () => {
  const [playersList, setPlayersList] = useState<IPlayer[]>();

  useEffect(() => {
     playLineApi.get("/players").then(res => setPlayersList(res.data));
  },[])

  return (
    <div className={s.container}>
      <img src={LogoImg} alt="Playline Sports Lotto logo" className={s.logo} />
      <div className={s.card}>
        <Progress className={s.progress} />
        <div className={s["card__header"]}>
          <h1>Your playline is set!</h1>
          <h2>come back @ 7:30pm to track it live!</h2>
          <div className={s.divider} />
          <p>
            Pro Tip: You can manage your PlayLine's until they go live in the
            Upcoming area
          </p>
        </div>
        <div className={s["card__content"]}>
          <div className={s.players}>
            {playersList ?
              playersList.map((player, index) => (
                <PlayerInfo
                  img={`${
                    process.env.PUBLIC_URL
                  }/${player.last_name.toLowerCase()}.png`}
                  name={player.last_name}
                  points={player.points}
                  key={index}
                  style={{ zIndex: playersList.length - index }}
                />
              )) : (
                <p>No Players found... Try again Later.</p>
              )}
          </div>
          <div className={s["buttons-container"]}>
            <Button icon={<NotifyMe />}>notify me</Button>
            <Button icon={<MoneyBag />}>deposit</Button>
          </div>
        </div>
        <div className={s.divider} />
        <div className={s["card__footer"]}>
          <span>download the app</span>
          <div className={s["buttons-container"]}>
            <a
              href="https://apps.apple.com/app/playline/id1265657853"
              target="_blank"
              rel="noreferrer"
            >
              <IosApp />
            </a>
            <a href="#">
              <GooglePlay />
            </a>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <a href="#" className={s["footer__item"]}>about</a>
        <a href="#" className={s["footer__item"]}>plb bonus</a>
        <a href="#" className={s["footer__item"]}>contact</a>
        <a href="#" className={s["footer__item"]}>security</a>
        <a href="#" className={s["footer__item"]}>responsible play</a>
        <a href="#" className={s["footer__item"]}>privacy</a>
        <a href="#" className={s["footer__item"]}>terms</a>
      </div>
    </div>
  );
};

export default Home;
