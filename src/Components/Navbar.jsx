import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSkype,
  FaVimeoV,
  FaEnvelope,
  FaWhatsapp,
  FaShoppingCart,
  FaUser,
  FaHeart
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishListContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header_area");
      if (window.scrollY > 100) {
        header.classList.add("navbar_fixed");
      } else {
        header.classList.remove("navbar_fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;
  const [menuOpen, setMenuOpen] = useState(false);

  // Sum of quantities
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const token = localStorage.getItem("token");
const userName = localStorage.getItem("userName");
const navigate = useNavigate();
const role= localStorage.getItem("userRole");
console.log("User Role:", role);

const logout = () => {
  localStorage.clear();
  navigate("/login");
};


  return (
    <header className="header_area">
      {/* ===== TOP BAR ===== */}
      <div className="top_menu">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Left */}
            <div className="d-flex align-items-center">
              <a className="dn_btn mr-3" href="mailto:healthsolutionmedcare@gmail.com">
                <FaEnvelope className="mr-2" />
                healthsolutionmedcare@gmail.com
              </a>

              <a
                href="https://wa.me/12063549780"
                target="_blank"
                rel="noopener noreferrer"
                className="dn_btn"
              >
                <FaWhatsapp className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Right Social */}
            <ul className="list header_social d-flex mb-0">
              <li className="ml-2"><a href="/"><FaFacebookF /></a></li>
              <li className="ml-2"><a href="/"><FaTwitter /></a></li>
              <li className="ml-2"><a href="/"><FaLinkedinIn /></a></li>
              <li className="ml-2"><a href="/"><FaSkype /></a></li>
              <li className="ml-2"><a href="/"><FaVimeoV /></a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV ===== */}
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand logo_h d-flex align-items-center" href="/">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ maxHeight: "100px" }}
              />
            </a>

            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="bar mt-1"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>


            {/* Menu */}
            <div
              className={`navbar-collapse justify-content-end ${menuOpen ? "show" : "collapse"
                }`}
            >

              <ul className="nav navbar-nav menu_nav align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>

                <li className="nav-item submenu dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Shop <span class="ml-1">&#9662;</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/products/type/Painkiller">
                        Painkiller
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/products/type/Anxiety-and-Antidepressant">
                        Anxiety-and-Antidepressant
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/products/type/SleepDisorder">
                        Sleep Disorder
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/products/type/hypertensio">
                        HyperTension
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/products/type/GeneralWellness">
                        Erection Dyfunction
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/products/type/WeightManagement">
                        Weight Management
                      </Link>
                    </li>

                  </ul>

                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/faq">FAQ</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                {/* ===== CART + PROFILE ICONS ===== */}
                <li className="nav-item  d-flex align-items-center ml-2" style={{ gap: "10px" }}>
                  <Link className="nav-link nav-icon-link nav-icon p-1 position-relative" to="/cart">
                    <FaShoppingCart size={20} />

                    {totalQty > 0 && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-2px",
                          right: "-10px",
                          backgroundColor: "#e53935",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: "bold",
                          lineHeight: 1,
                        }}
                      >
                        {totalQty > 99 ? "99+" : totalQty}
                      </span>
                    )}

                  </Link>
                  <Link
                    className="nav-link nav-icon-link nav-icon p-1 position-relative"
                    to="/wishlist"
                  >
                    <FaHeart size={20} />

                    {wishlistCount > 0 && (
                      <span
                        style={{
                          position: "absolute",
                          top: "-2px",
                          right: "-10px",
                          backgroundColor: "#ff4081",
                          color: "#fff",
                          borderRadius: "50%",
                          width: "18px",
                          height: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "11px",
                          fontWeight: "bold",
                        }}
                      >
                        {wishlistCount > 99 ? "99+" : wishlistCount}
                      </span>
                    )}
                  </Link>

                <li className="nav-item submenu dropdown">
  {!token ? (
    /* ===== NOT LOGGED IN ===== */
    <a href="/login" className="nav-link">
      <FaUser />
    </a>
  ) : (
    <>
      <a
        href="/#"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        👤 {userName} <span className="ml-1">&#9662;</span>
      </a>

      <ul className="dropdown-menu">
     <li className="nav-item">
  <Link
    className="nav-link"
    to={role === "admin" ? "/dashboard" : "/profile"}
  >
    Profile
  </Link>
</li>

        <li className="nav-item">
          <button
            className="nav-link text-danger bg-transparent border-0 w-100 text-left"
            onClick={logout}
          >
            Logout
          </button>
        </li>
      </ul>
    </>
  )}
</li>

                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
