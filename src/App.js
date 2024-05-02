
import { addToCart } from "./Redux/cart/actions";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  const dispatch = useDispatch();
  const productData = {
    name: "IPHONE",
    price: 26000,
    discount: 10,
  };
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
};

export default App;
