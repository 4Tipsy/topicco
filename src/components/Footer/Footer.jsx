import React from "react";
import { Link } from "react-router-dom"

import style from "./footer.module.css"


function Footer() {
  

  return (
    <div style={{margin: '0 5%'}}>
      <footer className={style.footer}>

        <div className={style.sideSection}>
          <div className={style.number}>+7(987) 654-32-10</div>
          <div className={style.copyright}>copyright © 2022 topicco</div>
        </div>

        <Link to={'/main'} className={style.logo} />

        <div className={style.sideSection}>
          <div className={style.mediaContainer}>
            <div className={style.mediaIcon +' '+ style.wa}></div>
            <div className={style.mediaIcon +' '+ style.tg}></div>
            <div className={style.mediaIcon +' '+ style.fb}></div>
            <div className={style.mediaIcon +' '+ style.insta}></div>
          </div>
          <div className={style.afterMediaText}>Наши медиа</div>
        </div>

      </footer>
    </div>
  )
}



export default Footer