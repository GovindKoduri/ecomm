//define application states and actions

export const initialState = {
    basket: [],
    token: '',
    isLoggedIn: false,
    
}

//selector
export const getBasketTotal = (basket) => {
    return(basket?.reduce((amount, item) => amount + item.price, 0) );
}

const reducer = (state, action) => {
    switch (action.type) {

        case "LOG_IN":
            return {
              ...state,
              token: action.token,
              isLoggedIn: !!action.token,
            };

        case "LOG_OUT":
            return {
              basket: [],
              token: "",
              isLoggedIn: false,
            };
      
        case "ADD_TO_BASKET":
            return {
            ...state,
            basket: [...state.basket, action.item],
            };
      
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex( 
                item => item.id === action.id
            );
        
            let newBasket = [...state.basket];

            if ( index >= 0 ) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Item id ${action.id} not found in the Basket`);
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