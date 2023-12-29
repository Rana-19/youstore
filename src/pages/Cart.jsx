import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import ProductContext from '../context/product/ProductContext'
import { FaRupeeSign } from "react-icons/fa";

const Cart = () => {
    const { cartItems } = useContext(ProductContext)

    const total = cartItems.reduce((p, c) => { return p + c.newPrice }, 0)

    if (cartItems.length === 0) {
        return (
            <div className='cart-container'>
                <h1 className='headers'>Your cart is empty</h1>
            </div>
        )
    }
    return (
        <div className='cart-container'>
            <div className='bill-pt'>
                <h2>Total Amount payable:</h2>
                <h3><FaRupeeSign />{total}</h3>
                <button>Pay Now</button>
            </div>
            <div className="cart-items">
                {
                    cartItems.map((item) => (<CartItem key={item.id} item={item} />))
                }


            </div>
        </div>
    )
}

export default Cart