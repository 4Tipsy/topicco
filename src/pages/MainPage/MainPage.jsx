import React from "react";
import { Link } from "react-router-dom"
import style from "./mainPage.module.css"

import ItemCard from "../../components/ItemCard/ItemCard";


function MainPage() {
  

  return (
    <>
      <div className={style.bannerWrapper}>
        <div className={style.banner} style={{backgroundImage: `url(banners/test.png)`}}/>
        <div className={style.bannerActions}>

        </div>
      </div>


      <div className={style.title}>Коллекции ароматов</div>
      <div className={style.collectionsWrapper}>

          <Link to='/search?searchFor=female' className={style.collectionsLinkBtn}>
            <div className={style.collectionsLinkBtn__img} style={{backgroundImage: 'url(imgs/collections__forFemale.png)'}}/>
            <div className={style.collectionsLinkBtn__text} style={{backgroundColor: 'var(--pink-color)'}}>Для женщин</div>
          </Link>

          <Link to='/search?searchFor=male' className={style.collectionsLinkBtn}>
            <div className={style.collectionsLinkBtn__img} style={{backgroundImage: 'url(imgs/collections__forMale.png)'}}/>
            <div className={style.collectionsLinkBtn__text} style={{backgroundColor: 'var(--blue-color)'}}>Для мужчин</div>
          </Link>

          <Link to='/search?searchFor=all' className={style.collectionsLinkBtn}>
            <div className={style.collectionsLinkBtn__img} style={{backgroundImage: 'url(imgs/collections__forAll.png)'}}/>
            <div className={style.collectionsLinkBtn__text} style={{backgroundColor: 'var(--green-color)'}}>Для всех</div>
          </Link>

      </div>



      <div className={style.title}>О нас</div>
      <div className={style.aboutUsWrapper}>
        <div className={style.aboutUs}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud am  et. 
        </div>
      </div>



      <div className={style.title}>Товар дня</div>
      <div style={{margin: '0 3%'}}>
        <div className={style.itemOfTheDay}>
          {[1, 2, 3, 4].map(id => <ItemCard itemId={id}/>)}
        </div>
      </div>


      <div className={style.title}>Более 500 магазинов по всей России!</div>
      <div className={style.mapWrapper}>
        <iframe className={style.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3Aed1df3637fb6fe04e3665d5d522dc69f98632cde5efaa1410fe0ce8b425acbb9&amp;source=constructor" title="our-shops-on-map" frameborder="0"></iframe>
      </div>
    </>
  )
}








export default MainPage