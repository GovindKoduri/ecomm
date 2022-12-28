//define application states and actions

export const initialState = {
    basket: [],
}

//selector
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => amount + item.price, 0) );
}

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "REMOVE_FROM_BASKET":
        const index = state.basket.findIndex( item => {
            return item.id === action.id;
        });
        let newBasket = [...state.basket];

        if ( index > 0 ) {
            newBasket.splice(index, 1);
        } else {
            console.warn(`Item not found in the Basket`);
        }

        return {
            ...state,
            basket: newBasket,
        }

        default: 
            return state;
    }

}

export default reducer;