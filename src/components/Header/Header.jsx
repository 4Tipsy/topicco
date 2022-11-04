import React from "react";
import style from "./header.module.css"

function Header() {
  

  return (
    <div style={{margin: '0 5%'}}>
      <header className={style.header}>

        <div className={style.logo} />

        <div className={style.navContainer}>
          <a href='#' className={style.navBtn}>Главная</a>
          <a href='#' className={style.navBtn}>Коллекция ароматов</a>
          <a href='#' className={style.navBtn}>О нас</a>
          <a href='#' className={style.navBtn}>Контакты</a>
        </div>

        <div className={style.userBtnsContainer}>
          <div className={style.cart} />
          <div className={style.acc} />
        </div>

      </header>
    </div>
  )
}



export default Header