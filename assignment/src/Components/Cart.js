import React from "react";

function Cart(props) {
  const { cartItems } = props;
    //   const totalPrice = cartItems && cartItems.reduce((acc,item)=>acc + item.qty * item.price);
    //   console.log("totalPrice",totalPrice)
  return (
    <div className="cart" style={{ border: "2px solid Grey" }}>
        <h2>Cart</h2>
      <div >
        {!cartItems && "No data Available"}
        {cartItems &&
          cartItems.map((item) => (
            <div>
              <span>{item.name}</span>
              <span>${item.qty * item.price}</span>
            </div>
          ))}
      </div>
      {/* <div>TotalPrice :{totalPrice}</div> */}
    </div>
  );
}

export default Cart;
