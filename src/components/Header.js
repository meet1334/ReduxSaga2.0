import { useSelector } from "react-redux";

const Header = () => {
  const resultData = useSelector((state) => state.cartData);
  console.warn(resultData   , "state is not");
  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          height: "30px",
          width: "30px",
          borderRadius: "50%",
        }}
      >
        <span style={{ padding: "5px 10px" }}>{resultData?.length}</span>
      </div>
    </div>
  );
};

export default Header;
