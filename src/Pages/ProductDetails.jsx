import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`http://localhost:5009/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

const getSection = (type) =>
  product.sections?.find((section) => section.type === type);

  if (!product) return <p className="text-center mt-5">Loading...</p>;

  return (
    <>
      <Navbar />


<section className="product-details bg-light py-5">

        <div className="container mt-5">
          {/* ===== Top Section ===== */}
<div className="container py-5">
  <div className="row">

    {/* ===== LEFT : PRODUCT IMAGES ===== */}
    <div className="col-md-6 mb-4">
      <div className="card border-0">
        <img
          src={product.image}
          className="card-img-top rounded"
          alt={product.name}
          style={{ maxHeight: "420px", objectFit: "cover" }}
        />

        {/* Thumbnails (optional – reuse same image for now) */}
        <div className="card-body">
          <div className="row g-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div className="col-3" key={i}>
                <img
                  src={product.image}
                  className="img-thumbnail"
                  alt="Thumbnail"
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ===== RIGHT : PRODUCT INFO ===== */}
    <div className="col-md-6">

      <h1 className="h3 mb-2 fw-bold">{product.name}</h1>

      <p className="text-muted mb-1">
        <strong>Category:</strong> {product.category}
      </p>

      <p className="text-muted mb-3">
        <strong>Type:</strong> {product.medicineType}
      </p>

      <div className="mb-3">
        <span className="h4 text-primary fw-bold me-2">
          ${product.price}
        </span>
      </div>

      {/* ===== DESCRIPTION (BULLETS) ===== */}
      {product.description && (
        <ul className="mb-4 ps-3">
          {product.description
            .split(".")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((s, i) => (
              <li key={i}>{s}.</li>
            ))}
        </ul>
      )}

      {/* ===== QUANTITY ===== */}
      <div className="mb-4">
        <div className="d-flex align-items-center">
          <label className="me-2 fw-semibold">Quantity:</label>
          <select
            className="form-select w-auto"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ===== ADD TO CART ===== */}
      <div className="d-grid gap-2 mb-4">
        <button
          className="btn btn-dark"
          onClick={() => addToCart({ ...product, qty })}
        >
          Add to Cart
        </button>
      </div>

      {/* ===== TRUST INFO ===== */}
      <div className="mt-4">
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-truck text-primary me-2"></i>
          <span>Fast & secure delivery</span>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="fas fa-shield-alt text-primary me-2"></i>
          <span>Verified medicines only</span>
        </div>
        <div className="d-flex align-items-center">
          <i className="fas fa-check-circle text-primary me-2"></i>
          <span>Prescription checked where required</span>
        </div>
      </div>

    </div>
  </div>
</div>


          {/* ===== Tabs ===== */}
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-tabs mb-4">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "info" ? "active" : ""}`}
                    onClick={() => setActiveTab("info")}
                  >
                    Additional Info
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </button>
                </li>
              </ul>

              {/* ===== Tab Content ===== */}
             <div className="tab-content p-4 border rounded bg-white">
  {/* ===== Description ===== */}
  {activeTab === "description" && (
    <p>
      {getSection("description")?.content || "No description available"}
    </p>
  )}

  {/* ===== Additional Info ===== */}
  {activeTab === "info" && (
    <p>

         {getSection("table")?.content ? (
        <table className="table table-bordered">
          <tbody>
            {Object.entries(getSection("table").content).map(
              ([key, value], index) => (
                <tr key={index}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ) : (
        <p className="text-muted">No table data available</p>
      )}
    </p>
  )}

  {/* ===== Table Data ===== */}
  {activeTab === "reviews" && (
    <>
           {getSection("additional_info")?.content ||
        "No additional information available"}
    </>
  )}
</div>

            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default ProductDetails;
