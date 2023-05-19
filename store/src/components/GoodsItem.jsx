import { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {

  const {
    _id,
    title,
    description,
    price,
    image,
  } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card" id={_id}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>
          {description}
        </p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() =>
          addToCart({
            _id,
            title,
            price,
          })
        }
        >
          buy
        </button>
        <span className="right price">{price} $</span>
      </div>
    </div>
  )
}

export { GoodsItem };