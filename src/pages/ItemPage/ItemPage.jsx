import React, { useState, useEffect } from "react";
import style from "./itemPage.module.css"

import { useLocation, useParams } from "react-router-dom"
import cart from "../../store/cart"

import getRenderableItem from "./_getRenderableItem";

import colorItemName from "../../simpleFuncions/colorItemName";



const ItemPage = () => {

  const {id: idToGet} = useParams()
  const location = useLocation()

  const [itemFromDB, setItemFromDB] = useState(undefined);
  const [status, setStatus] = useState(102);

  useEffect(() => {
    getRenderableItem(idToGet, setItemFromDB, setStatus)
  }, [location]);


  return (
    <>
    {
      status === 102
      ? <div>Loading...</div>

      : status === 200
      ? <ItemPageInner {...itemFromDB} />

      : status === 400
      ? <div>Неправильный запрос,<br/>проверьте URL-адресс</div>

      : status === 204
      ? <div>Товар с таким id не найден</div>

      : status == 500
      ? <div>Server error,<br/>please try later</div>

      : <></>
    }
    </>
  )
}




const ItemPageInner = ({itemId, itemImg, itemName, itemDesc, itemPrice, for: itemFor}) => {

  function addItemToCart(e) {
    cart.addItem(itemId)

    /* play animation */
  }

  return (
    <div className={style.itemPageWrapper}>

      <div className={style.leftSection}>

        <div className={style.itemImg} style={{backgroundImage: `url(../${itemImg})`}}/>
        <div className={style.itemName} style={colorItemName(itemFor)}>{itemName}</div>

      </div>

      <div className={style.rightSection}>
        <div className={style.itemNameTitle}>{itemName}</div>
        <div className={style.itemDescTitle}>Информация о товаре</div>

        <div className={style.itemDescWrapper}>

          <div className={style.itemDesc}>
            {itemDesc}
          </div>

          <div className={style.itemFor}>
            Подходит для:{' '}
            {
            itemFor === 'women'
            ? <span style={{backgroundColor: 'var(--pink-color)'}}>женщин</span>

            : itemFor === 'men'
            ? <span style={{backgroundColor: 'var(--blue-color)'}}>мужчин</span>

            : <span style={{backgroundColor: 'var(--green-color)'}}>всех</span>
            }
          </div>

        </div>

        <div className={style.itemPrice}>{prettifyPrice(itemPrice)}</div>
        <div className={style.buyBtn} onClick={ e => addItemToCart(e) }>Добавить в корзину</div>
      </div>

    </div>
  )
}


function prettifyPrice(rowPrice) {

  let strPrice = rowPrice.toString() // to ba able to use regExp
  return strPrice.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ') + " " + "руб"
}

export default ItemPage