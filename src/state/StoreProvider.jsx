import React, {createContext, useReducer} from 'react';
import reducer from './reducer'

const initialState = {
    products: [
        {   
            productId:'',
            name: '',
            inInventory: 0,
            enabled: true,
            min: 0,
            max: 1
        }
    ],
    buys: {
        date: '',
        clientIdType: '',
        clientId: 0,
        clientName: '',
        products: [
          {
            productId: 0,
            name: '',
            quantity: 0
          }
        ]
      }
  };

const Store = createContext()

const StoreProvider = ({children}) => {
    const  [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Store.Provider value= {{state, dispatch}}>
            {children}
        </Store.Provider>
    )
}

export default StoreProvider
export {Store, initialState}