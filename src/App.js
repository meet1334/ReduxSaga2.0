
import { addToCart } from "./Redux/actions";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  const productData = {
    name: "IPHONE",
    price: 26000,
    discount: 10,
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(productData))}>Add to cart</button>
    </div>
  );
};

export default App;
