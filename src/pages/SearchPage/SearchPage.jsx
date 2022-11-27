import React, {useState, useEffect} from "react"
import style from "./searchPage.module.css"

import { Link, useLocation, useNavigate } from "react-router-dom"

import ItemCard from "../../components/ItemCard__SearchPage/ItemCard"
import getRenderableItems from "./_getRenderableItems"


function SearchPage() {
  
  /* getting items from data base */
  const [status, setStatus] = useState(102)
  const [itemsFromDb, setItemsFromDb] = useState(undefined)
  const [forPagination, setForPagination] = useState([1])
  const location = useLocation()


  useEffect(() => {
    getRenderableItems(setItemsFromDb, setForPagination, setStatus)
  }, [location]);



  // "searchFor" menu links coloring
  const url = new URL(window.location)
  let searchFor = url.searchParams.get('searchFor');
  (searchFor !== 'women' && searchFor !== 'men') && (searchFor = 'all');




  return (
    <div style={{margin: '0 5%'}}>

      <div className={style.filter}>

        <Link to={'/search?searchFor=women'} className={
          (searchFor === 'women')
          ? style.collectionLinkBtn +' '+ style._active
          : style.collectionLinkBtn
        }>Для женщин</Link>

        <Link to={'/search?searchFor=men'} className={
          (searchFor === 'men')
          ? style.collectionLinkBtn +' '+ style._active
          : style.collectionLinkBtn
        }>Для мужчин</Link>

        <Link to={'/search?searchFor=all'} className={
          (searchFor === 'all')
          ? style.collectionLinkBtn +' '+ style._active
          : style.collectionLinkBtn
        }>Для всех</Link>

        <div className={style.filterSeparator}/>

        <div className={style.sortBy__textBefore}>Сортировать по:</div>
        <SortBy />

      </div>

      <div className={style.itemList}>

        {/* rendering items */}

        {
          status === 102
          ? <div className={style.itemListMassage}>Loading...</div>

          : status === 200
          ? itemsFromDb.map( (item) => <ItemCard {...item} key={item.itemId}/> )

          : status === 500
          ? <div className={style.itemListMassage}>Server error,<br/>please try later</div>

          : <></>
        }
      </div>

      <div className={style.pagination}>
        <Pagination forPagination={forPagination} />
      </div>

    </div>
  )
}





/* sorter logic */
function SortBy() {

  const navigate = useNavigate()

  // getting sortBy parameter
  const url = new URL(window.location)
  let sortBy = url.searchParams.get('sortBy');
  (sortBy !== 'price-increasing' && sortBy !== 'price-decreasing') && (sortBy = 'default');

  
  
  return (
    <select className={style.sortBy} defaultValue={sortBy}
    onChange={ (e) => {


      // modifying the url
      let value = e.target.value
      url.searchParams.set('sortBy', value);


      // changing the url
      navigate(url.pathname + url.search + url.hash)
    } }>



      <option value='price-increasing'>цене (возр.)</option>
      <option value='price-decreasing'>цене (убыв.)</option>
      <option value='default'>стандарт.</option>


    </select>
  )
  
}






/* pagination | pages logic */
function Pagination({forPagination}) {
  const url = new URL(window.location)
  let currentPage = url.searchParams.get('page');
  (currentPage == null) && (currentPage = 1); // if there is no such parameter
  const lastPage = forPagination[forPagination.length - 1]


  return (
    <>
      {(currentPage != 1) 
      ? <Link className={style.pagination__prevBtn} to={getNewPageUrl('-1')}/>
      : <div className={style.pagination__gapBtn}/>}

      
      {forPagination.slice(0).map( (page) => { return (
        <Link 
        className={
          (currentPage == page) 
          ? (style.pagination__numBtn + ' ' + style._active)
          : style.pagination__numBtn
        } 
        to={getNewPageUrl(page)} key={page}>{page}</Link>
      )} )}


      {(currentPage != lastPage)
      ? <Link className={style.pagination__nextBtn} to={getNewPageUrl('+1')}/>
      : <div className={style.pagination__gapBtn}/>}
    </>
  )



  function getNewPageUrl(page) {
    page = String(page)
    // get url
    let url = new URL(window.location)
    let thisPage = url.searchParams.get('page');
    (thisPage == null) && (thisPage = 1); // if there is no such parameter


    // if there is no "page" param or it's wrong, it's will be = 1
    if (isNaN( Number(thisPage) )) {
      url.searchParams.set('1')
    } 


  
    if (page === '-1') {
      let newPage = String( Number(thisPage) - 1)
      url.searchParams.set('page', newPage)
          
    } else if (page === '+1') {
      let newPage = String( Number(thisPage) + 1)
      url.searchParams.set('page', newPage)
      
      
    } else {
      url.searchParams.set('page', page)
    }

    return url.pathname + url.search + url.hash
  }
}


export default SearchPage