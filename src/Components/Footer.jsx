import React from 'react'

const Footer = () => {
  return (
          <footer className="footer-area area-padding-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 single-footer-widget">
              <h2>About <br /> Curalynx</h2>
              <ul className="mt-4">
                <li>
                  Promoting well-being with trusted information and premium
                  healthcare products for a healthier lifestyle.
                </li>
              </ul>


            </div>
            <div className="col-lg-2 col-sm-6 single-footer-widget">
              <h4>Essential Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Shop Medicines</a></li>
                <li><a href="#">Track Order</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-6 single-footer-widget">
              <h4>Our Policy</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditons</a></li>
                <li><a href="#">Refund</a></li>
                <li><a href="#">Return Policies</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 single-footer-widget">
              <h4>Newsletter</h4>
              <p>You can trust us. We only send promo offers,</p>
              <div className="form-wrap" id="mc_embed_signup">
                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get" className="form-inline">
                  <input className="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address'"
                    required="" type="email" />
                  <button className="click-btn btn btn-default">
                    <i className="ti-arrow-right"></i>
                  </button>
               <div style={{ position: 'absolute', left: '-5000px' }}>
                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
                  </div>

                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div className="row footer-bottom d-flex justify-content-between">
            <p className="col-lg-8 col-sm-12 footer-text m-0">
              Copyright © 2025 Curalynx. All rights reserved.

          
            </p>
            <div className="col-lg-4 col-sm-12 footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer