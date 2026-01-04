import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useWishlist } from "../Context/WishListContext";
import { useCart } from "../Context/CartContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <section className="cart_area py-5 bg-light">
        <div className="container">
          <h3 className="mb-4 font-weight-bold">My Wishlist </h3>

          {wishlist.length === 0 ? (
            <div className="text-center py-5 bg-white rounded shadow-sm">
              <h4>Your wishlist is empty </h4>
              <p className="text-muted mt-2">
                Save products you love and come back later
              </p>
              <a href="/products" className="btn btn-primary mt-3">
                Browse Products
              </a>
            </div>
          ) : (
            <div className="row">
              {/* WISHLIST ITEMS */}
              <div className="col-lg-12">
                {wishlist.map((item) => (
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
                        <div className="col-md-5">
                          <h6 className="mb-1 font-weight-bold">
                            {item.name}
                          </h6>
                          <small className="text-muted">
                            {item.category}
                          </small>
                        </div>

                        {/* PRICE */}
                        <div className="col-md-2">
                          <p className="mb-0 font-weight-bold">
                            ${item.price}
                          </p>
                        </div>

                        {/* ACTIONS */}
                        <div className="col-md-2 text-right">
                          <button
                            className="btn btn-primary btn-sm mb-2 w-100"
                            onClick={() => addToCart(item)}
                          >
                            Add to Cart
                          </button>

                          <button
                            className="btn btn-outline-danger btn-sm w-100"
                            onClick={() => removeFromWishlist(item._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Wishlist;
