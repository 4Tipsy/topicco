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

        <div className={style.filterSeparator}/>

        <div className={style.sortBy__textBefore}>Сортировать по:</div>
        <select className={style.sortBy}>
          <option><Link to={'?sort-by=default'}>стандартн.</Link></option>
          <option><Link to={'?sort-by=price-decreasing'}>цене (убыв.)</Link></option>
          <option><Link to={'?sort-by=price-increasing'}>цене (возр.)</Link></option>
        </select>

      </div>

      <div className={style.itemList}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => <ItemCard itemId={id} />)}
      </div>

      <div className={style.pagination}>
        <Link className={style.pagination__prevBtn}/>
        <Link className={style.pagination__numBtn}>1</Link>
        <Link className={style.pagination__nextBtn}/>
      </div>

    </div>
  )
}


export default SearchPage