import React from "react"

import style from './faqPage.module.css'


function FaqPage() {
  

  return (
    <div style={{margin: "4vw 5%"}}>
      <div className={style.faqTitle}>FAQ, часто задаваемые вопросы и прочая информация</div>
      <div className={style.titleSeparator} />

      <div className={style.question}>Нужна ли эта страничка?</div>
      <div className={style.answer}>Скорее всего, да</div>

      <div className={style.question}>Для чего?</div>
      <div className={style.answer}>Для того, чтобы лишний раз намекнуть, что это сделанный мной сайт и ответить на пару , возможно возникающих, вопросов</div>
      
      <div className={style.question}>Где посмотреть код сайта?</div>
      <div className={style.answer}>На гитхабе</div>

      <div className={style.question}>Где посмотреть документацию сайта?</div>
      <div className={style.answer}>Там же =)</div>

      <div className={style.question}>Если вы вдруг смотрите код непосредственно сайта, держу в курсе, он минимизирован, исходники на гитхабе</div>
    </div>
  )
}


export default FaqPage