import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage/SearchPage'
import CartPage from './pages/CartPage/CartPage';



function App() {

  /* scroll nullifying */
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);



  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
