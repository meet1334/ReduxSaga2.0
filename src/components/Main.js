import { addToCart, deleteCart, removeFromCart } from "../Redux/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../Redux/product/action";

const Main = () => {
  // const productDatas = useSelector((state) => state);
  const productDatas = useSelector((state) => state.productData);
  console.log(productDatas);

  const dispatch = useDispatch();
  const productData = {
    name: "IPHONE",
    price: 26000,
    discount: 10,
  };
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
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
      <div style={{ display: "flex", margin: "auto" }}>
        <button onClick={() => dispatch(getProductList())}>
          Get Product List
        </button>
      </div>
    </div>
  );
};

export default Main;
