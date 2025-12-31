import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaShoppingCart, FaHeart, FaTruck, FaUndo } from "react-icons/fa";

const Products = () => {
      const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { type } = useParams(); 

  useEffect(() => {
    axios
      .get("https://curlyxuuuu.onrender.com/api/products")
      .then((res) => {
        if (type) {
          const filtered = res.data.filter(
            (p) => p.medicineType === type
          );
          setProducts(filtered);
        } else {
          setProducts(res.data);
        }
      })
      .catch((err) => console.error(err));
  }, [type]);

  return (
    <div>
      <Navbar />

      {/* ===== Banner ===== */}
      <section className="banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content d-md-flex justify-content-between align-items-center">
              <div className="mb-3 mb-md-0">
                <h2>Painkiller</h2>
                <p>
                  Browse trusted medicines for fast and effective pain relief
                </p>
              </div>

              <div className="page_link">
                <a href="/">Home</a>
                <a href="/products">Shop</a>
                <span>Painkiller</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Products Section ===== */}
      <section className="blog_area single-post-area area-padding bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <p className="mb-2 mb-md-0 text-muted" id="resultCount">
              Showing 1–12 of 15 results
            </p>

            <div>
              <select className="form-control sort-select">
                <option value="default">Default sorting</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
                <option value="name">Sort by name</option>
              </select>
            </div>
          </div>

         <div className="row mt-4">
  {products.length > 0 ? (
    products.map((product) => (
      <div className="bg-light p-4">
          <div className="container d-flex">
            <div
              className="card product-card shadow-sm"
              style={{ maxWidth: "350px", cursor: "pointer" }}
              onClick={() => navigate(`/products/${product._id}`)}
            >
              {/* Image */}
              <div className="position-relative overflow-hidden">
                {product.onSale && (
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    Sale!
                  </span>
                )}
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.name} />
              </div>

              {/* Body */}
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title mb-0">{product.name}</h5>

                  {/* Static rating (can be dynamic later) */}
                  <div className="text-warning">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                </div>

                <p className="card-text text-muted">
                  {product.category || "No category available"}
                </p>

                {/* Colors (optional) */}
                {product.colors?.length > 0 && (
                  <div className="mb-3">
                    <span className="text-muted small">Available Colors:</span>
                    <div className="mt-2 d-flex gap-2">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="rounded-circle border"
                          style={{
                            width: 16,
                            height: 16,
                            backgroundColor: color,
                            display: "inline-block",
                          }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    {product.oldPrice && (
                      <span className="text-muted text-decoration-line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                    <span className="h5 mb-0 ms-2 text-primary">
                      ${product.price}
                    </span>
                  </div>

                  <span
                    className={`badge ${product.quantity > 0 ? "bg-success" : "bg-danger"}`}
                  >
                    {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* Buttons */}
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    } }
                  >
                    <FaShoppingCart className="me-2" />
                    Add to Cart
                  </button>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaHeart className="me-2" />
                    Add to Wishlist
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between text-muted small">
                  <span>
                    <FaTruck className="me-2" />
                    Free Shipping
                  </span>
                  <span>
                    <FaUndo className="me-2" />
                    30 Days Return
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    ))
  ) : (
    /* EMPTY STATE */
    <div className="col-12 text-center py-5">
      <h4 className="fw-bold text-muted">
        No products available for this category
      </h4>
      <p className="text-muted mt-2">
        Please check other categories or come back later.
      </p>
    </div>
  )}
</div>

          
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Products;
