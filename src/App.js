import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './pages/MainPage/MainPage'
import SearchPage from './pages/SearchPage/SearchPage'

function App() {
  

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/search' element={<SearchPage/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
