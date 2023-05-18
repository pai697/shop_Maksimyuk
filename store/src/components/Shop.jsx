import { useEffect, useContext, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import { ShopContext } from '../context';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { CartList } from './CartList';
import { Alert } from './Alert';

function Shop() {
    const { loading, order, cartVisibility, alertName, setGoods } = useContext(
        ShopContext
    );

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <main className='container content'>
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList />}
            {cartVisibility && <CartList />}
            {alertName && <Alert />}
        </main>
    );
}

export { Shop };