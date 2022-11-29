import React, {useState, useEffect} from "react";
import { observer } from "mobx-react-lite"
import style from "./cartPage.module.css"

import ItemCard from "../../components/ItemCard__CartPage/ItemCard"
import getRenderableItems from "./_getRenderableItems"

import cart from "../../store/cart"


const CartPage = observer(() => {
  
  const [status, setStatus] = useState(102);
  const [itemsFromDb, setItemsFromDb] = useState(undefined)

  useEffect(() => {
    getRenderableItems(setItemsFromDb, setStatus)
  }, [cart.items.length]);



  return (
    <div className={style.cartWrapper}>



      <div className={style.itemList}>

        { 
        [...cart.items].length === 0
        ? <div className={style.itemListMassage}>Корзина пуста</div>

        : status === 102
        ? <div className={style.itemListMassage}>Loading...</div>

        : status === 200
        ? [...itemsFromDb].map(item => <ItemCard {...item} key={item.itemId}/>)

        : status === 500
        ? <div className={style.itemListMassage}>Server error, please try later</div>

        :<></>
        }

      </div>



      <div className={style.buySection}>
        <div style={{width: '75%'}}>
          <div className={style.buySectionTitle}>Оформление заказа</div>
          <input className={style.emailInput} type='text' placeholder="Ваш адрес электронной почты"/>
          <div className={style.emailInputInfo}>Введите адрес своей электронной почты. На этот адрес будут отправляться уведомления о статусе заказа.</div>
          
          <div className={style.mainBuyBtn} onClick={ e => window.alert('Тут должен быть редерикт на страничку оплаты=)') }>Оформить заказ</div>
        </div>
      </div>

    </div>
  )


})





export default CartPage