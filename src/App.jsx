
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]); // Cart state
  const cartItemCount = cart.length; // Calculate the number of items in the cart

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e')",
              }}
              bis_label="style"
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                {cartItemCount > 0 && ( // Display the count only when items are in the cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Header />
      <ProductList cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            With this shop homepage template
          </p>
        </div>
      </div>
    </header>
  );
};

const ProductCard = ({
  imageSrc,
  productName,
  sale,
  oldPrice,
  price,
  rating,
  cart,
  setCart,
}) => {
  const [inCart, setInCart] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Star-icon.png" style={{ width: "30px" }} />
      );
    }
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        {stars}
      </div>
    );
  };

  const addToCart = () => {
    const newItem = {
      imageSrc,
      productName,
      price,
    };
    
    setCart([...cart, newItem]);
    setInCart(true);
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter(
      (item) => item.productName !== productName
    );
    setCart(updatedCart);
    setInCart(false);
  };

  return (
    <div className="col mb-5" style={{ width: '300px', height: 'auto' }}>
      <div className="card h-100">
        {sale && (
          <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>
            Sale
          </div>
        )}
        <img className="card-img-top" src={imageSrc} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{productName}</h5>
            {renderStars(rating)}
            <div className="d-flex justify-content-center">
              {oldPrice && (
                <span className="text-muted text-decoration-line-through me-2">${oldPrice}</span>
              )}
              {price && (
                <span>${price}</span>
              )}
            </div>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {inCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={removeFromCart}>Remove from Cart</button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>Add to Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ cart, setCart }) => {
  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
        
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Fancy Product"
          price="40.00 - $80.00"
          rating={3}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Special Item"
          oldPrice="20.00"
          price="18.00"
          sale={true}
          rating={5}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Sale Item"
          oldPrice="50.00"
          price="25.00"
          rating={5}
          sale={true}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Popular Item"
          price="40.00"
          rating={3}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Sale Item"
          oldPrice="50.00"
          price="25.00"
          rating={5}
          sale={true}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Fancy Product"
          price="120.00 - $280.00"
          rating={4}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Special Item"
          oldPrice="20.00"
          price="18.00"
          rating={4}
          sale={true}
          cart={cart}
          setCart={setCart}
        />
        <ProductCard
          imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          productName="Popular Item"
          price="40.00"
          rating={5}
          cart={cart}
          setCart={setCart}
        /> 
      </div>
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div className="container px-4 px-lg-5 mt-5">
      <h2>Cart Items</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.imageSrc} alt={item.productName} />
            {item.productName}: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
