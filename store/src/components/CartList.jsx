import { useContext } from "react";
import { ShopContext } from "../context";
import { CartItem } from "./CartItem";

function CartList() {
    const { order = [],
        handleCartVisibility = Function.prototype,
    } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <ul className="collection cart-list">
            <li href="#!" className="collection-item active">Cart</li>
            {
                order.length ? order.map(item =>
                (<CartItem key={item._id}
                    {...item} />
                ))
                    : (<li href="#!" className="collection-item">The cart is empty</li>)
            }
            <li href="#!" className="collection-item active">
                Total price: {totalPrice}
            </li>
            <li href="#!" className="collection-item">
                <button className="btn btn-small">Order</button>
            </li>
            <i className="material-icons basket-close" onClick={handleCartVisibility}>close</i>
        </ul>
    )
}

export { CartList }