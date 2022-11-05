import React from "react";
import style from "./header.module.css"

import { Link } from "react-router-dom"

function Header() {
  

  return (
    <div style={{margin: '0 5%'}}>
      <header className={style.header}>

        <Link to={'/'} className={style.logo} />

        <div className={style.navContainer}>
          <a href='#' className={style.navBtn}>Главная</a>
          <a href='#' className={style.navBtn}>Коллекция ароматов</a>
          <a href='#' className={style.navBtn}>О нас</a>
          <a href='#' className={style.navBtn}>Контакты</a>
        </div>

        <div className={style.userBtnsContainer}>
          <Link to={'/cart'} className={style.cart}>
            <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0195 16.6201H26.2195C29.6195 16.6201 29.9595 18.2101 30.1895 20.1501L31.0895 27.6501C31.3795 30.1101 30.6195 32.1201 27.1195 32.1201H18.1295C14.6195 32.1201 13.8595 30.1101 14.1595 27.6501L15.0595 20.1501C15.2795 18.2101 15.6195 16.6201 19.0195 16.6201Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.5 18.6201V15.1201C18.5 13.6201 19.5 12.6201 21 12.6201H24C25.5 12.6201 26.5 13.6201 26.5 15.1201V18.6201" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
          <div className={style.acc}>
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.2321 31.7035C30.2321 27.9947 26.5425 24.9951 22 24.9951C17.4575 24.9951 13.7679 27.9947 13.7679 31.7035M22 22.1201C23.2709 22.1201 24.4896 21.6153 25.3882 20.7167C26.2869 19.8181 26.7917 18.5993 26.7917 17.3285C26.7917 16.0576 26.2869 14.8389 25.3882 13.9403C24.4896 13.0416 23.2709 12.5368 22 12.5368C20.7292 12.5368 19.5104 13.0416 18.6118 13.9403C17.7132 14.8389 17.2084 16.0576 17.2084 17.3285C17.2084 18.5993 17.7132 19.8181 18.6118 20.7167C19.5104 21.6153 20.7292 22.1201 22 22.1201V22.1201Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

      </header>
    </div>
  )
}



export default Header