import React from "react";
import style from "./cartPage.module.css"

import { Link } from "react-router-dom"

import ItemCard from "./ItemCard"


function CartPage() {
  

  return (
    <div className={style.cartWrapper}>

      <div className={style.itemList}>
        {[1, 2, 3].map(id => <ItemCard itemId={id}/>)}
      </div>

      <div className={style.buySection}>
        <div style={{width: '75%'}}>
          <div className={style.buySectionTitle}>Оформление заказа</div>
          <input className={style.emailInput} type='text' placeholder="Ваш адрес электронной почты"/>
          <div className={style.emailInputInfo}>Введите адрес своей электронной почты. На этот адрес будут отправляться уведомления о статусе заказа.</div>
          <div className={style.mainBuyBtn}>Оформить заказ</div>
        </div>
      </div>

    </div>
  )
}




export default CartPage