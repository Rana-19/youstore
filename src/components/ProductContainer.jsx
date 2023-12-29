import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import ProductContext from '../context/product/ProductContext'
import { fetchProducts } from '../context/product/ProductActions'

const ProductContainer = () => {
    const { products, dispatch } = useContext(ProductContext)
    const getProducts = async () => {
        const data = await fetchProducts()
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }
    useEffect(() => {
        getProducts()

    }, [])

    if (!products) {
        return (
            <div className="container">
                <h1 className='headers'>LOADING....</h1>
            </div>)

    }

    return (
        <div className="container">
            <h1>All Products Here!!!</h1>
            <div className="products">
                {
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }

            </div>

        </div>
    )
}

export default ProductContainer