const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        let existingProduct = state.cart.find((curEle) => curEle.id === id + color);

        if (existingProduct) {
            let updatedProduct = state.cart.map((curEle) => {
                if (curEle.id === id + color) {
                    let newAmount = curEle.amount + amount;

                    if (newAmount >= curEle.max) {
                        newAmount = curEle.max;
                    }

                    return {
                        ...curEle,
                        amount: newAmount,
                    };
                } else {
                    return curEle;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            };
        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            };
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curEle) => {
            if (curEle.id === action.payload) {
                let decAmount = curEle.amount - 1;

                if (decAmount < 1) {
                    decAmount = 1;
                }

                return {
                    ...curEle,
                    amount: decAmount,
                };
            } else {
                return curEle;
            }
        });
        return { ...state, cart: updatedProduct };
    }

    if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curEle) => {
            if (curEle.id === action.payload) {
                let incAmount = curEle.amount + 1;

                if (incAmount >= curEle.max) {
                    incAmount = curEle.max;
                }

                return {
                    ...curEle,
                    amount: incAmount,
                };
            } else {
                return curEle;
            }
        });
        return { ...state, cart: updatedProduct };
    }

    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curEle) => curEle.id !== action.payload);
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        };
    }


    if (action.type === "CART_TOTAL_ITEM"){
        let updatedItemVal = state.cart.reduce((intialVal, curEle)=> {

            let {amount}= curEle;

            intialVal = intialVal + amount;

            return intialVal;
        }, 0);
        return{
            ...state,
            total_item: updatedItemVal,
        }
    }


    if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((intialVal, curEle) => {
        let { price, amount } = curEle;
        return intialVal + price * amount;
    }, 0);

    return {
        ...state,
        total_price,
    };
}

    return state;
};

export default cartReducer;
