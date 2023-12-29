import React, { useContext } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ProductContext from '../context/product/ProductContext';

const NavBar = () => {
    const { cartItems } = useContext(ProductContext)
    return (
        <nav>
            <span>
                <img src="../src/assets/images/logo.png" alt="" />
                <Link to={"/"}><h1>YourShopee.com</h1></Link>
            </span>
            <ul>
                <Link to={"/electronics"}><li><button>Electronics</button></li></Link>
                <Link to={"/men's clothing"}><li><button>Men's fashion</button></li></Link>
                <Link to={"/women's clothing"}><li><button>Women's fasion</button></li></Link>
                <Link to={"/jewelery"}><li><button>Jewellery</button></li></Link>


            </ul>


            <Link to={"/cart"}>
                <button id='cart-btn'>Cart <FiShoppingCart />({cartItems.length})</button>
            </Link>
        </nav>

    )
}

export default NavBar