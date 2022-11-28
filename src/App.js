import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage/SearchPage'
import CartPage from './pages/CartPage/CartPage';
import ItemPage from './pages/ItemPage/ItemPage';
import FaqPage from './pages/FaqPage/FaqPage';

import cart from './store/cart'

function App() {

  /* scroll nullifying */
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);


  /* cart */
  useEffect(() => {
    cart.restoreItems()
  }, [])



  return (
    <>
      <Header />

      <Routes>
        <Route path='/main' element={<MainPage/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/item/:id' element={<ItemPage/>} />
        <Route path='/faq' element={<FaqPage/>} />

        <Route path='/' element={<Navigate to="/main" replace />} />

        <Route path='*' component={NoMatch} status={404}/>
      </Routes>

      <Footer />
    </>
  )
}







export default App;