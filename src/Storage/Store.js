import { createStore } from "redux";


let initionlState ={
    cartList: [],
}

const CartListStore = (state = initionlState, action) => {
    switch(action.type){
        case "ADD":
            return{...state,cartList:[...state.cartList, action.payload]};

        case "DELETE":
            return {...state,cartList:[...state.cartList.filter((item)=>item.id!==action.payload)]} 
        // case "pluss" :
        //     return{...prev,[itemId]:prev[itemId]+1}   
        default :
            return initionlState
    }
        
    
}

const Store= createStore(CartListStore)
export default Store;