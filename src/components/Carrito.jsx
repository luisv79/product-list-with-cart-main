import React, { useState } from "react";
import caritoVacio from "../assets/images/illustration-empty-cart.svg";
import imgCerrar from "../assets/images/icon-remove-item.svg";
import imgEcologico from "../assets/images/icon-carbon-neutral.svg";
import imgCheck from "../assets/images/icon-order-confirmed.svg";

function Carrito({ cartItems, onRemove }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  return (
    <div className="cart-carrito">
       <h2>Your Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
      {cartItems.length === 0 ? (
        <div className="carrito-vacio">
          <img src={caritoVacio} alt="" />
          <p className="carrito-vacio">Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="mt-4 mb-4" key={item.name}>
              <h6>{item.name}</h6>
              <img onClick={() => onRemove(item.name)} className="img-cerrar" src={imgCerrar} alt="cerrar" />
              <div className="cart-carrito-x">{item.quantity}x <span>@ ${(item.price).toFixed(2)}</span> <span className="fw-medium"> ${(item.price * item.quantity).toFixed(2)}</span></div>
            </div>
          ))}
          <hr />
          <div className="total">
            <h6>Total:</h6>
            <span className="fw-bold fs-3">
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="boton-ecologico mt-4 mb-4">
             <img src={imgEcologico} alt="" /><p>This is a <span>carbon-neutral</span> delivery</p>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="botom-confirmar mt-4"
            data-bs-toggle="modal"
            data-bs-target="#orderModal"
          >
            Confirm Order
          </button>
        </>
      )}

      {/* MODAL BOOTSTRAP */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        id="orderModal"
        tabIndex="-1"
        aria-labelledby="orderModalLabel"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog">
          <div className="modal-content p-4">
            <div className="modal-header">
              <img src={imgCheck} alt="check" />
              
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-title" id="orderModalLabel">
            <h5 className="fs-2 fw-bold ms-2 mt-3">Order Confirmed</h5>
            </div>
            <div className="modal-body">
              {cartItems.map((item) => (
                <div key={item.name}>
                  <div className="imagen-modal">
                <img src={item.image} alt="image" />
                    <div className="texto-modal">
                <h6>{item.name}</h6>
                <div className="cart-carrito-x">{item.quantity}x <span>@ ${(item.price).toFixed(2)}</span></div>
                </div>
                <div className="precio-modal">
                <h6>${(item.price * item.quantity).toFixed(2)}</h6>
                </div>
                </div>
              </div>
              ))}
              <hr />
              <div className="total">
                <h6>Order Total:</h6>
                <span className="fw-bold fs-3">
                  $
                  {cartItems
                    .reduce((total, item) => total + item.price * item.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <div className="modal-footer">
              
              <button
            className="botom-nueva-orden mt-4"
          >
            Start New Order
          </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar modal al hacer clic fuera */}
      {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
    </div>
  );
}

export default Carrito;
