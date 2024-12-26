import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5">
        {cart.length === 0 ? (
          <div className="text-center">
            <h1>Your Cart is Empty</h1>
            <Link to="/" className="btn btn-warning mt-3">
              Continue Shopping...
            </Link>
          </div>
        ) : (
          cart.map((product) => (
            <div key={product.id} className="card mb-3 my-3">
              <div className="row g-0">
                {/* Image Section */}
                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                  <img
                    src={product.imgSrc}
                    className="img-fluid rounded-start"
                    alt={product.title}
                  />
                </div>

                {/* Product Details Section */}
                <div className="col-12 col-md-8">
                  <div className="card-body text-center text-md-start">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="d-flex justify-content-center justify-content-md-start">
                      <button className="btn btn-primary mx-2">
                        {product.price} ₹
                      </button>
                      <button className="btn btn-warning mx-2">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Buttons */}
      {cart.length !== 0 && (
        <div
          className="container text-center my-5 d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
          <button className="btn btn-warning mx-2 my-2">CheckOut</button>
          <button
            onClick={() => setCart([])}
            className="btn btn-danger mx-2 my-2"
          >
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
