import { useState } from "react";
import Carrito from "./components/Carrito";
import Productos from "./components/Productos";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (dessert) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dessert.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dessert.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...dessert, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (name, newQuantity) => {
    setCart((prevCart) =>
      newQuantity > 0
        ? prevCart.map((item) =>
            item.name === name ? { ...item, quantity: newQuantity } : item
          )
        : prevCart.filter((item) => item.name !== name)
    );
  };

  const handleRemoveFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <div className="container principal">
      <div className="row">
        <div className="col-md-8">
          <h1 className="titulo-principal">Desserts</h1>
          <Productos
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            cartItems={cart}
          />
        </div>
        <div className="col-md-4">
          <Carrito cartItems={cart} onRemove={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
