import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext("without provider");

const initialState = {
    goods: [],
    loading: true,
    order: [],
    handleCartVisibility: false,
    alertName: '',
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' });
    };

    value.addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    value.increaseQuantity = (itemId) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: { id: itemId } });
    };

    value.decreaseQuantity = (itemId) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: { id: itemId } });
    };

    value.removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
    };

    value.handleCartVisibility = () => {
        dispatch({ type: 'HANDLE_CART_VISIBILITY' });
    };

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data });
    };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};