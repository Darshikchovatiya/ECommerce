import React, { useEffect, useState } from 'react'
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router';
import View_Product from './component/View_Product/View_Product';
import Cart from './component/Cart/Cart';
import View_category from './component/View_category/View_category';
import SignIn from './component/SignIn/SignIn';
import View from './component/View/View';
import SignUp from './component/SignUp/SignUp';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import './App.css'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);



  useEffect(() => {
    setTimeout(() => {
      setData(
        <>

          <Header />
          <Routes>
            <Route path='/' element={<View_Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/view_category/:value' element={<View_category />} />
            <Route path='/view' element={<View />} />
          </Routes>
        </>
      )
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return (
      <div className="load_ing">
        <div className="load_imag">
          <img src="loader2.gif" alt="loader" />
        </div>
      </div>
    )
  }
  return (
    data
  )

}

export default App;