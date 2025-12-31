import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { cart, setCart } = useCart();

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item._id === id
            ? { ...item, qty: Math.max(1, item.qty - 1) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      <Navbar />
   
      <section className="cart_area py-5 bg-light">
        <div className="container">


          {cart.length === 0 ? (
            <div className="text-center py-5 bg-white rounded shadow-sm">
              <h4>Your cart is empty 🛒</h4>
              <p className="text-muted mt-2">
                Add some products to continue shopping
              </p>
              <a href="/products" className="btn btn-primary mt-3">
                Go to Shop
              </a>
            </div>
          ) : (
            <div className="row">
              {/* CART ITEMS */}
              <div className="col-lg-8">
                {cart.map((item) => (
                  <div
                    className="card mb-3 shadow-sm border-0"
                    key={item._id}
                  >
                    <div className="card-body">
                      <div className="row align-items-center">
                        {/* IMAGE */}
                        <div className="col-md-3 text-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: "100px" }}
                          />
                        </div>

                        {/* DETAILS */}
                        <div className="col-md-4">
                          <h6 className="mb-1 font-weight-bold">
                            {item.name}
                          </h6>
                          <small className="text-muted">
                            {item.category}
                          </small>
                        </div>

                        {/* QUANTITY */}
                        <div className="col-md-3">
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => decreaseQty(item._id)}
                            >
                              −
                            </button>
                            <span className="mx-3 font-weight-bold">
                              {item.qty}
                            </span>
                            <button
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => increaseQty(item._id)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* PRICE */}
                        <div className="col-md-2 text-right">
                          <p className="mb-1 font-weight-bold">
                            ${(item.price * item.qty).toFixed(2)}
                          </p>
                          <button
                            className="btn btn-link text-danger p-0"
                            onClick={() => removeItem(item._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ORDER SUMMARY */}
              <div className="col-lg-4">
                <div className="card shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="font-weight-bold mb-3">
                      Order Summary
                    </h5>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span>Shipping</span>
                      <span className="text-success">Free</span>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between font-weight-bold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <button className="btn btn-primary btn-block mt-4">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
