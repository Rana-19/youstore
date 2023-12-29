import React, { useContext, useState } from 'react'
import ProductContext from '../context/product/ProductContext'
import { toast } from 'react-toastify'
import { FaRupeeSign } from "react-icons/fa";


const ProductCard = ({ product }) => {

    const { dispatch, cartItems } = useContext(ProductContext)
    const handleAdd = (product) => {
        const x = cartItems.filter((item) => item.id === product.id)
        if (x.length) {
            alert("Item already in Cart!!!")
        }
        else {
            const cartProduct = { ...product, qty: 1, newPrice: product.price }
            dispatch({
                type: "ADD_TO_CART",
                payload: cartProduct
            })
            toast.success("Item added in cart !!")
        }






    }

    return (
        <div className="card">
            <div className="imgpt">
                <img src={product.image} alt="" />
            </div>
            <div className="txtpt">
                <h2 className='titles'>{product.title}</h2>
                <span>
                    <p>Price:<FaRupeeSign />{product.price}</p>
                    <button onClick={() => handleAdd(product)}>Add To cart</button>
                </span>
            </div>

        </div>
    )
}

export default ProductCard