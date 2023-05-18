import { useContext } from "react";
import { ShopContext } from "../context";

function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
    } = props;

    const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(ShopContext);

    return (
        <li href="#!" className="collection-item">{name}{' '}
        <i className="material-icons item-quantity" onClick={() => decreaseQuantity(id)}>remove</i>x{quantity}{' '}
        <i className="material-icons item-quantity" onClick={() => increaseQuantity(id)}>add</i> = {price*quantity} coins
        <span href="#!" className="secondary-content">
            <i className="material-icons item-close" onClick={() => removeFromCart(id)}>close</i>
        </span>
        </li>
    )
}

export {CartItem}