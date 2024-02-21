import { createStore } from "redux";

const initialState = {
    cartList: [],
    oneProduct: [],
};

const cartListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, cartList: [...state.cartList, action.payload] };
        case "DELETE":
            const itemIndex = state.cartList.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
                const updatedCartList = [...state.cartList];
                const deletedItem = updatedCartList[itemIndex];

                if (deletedItem.quantity > 1) {
                    updatedCartList[itemIndex] = {
                        ...deletedItem,
                        quantity: deletedItem.quantity - 1
                    };
                } else {
                    updatedCartList.splice(itemIndex, 1);
                }
                return {
                    ...state,
                    cartList: updatedCartList
                };
            }
            return state;
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






