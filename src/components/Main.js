import { addToCart, deleteCart, removeFromCart } from "../Redux/actions";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const productData = {
    name: "IPHONE",
    price: 26000,
    discount: 10,
  };
  return (
    <div style={{display:"flex",gap:"20px",flexDirection:"column"}}>
      <div style={{ display: "flex", margin: "auto" }}>
        <button onClick={() => dispatch(addToCart(productData))}>
          Add to cart
        </button>
      </div>
      <div style={{ display: "flex", margin: "auto" }}>
        <button onClick={() => dispatch(removeFromCart(productData.name))}>
          Remove From cart
        </button>
      </div>
      <div style={{ display: "flex", margin: "auto" }}>
        <button onClick={() => dispatch(deleteCart(productData))}>
          Delete cart
        </button>
      </div>
    </div>
  );
};

export default Main;
