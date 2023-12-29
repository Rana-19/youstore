export const ProductReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                products: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [action.payload, ...state.cartItems]
            }
        case "QUANTITY_UPDATE":
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        if (action.payload.num + item.qty >= 1) {
                            return {
                                ...item, qty: item.qty + action.payload.num
                            }
                        }
                        else {
                            return item
                        }
                    }
                    else {
                        return item
                    }
                })
            }
        case "PRICE_UPDATE":
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item, newPrice: item.price * item.qty
                        }
                    }
                    else {
                        return item
                    }
                })
            }
        case "REMOVE":
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }




        default:
            state
            break;
    }

}