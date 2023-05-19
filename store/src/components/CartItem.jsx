import { useContext } from "react";
import { ShopContext } from "../context";

function CartItem(props) {
    const {
        _id,
        title,
        price,
        quantity,
    } = props;

    const {removeFromCart, increaseQuantity, decreaseQuantity} = useContext(ShopContext);

    return (
        <li href="#!" className="collection-item">{title}{' '}
        <i className="material-icons item-quantity" onClick={() => decreaseQuantity(_id)}>remove</i>x{quantity}{' '}
        <i className="material-icons item-quantity" onClick={() => increaseQuantity(_id)}>add</i> = {price*quantity} $
        <span href="#!" className="secondary-content">
            <i className="material-icons item-close" onClick={() => removeFromCart(_id)}>close</i>
        </span>
        </li>
    )
}

export {CartItem}