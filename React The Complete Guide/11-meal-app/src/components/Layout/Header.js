import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Yemekler</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        <button>Sepet</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Masa lezzetli yemeklerle dolu!'/>
      </div>
    </Fragment>
  );
}

export default Header;
