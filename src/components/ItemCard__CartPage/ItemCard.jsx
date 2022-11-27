import React, {useEffect, useState} from "react";
import style from "./itemCard.module.css"

import { Link } from "react-router-dom"

import cart from "../../store/cart"
import { observer } from "mobx-react-lite";

import colorItemName from "../../simpleFuncions/colorItemName";
import prettifyPrice from "../../simpleFuncions/prettifyPrice";


const ItemCard = observer(({itemId, itemImg, itemName, itemDesc, itemPrice, for:itemFor, amount}) => {

  const [amount_, setAmount] = useState(amount);


  function removeItem(e) {
    e.preventDefault()


    if (amount_ === 1) {
      if ( window.confirm('Вы уверены, что хотите удалить предмет из корзины?') ) {
        cart.removeItem(itemId)
        setAmount(amount_ - 1)
      }


    } else {
      cart.removeItem(itemId)
      setAmount(amount_ - 1)
    }
  }

  function addItem(e) {
    e.preventDefault()

    cart.addItem(itemId)
    setAmount(amount_ + 1)
  }



  return (
    <Link to={`/item/${itemId}`} className={style.itemCard} data-id={itemId}>

      <div className={style.imgSection} style={{backgroundImage: `url(${itemImg})`}}/>

      <div className={style.notImgSection}>
        <div className={style.name} style={colorItemName(itemFor)}>{itemName}</div>
        <div className={style.desc}>{itemDesc}</div>
        <div className={style.separator}/>

        <div className={style.amountBtnWrapper}>

          <div className={style.lessBtn} onClick={e => removeItem(e)}>{'<'}</div>
          <div className={style.numBtn}>{amount_}</div>
          <div className={style.moreBtn} onClick={e => addItem(e)}>{'>'}</div>

        </div>

        <div className={style.price}>{prettifyPrice(itemPrice*amount_)} (x{amount_})</div>
      </div>

    </Link>
  )
})



export default ItemCard