import { useEffect, useState } from "react";
import Card from "./Card";

function Productos({ onAddToCart, onUpdateQuantity, cartItems }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al cargar datos:", error));
  }, []);

  return (
    <div className="productos-container">
      <div className="row">
        {data.map((item) => (
          <div key={item.name} className="col-md-4">
            <Card
              image={item.image.thumbnail}
              name={item.name}
              category={item.category}
              price={item.price}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              cartItems={cartItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
