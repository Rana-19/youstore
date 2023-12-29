import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/product/ProductContext'
import ProductCard from '../components/ProductCard'
import { fetchCategoryProducts } from '../context/product/ProductActions'
import { useParams } from 'react-router-dom'

const CategoryProducts = () => {
    const { products, dispatch } = useContext(ProductContext)
    const params = useParams()
    console.log(params);
    const getProducts = async (category) => {
        const data = await fetchCategoryProducts(category)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }
    useEffect(() => {
        getProducts(params.category)

    }, [params])

    if (!products) {
        return (
            <div className="container">
                <h1 className='headers'>LOADING....</h1>
            </div>)

    }

    return (
        <div className="container">
            <h1 className='headers'>{params.category}</h1>
            <div className="products">
                {
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }

            </div>

        </div>
    )



}

export default CategoryProducts