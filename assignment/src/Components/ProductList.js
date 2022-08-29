import React from "react";
import './ProductList.css'
function ProductList(props) {
  const { products, onAddItem, onRemoveItem } = props;
  console.log("Products from list", products);
  return (
    <div className="productlist" style={{ border: "2px solid grey" }}>
        <h2>Product</h2>
      <ul >
        {products &&
          products.map((prod) => {
            return (
              <li>
                <span>{prod.name}</span>
                <span className="product_price">{prod.price}</span>{" "}

                <button>
                  <span onClick={() => onRemoveItem(prod)}>-</span>
                  <span className="product_qty">{prod.qty}</span>
                  <span onClick={() => onAddItem(prod)}>+</span>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ProductList;
