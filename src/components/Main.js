import { addToCart, deleteCart, removeFromCart } from "../Redux/cart/actions";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../Redux/product/action";
import { useEffect } from "react";

const Main = () => {
  // const productDatas = useSelector((state) => state);
  const dispatch = useDispatch();
  const productDatas = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <div style={{ display: "flex", margin: "auto" }}>
        <button onClick={() => dispatch(deleteCart(productData))}>
          Delete cart
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {productDatas?.length > 0 &&
          productDatas?.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #5400CF",
                margin: "20px",
                padding: "20px",
              }}
            >
              <img alt="photo" src={item?.image} width={"200px"} />
              <div>Name: {item?.name}</div>
              <div>Price: {item?.price}</div>
              <div>Color: {item?.color}</div>
              <div>Category: {item?.category}</div>
              <div>Brand: {item?.brand}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
                <button onClick={() => dispatch(removeFromCart(item.name))}>
                  Remove From Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
