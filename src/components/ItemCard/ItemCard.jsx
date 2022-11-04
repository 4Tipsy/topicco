import React from "react";

import style from './itemCard.module.css'


function ItemCard({itemId, itemImg, itemName, itemDesc, itemPrice}) {
  


  return (
    <div className={style.itemCard} data-id={itemId} key={itemId}>
      <div className={style.img} style={{backgroundImage: `url(${itemImg})`}}/>
      <div className={style.name}>{itemName}</div>
      <div className={style.desc}>
        <div>{itemDesc}</div>
        <div>{itemPrice}</div>
      </div>
      <div className={style.toCartBtn}>В корзину</div>
    </div>
  )
}

ItemCard.defaultProps = {
  itemImg: 'imgs/example-item-img.png',
  itemName: 'no name',
  itemDesc: 'no description',
  itemPrice: '5 300 руб'
}



export default ItemCard