import React, { useState } from "react";
import imageCarrito from "../assets/images/icon-add-to-cart.svg";
import imagenIncrementar from "../assets/images/icon-increment-quantity.svg";
import imagenDecrementar from "../assets/images/icon-decrement-quantity.svg";

function Card({ image, name, category, price, onAddToCart, onUpdateQuantity, cartItems }) {
  const cartItem = cartItems.find((item) => item.name === name);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    onAddToCart({ image, name, category, price, quantity: 1 });
  };

  const handleIncrease = () => {
    onUpdateQuantity(name, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(name, quantity - 1);
    } else {
      onUpdateQuantity(name, 0);
    }
  };

  return (
    <div className="card carta">
      <img src={image} alt={name} />
      {quantity === 0 ? (
        <button onClick={handleAddToCart} className="boton-cart">
          <img src={imageCarrito} alt="Add to Cart" /> Add to Cart
        </button>
      ) : (
        <button className="boton-cart-incrementar">
          <div className="circulo">
            <img onClick={handleDecrease} src={imagenDecrementar} alt="decrement" />
          </div>
          <span>{quantity}</span>
          <div className="circulo">
            <img onClick={handleIncrease} src={imagenIncrementar} alt="increment" />
          </div>
        </button>
      )}

      <div className="card-body">
        <p className="card-body-nombre">{category}</p>
        <p className="card-body-titulo">{name}</p>
        <p className="card-body-precio">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Card;
