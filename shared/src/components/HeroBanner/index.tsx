import React from 'react';
import classNames from 'classnames';

import {createMountComponent} from "../../utils/mountComponent";
import styles from './HeroBanner.module.scss';

interface IHeroBannerProps {
  title: string;
  content: string;
  buttonTitle: string;
  description: string;
}

const HeroBanner = (props: any) => {
  const {heroBannerProps, navigate} = props;
  const navigateShop = () => {
    navigate("/shop");
  }
  return (
    <div
      className={classNames(styles.hero__item, 'set-bg')}
      style={{backgroundImage: 'url(/img/hero/banner.jpg)'}}
    >
      <div className={styles.hero__text}>
        <span>{ heroBannerProps.title }</span>
        <h2 dangerouslySetInnerHTML={{ __html: heroBannerProps.content }} />
        <p>{ heroBannerProps.description }</p>
        <button onClick={navigateShop} className="primary-btn">{ heroBannerProps.buttonTitle }</button>
      </div>
    </div>
  );
};

export default (el: any, heroBannerProps: IHeroBannerProps) => createMountComponent(HeroBanner, heroBannerProps, el);
