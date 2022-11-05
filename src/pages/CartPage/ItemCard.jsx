import React from "react";
import style from "./itemCard.module.css"

import { Link } from "react-router-dom"



function ItemCard({itemId, itemImg, itemName, itemDesc, itemPrice}) {
  

  return (
    <Link to={`/item/${itemId}`} className={style.itemCard} data-id={itemId} key={itemId}>

      <div className={style.imgSection} style={{backgroundImage: `url(${itemImg})`}}/>

      <div className={style.notImgSection}>
        <div className={style.name}>{itemName}</div>
        <div className={style.separator}/>
        <div className={style.desc}>{itemDesc}</div>

        <div className={style.amountBtnWrapper}>
          <div className={style.lessBtn}/>
          <div className={style.numBtn}>1</div>
          <div className={style.moreBtn}/>
        </div>

        <div className={style.price}>{itemPrice}</div>
      </div>

    </Link>
  )
}
ItemCard.defaultProps = {
  itemImg: 'imgs/example-item-img.png',
  itemName: 'no name',
  itemDesc: 'no description',
  itemPrice: '5 300 руб'
}


export default ItemCard