import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../Redux/product/action";
const Header = () => {
  const dispatch = useDispatch();
  const resultData = useSelector((state) => state.cartData);
  console.warn(resultData, "state is not");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        backgroundColor: "blue",
        // width:"100%",
      }}
    >
      <div
        style={{
          // padding: "3px 5px",
          marginLeft: "-50px",
          marginTop: "50px",
        }}
      >
        <div style={{ height: "30px", width: "250px" }}>
          <input
            type="text"
            style={{ width: "250px", marginLeft: "-40px" }}
            onChange={(event) => dispatch(productSearch(event.target.value))}
            placeholder="Search As You Wish..."
          />
        </div>
      </div>
      <div>
        <Link to="/">
          <h1 style={{ color: "white" }}>E Com</h1>
        </Link>
      </div>

      <div
        style={{
          backgroundColor: "white",
          color: "black",
          height: "30px",
          width: "30px",
          borderRadius: "50%",
        }}
      >
        <Link to="/cart">
          <span style={{ padding: "5px 10px" }}>{resultData?.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
