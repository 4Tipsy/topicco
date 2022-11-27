import React from "react";

import style from './itemCard.module.css'

import { Link } from "react-router-dom";

import cart from "../../store/cart"

import colorItemName from "../../simpleFuncions/colorItemName";
import prettifyPrice from "../../simpleFuncions/prettifyPrice";


function ItemCard({itemId, itemImg, itemName, itemDesc, itemPrice, for: itemFor}) {


  function addItemToCart(e) {
    e.preventDefault()

    cart.addItem(itemId)

    /* play animation */
  }



  return (
    <Link to={`/item/${itemId}`} className={style.itemCard} data-id={itemId}>
      <div className={style.img} style={{backgroundImage: `url(${itemImg})`}}/>
      <div className={style.name} style={colorItemName(itemFor)}>{itemName}</div>
      <div className={style.desc}>
        <div style={{maxHeight: '60%', overflowY: 'auto'}}>{itemDesc}</div>
        <div style={{marginTop: '0.5vw'}}>{prettifyPrice(itemPrice)}</div>
      </div>
      <div className={style.toCartBtn} onClick={ e => addItemToCart(e) }>В корзину</div>
    </Link>
  )
}



export default ItemCard