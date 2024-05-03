import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount = cartData
    ?.map((item) => item.price)
    ?.reduce((prev, next) => prev + next);
  return (
    <div>
      <h1>Cart Page</h1>
      <div
        style={{
          display: "flex",
          marginLeft: "20px",
          marginRight: "20px",
          gap: "30px",
        }}
      >
        <table style={{ flex: "65%", borderCollapse: "collapse" }}>
          <tr style={{ border: "1px solid " }}>
            <td style={{ border: "1px solid", padding: "5px 10px" }}>Name</td>
            <td style={{ border: "1px solid", padding: "5px 10px" }}>Color</td>
            <td style={{ border: "1px solid", padding: "5px 10px" }}>Price</td>
            <td style={{ border: "1px solid", padding: "5px 10px" }}>Brand</td>
            <td style={{ border: "1px solid", padding: "5px 10px" }}>
              Category
            </td>
          </tr>

          {cartData?.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid", padding: "5px 10px" }}>
                {item?.name}
              </td>
              <td style={{ border: "1px solid", padding: "5px 10px" }}>
                {item?.color}
              </td>
              <td style={{ border: "1px solid", padding: "5px 10px" }}>
                {item?.price}
              </td>
              <td style={{ border: "1px solid", padding: "5px 10px" }}>
                {item?.brand}
              </td>
              <td style={{ border: "1px solid", padding: "5px 10px" }}>
                {item?.category}
              </td>
            </tr>
          ))}
        </table>
        <div
          style={{
            flex: "33%",
            borderCollapse: "collapse",
          }}
        >
          <div
            style={{
              border: "1px solid",
              padding: "5px 10px",
              marginBottom: "10px",
            }}
          >
            <span style={{ justifyContent: "space-around" }}>Amount:</span>
            <span style={{ marginLeft: "30px" }}>{amount}</span>
          </div>
          <div
            style={{
              border: "1px solid",
              padding: "5px 10px",
              marginBottom: "10px",
            }}
          >
            <span style={{ justifyContent: "space-around" }}>Discount:</span>
            <span style={{ marginLeft: "30px" }}>{amount / 10}</span>
          </div>
          <div
            style={{
              border: "1px solid",
              padding: "5px 10px",
              marginBottom: "10px",
            }}
          >
            <span style={{ justifyContent: "space-around" }}>Tax:</span>
            <span style={{ marginLeft: "30px" }}>-</span>
          </div>
          <div
            style={{
              border: "1px solid",
              padding: "5px 10px",
              marginBottom: "10px",
            }}
          >
            <span style={{ justifyContent: "space-around" }}>Total:</span>
            <span style={{ marginLeft: "30px" }}>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
