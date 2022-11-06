import React, {useState, useEffect} from "react";
import style from "./searchPage.module.css"

import { Link, useLocation } from "react-router-dom"

import ItemCard from "../../components/ItemCard/ItemCard"


function SearchPage() {
  
  /* getting items from data base */
  const [itemsFromDb, setItemsFromDb] = useState([0, 0, 0, 0]);
  const location = useLocation()
  useEffect(() => {
    getItemsFromDB()
  }, [location]);




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
        {[].concat(itemsFromDb).map( (item) => <ItemCard {...item} /> )}
      </div>

      <div className={style.pagination}>
        <Link className={style.pagination__prevBtn}/>
        <Link className={style.pagination__numBtn}>1</Link>
        <Link className={style.pagination__nextBtn}/>
      </div>

    </div>
  )












  async function getItemsFromDB() {
    let url = new URL(window.location)
  
    let requestBody = {}
  
    // getting searchFor param
    switch (url.searchParams.get('searchfor')) {
      case 'men':
        requestBody.searchFor = 'men'
        break
    
      case 'women':
        requestBody.searchFor = 'women'
        break
  
      default:
        /* even if there is no 'searchfor' parameter */
        requestBody.searchFor = 'all'
        break
    }
  
  
    // getting page param
    let pageParamInUrl = Number( url.searchParams.get('page') )
    if ( pageParamInUrl != NaN ) {
      requestBody.page = pageParamInUrl
    } else {
      requestBody.page = 1
    }
  
  
    // making a request
    const response = fetch(
      window.SERVER_ADDRESS,
      {
        method: 'post',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: requestBody
      }
    )
    if (typeof response === Array) {
      setItemsFromDb(response)
    }
    
  }
}


export default SearchPage