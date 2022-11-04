import React from "react";
import style from "./searchPage.module.css"

import { Link } from "react-router-dom"

import ItemCard from "../../components/ItemCard/ItemCard"


function SearchPage() {
  

  return (
    <div style={{margin: '0 5%'}}>

      <div className={style.filter}>
        <Link to={'/search?for-female'}className={style.collectionLinkBtn}>Для женщин</Link>
        <Link to={'/search?for-male'}className={style.collectionLinkBtn}>Для мужчин</Link>
        <Link to={'/search?for-all'}className={style.collectionLinkBtn}>Для всех</Link>
      </div>

      <div className={style.itemList}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => <ItemCard itemId={id} />)}
      </div>

      <div className={style.pagination}></div>

    </div>
  )
}


export default SearchPage