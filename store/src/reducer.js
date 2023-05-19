export function reducer(state, { type, payload }) {
    switch (type) {
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            };
        case "ADD_TO_CART":
            return { ...state, order: [...state.order, { ...payload, quantity: 1 }] };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((el) => el._id !== payload.id),
            };
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el._id === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el._id === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'CLOSE_ALERT':
            return {
                ...state,
                alertName: '',
            };
        case 'HANDLE_CART_VISIBILITY':
            return {
                ...state,
                cartVisibility: !state.cartVisibility,
            };
        default:
            return state;
    }
}