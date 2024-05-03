import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const resultData = useSelector((state) => state.cartData);
  console.warn(resultData, "state is not");
  return (

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          backgroundColor: "blue",
        }}
        >
          <Link to="/">
        <h1 style={{ display: "flex",
          justifyContent: "left",color:"white"}}>E Com</h1>
          </Link>
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
