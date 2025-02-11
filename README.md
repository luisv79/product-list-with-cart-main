1️⃣Estructura del Proyecto
El proyecto que desarrollé es una aplicación de listado de postres con un carrito de compras en React. Utiliza Bootstrap para la maquetación y estilos, además de manejar estados con useState y efectos con useEffect.

Estructura de archivos
El proyecto sigue una estructura típica en React:

📂 src/
│── 📂 components/
│   ├── Card.jsx
│   ├── Productos.jsx
│   ├── Carrito.jsx
│   ├── DessertList.jsx
│── 📂 assets/ (imágenes y otros recursos)
│── App.jsx
│── index.jsx
│── data.json (almacena la información de los postres)
│── styles.css (hoja de estilos)


Cada componente tiene una responsabilidad específica, lo cual sigue el principio de "Single Responsibility" en programación.

Explicación de cada Componente
 Card.jsx - Componente de Tarjeta de Producto
 Este componente representa una tarjeta individual de un postre.

 Estados en este componente

useState para controlar la cantidad (quantity).
 Lógica de botones

Si quantity === 0, muestra el botón "Add to Cart".
Si quantity > 0, muestra los botones de + y - para incrementar o disminuir la cantidad.

 Eventos:

handleAddToCart(): Cambia la cantidad a 1 cuando se presiona el botón "Add to Cart".
handleIncrease(): Incrementa la cantidad en 1.
handleDecrease(): Reduce la cantidad en 1 y si llega a 0, desaparece el contador.
Ejemplo de cómo funciona:
Un usuario ve un producto y presiona "Add to Cart".
El estado quantity pasa de 0 → 1 y cambia la UI.
El usuario puede presionar los botones + o - para modificar la cantidad.
 Productos.jsx - Componente que Lista Todos los Productos
 Este componente muestra las tarjetas de los postres en un grid de 3 columnas.

 Lógica de renderizado

Divide los productos en filas de 3 para que se vean mejor en el diseño.
Usa map() para recorrer los productos y renderizar cada Card.
 Carrito.jsx - Componente del Carrito de Compras
 Se encarga de mostrar los productos agregados al carrito y su cantidad.

 Estados en este componente

cartItems → Lista de productos en el carrito.
 Lógica del carrito

Cálculo del total → Se obtiene sumando (precio * cantidad) de cada producto en el carrito.
Eliminar productos → Si el usuario presiona la X, se elimina el producto del carrito.

Agregar el Modal de Confirmación
El modal se activaba con Bootstrap y se construyó en JSX para mostrar los productos seleccionados en el carrito. Se incluyó en Carrito.jsx para abrirse cuando el usuario presiona "Confirm Order".

Conceptos Importantes que Aplique:
 - Componentes reutilizables: Card se usa múltiples veces en Productos.
 - Props para pasar información: Productos pasa datos a Card.
 - Estados con useState: Para manejar la cantidad y los productos en el carrito.
 - Efectos con useEffect: Para cargar los postres desde data.json.
 - Eventos en React: Manejo de clics (onClick) en botones.
 - Bootstrap para el diseño: Grid system, modales, botones estilizados.

 Resumen del Flujo Completo
- Se cargan los productos desde data.json.
- Los productos se renderizan en Productos.jsx con tarjetas de Card.jsx.
- El usuario presiona "Add to Cart", y el producto se agrega al carrito.
- El estado del carrito se actualiza en DessertList.jsx.
- En Carrito.jsx, se muestran los productos agregados con la opción de eliminar o modificar la cantidad.
- Al presionar "Confirm Order", se muestra un modal con el resumen del pedido.

# product-list-with-cart-main
