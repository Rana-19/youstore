import React, { useContext, useState } from 'react'
import ProductContext from '../context/product/ProductContext'
import { toast } from 'react-toastify'
import { FaRupeeSign } from "react-icons/fa";

const CartItem = ({ item }) => {
    const { dispatch } = useContext(ProductContext)
    const quantityUpdate = (id, num) => {
        const newLoad = {
            id,
            num
        }
        console.log(newLoad);
        dispatch({
            type: "QUANTITY_UPDATE",
            payload: newLoad
        })
        dispatch({
            type: "PRICE_UPDATE",
            payload: newLoad
        })


    }
    const handleRemove = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id
        })
        toast.error("Item removed!!!")

    }
    return (
        <div className="cart-card">
            <div className="img-pt">
                <img src={item.image} alt="" />
            </div>
            <div className="txt">
                <h2 className='titles'>{item.title}</h2>
                <span>
                    <p>Price:<FaRupeeSign />{item.newPrice}</p>
                    <p>Quantity: <button id='qt-btn' onClick={() => quantityUpdate(item.id, -1)}>-</button> {item.qty} <button id='qt-btn' onClick={() => quantityUpdate(item.id, +1)}>+</button> </p>
                </span>
                <button onClick={() => handleRemove(item.id)}>Remove Item</button>
            </div>

        </div>
    )
}

export default CartItem