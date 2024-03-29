import React, { createContext, useReducer, useContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
      case "ADD":
          return [...state, { id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img }];
      case "REMOVE":
          let newArr = [...state];
          newArr.splice(action.index, 1);
          return newArr;
          case "DROP":
            let empArray = []
            return empArray
        case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                }
                return arr
            })
            return arr
      default:
          console.log("error lol");
          return state;
  }
};



export const CartProvider = ({children})=>{
    const[state,dispatch] = useReducer(reducer,[])
    return(<CartStateContext.Provider value={state}>
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartStateContext.Provider>)
}

export const useCartState = () => {
    const context = useContext(CartStateContext);
    if (!context) {
      throw new Error('useCartState must be used within a CartProvider');
    }
    return context;
  };
  
  export const useCartDispatch = () => {
    const context = useContext(CartDispatchContext);
    if (!context) {
      throw new Error('useCartDispatch must be used within a CartProvider');
    }
    return context;
  };
