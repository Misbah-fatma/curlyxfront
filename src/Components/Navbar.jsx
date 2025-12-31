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
} from "react-icons/fa";
import { useEffect } from "react";

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
              <li className="ml-2"><a href="#"><FaFacebookF /></a></li>
              <li className="ml-2"><a href="#"><FaTwitter /></a></li>
              <li className="ml-2"><a href="#"><FaLinkedinIn /></a></li>
              <li className="ml-2"><a href="#"><FaSkype /></a></li>
              <li className="ml-2"><a href="#"><FaVimeoV /></a></li>
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
    src="/img/logo.png"
    alt="Logo"
    style={{ maxHeight: "100px" }}
  />
</a>


            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
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
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Shop <span class="ml-1">&#9662;</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/products/type/Anxiety Care">
                        Anxiety Care
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/products/type/Depression Care">
                        Depression Care
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/products/type/Pain Relief">
                        Pain Relief
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/products/type/Sleep & Insomnia">
                        Sleep & Insomnia
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/products/type/General Wellness">
                        General Wellness
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="/products/type/Prescription">
                        Prescription
                      </a>
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
                <li className="nav-item d-flex align-items-center ml-2" style={{ gap: "10px" }}>
                  <a className="nav-link nav-icon p-1" href="/cart">
                    <FaShoppingCart />
                  </a>

                  <a className="nav-link nav-icon p-1" href="/login">
                    <FaUser />
                  </a>
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
