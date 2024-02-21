import { createStore } from "redux";

const initialState = {
    cartList: [],
    oneProduct: [],
    cartCount: 0,
};

const cartListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, cartList: [...state.cartList, action.payload], cartCount: state.cartCount + 1 };
        case "DELETE":
            const updatedCart = state.cartList.filter(item => item !== action.payload);
            return { ...state, cartList: updatedCart, cartCount: state.cartCount - 1 };
        case "INCREASE":
            const cartIncrease = state.cartList.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item
            })
            return { ...state, cartList: cartIncrease };
        case "DECREASE":
            const cartDecrease = state.cartList.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
                }
                return item;
            });
            return {...state,cartList: cartDecrease};
        case "REMOVE":
            return { ...state, cartList: state.cartList.filter(item => item.id !== action.payload.id) };

        case "VESITE":
            return { ...state, oneProduct: [...state.oneProduct, action.payload] }

        default:
            return state;
    }
};

const store = createStore(cartListReducer);

export default store;



// let initialstate = {
//     cart: [],
//     cartcount: 0
// }

// const reducer = (state = initialstate, action) => {

//     switch (action.type) {
//         case "Add_to_cart":
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload],
//                 cartcount: state.cartcount + 1
//             };

//         case "Delete_cart":
//             const updatedCart = state.cart.filter(item => item !== action.payload);
//             return {
//                 ...state,
//                 cart: updatedCart,
//                 cartcount: state.cartcount - 1
//             };

//         case "INCREASE_QUANTITY":
//             const increasedCart = state.cart.map(item => {
//                 if (item.id === action.payload.id) {
//                     return { ...item, quantity: item.quantity + 1 };
//                 }
//                 return item;
//             });
//             return {
//                 ...state,
//                 cart: increasedCart
//             };

//         case "DECREASE_QUANTITY":
//             const decreasedCart = state.cart.map(item => {
//                 if (item.id === action.payload.id) {
//                     return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
//                 }
//                 return item;
//             });
//             return {
//                 ...state,
//                 cart: decreasedCart
//             };

//         default:
//             return state
//     }
// }

// export default reducer


