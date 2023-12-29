import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { ProductProvider } from './context/product/ProductContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryProducts from './pages/CategoryProducts'




const App = () => {
  return (
    <>
      <Router>
        <ProductProvider>

          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:category" element={<CategoryProducts />} />

          </Routes>
          <ToastContainer position="bottom-right" />
          <Footer />


        </ProductProvider>
      </Router>

    </>
  )
}

export default App