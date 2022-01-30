import React from 'react';

import LogoImg from '../../assets/img/logo@1x.png';
import { ReactComponent as MoneyBag } from "../../components/svg/money-bag.svg";
import { ReactComponent as NotifyMe } from "../../components/svg/notify-me.svg";
import { ReactComponent as GooglePlay } from "../../components/svg/google-play.svg";
import { ReactComponent as IosApp } from "../../components/svg/ios-app.svg";
import Button from '../../components/Button';
import { ReactComponent as Progress  } from '../../components/svg/progress.svg';

import s from './style.module.scss';

const Home: React.FC = () => {
  return (
      <div className={s.container}>
          <img src={LogoImg} alt="Playline Sports Lotto logo" />
          <div className={s.card}>
            <Progress />
            <div className={s['card__header']}>
              <h1>Your playline is set!</h1>
              <h2>come back @ 7:30pm to track it live!</h2>
              <div className={s.divider} />
              <p>Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</p>
            </div>
            <div className={s['card__content']}>
              <div className={s['buttons-container']}>
                <Button icon={<NotifyMe />}>notify me</Button>
                <Button icon={<MoneyBag />}>deposit</Button>
              </div>
            </div>
            <div className={s.divider} />
            <div className={s['card__footer']}>
              <span>download the app</span>
              <div className={s['buttons-container']}>
                <IosApp />
                <GooglePlay/>
              </div>
            </div>
          </div>
          <div className={s.footer}>
            <div className={s['footer__item']}>about</div>
            <div className={s['footer__item']}>plb bonus</div>
            <div className={s['footer__item']}>contact</div>
            <div className={s['footer__item']}>security</div>
            <div className={s['footer__item']}>responsible play</div>
            <div className={s['footer__item']}>privacy</div>
            <div className={s['footer__item']}>terms</div>
          </div>
      </div>
  );
}

export default Home;