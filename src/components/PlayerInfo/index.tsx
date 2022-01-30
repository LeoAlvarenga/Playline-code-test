import React, { HTMLAttributes } from "react";

import s from "./style.module.scss";

interface PlayerInfoProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
  name: string;
  points: string;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ img, name, points, ...rest }) => {
  return (
    <div className={s.player} {...rest}>
      <img src={img} className={s["player__photo"]} alt={name} />
      <p>{name}</p>
      <div className={s["player__points"]}>
        <div className={s.circle}>
          <span>{points}</span>
        </div>
        <p>pts</p>
      </div>
    </div>
  );
};

export default PlayerInfo;
