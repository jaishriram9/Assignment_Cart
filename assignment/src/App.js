import React, { useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Products from "./Components/Products";

function App() {
  const [products, setproducts] = useState(Products);
  const [cartItems, setCartItems] = useState([]);

  const onAddItem = (product) => {
    const existingProduct = cartItems.find((x) => x.id === product.id);
    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existingProduct, qty: existingProduct.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveItem = (product) => {
    const existingProduct = cartItems.find((x) => x.id === product.id);
    if (existingProduct.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existingProduct, qty: existingProduct.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <div className="App_body">
        <ProductList
          products={products}
          onAddItem={onAddItem}
          onRemoveItem={onRemoveItem}
        ></ProductList>
        <Cart cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
