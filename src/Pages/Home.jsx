import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function HomePage() {
  return (
     <div>
<Navbar/>
    <section className="banner-area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <h1>Your Trusted<br/>
                Pharmacy Partner</h1>

              <p>
                We provide genuine medicines, healthcare essentials, and expert guidance to
                support your well-being every day. From prescriptions to wellness products,
                our pharmacy is committed to safe, reliable, and affordable healthcare for you
                and your family.
              </p>

              <a href="" className="main_btn">Order Medicines</a>
              <a href="" className="main_btn_light">Browse Products</a>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <div className="card card-feature text-center text-lg-left">
                <h3 className="card-feature__title">
                  <span className="card-feature__icon">
                    <i className="ti-layers"></i>
                  </span>
                  Premium Medications
                </h3>
                <p className="card-feature__subtitle">
                  Access a wide range of high-quality medicines designed to support both
                  mental and physical wellness, including treatments for anxiety, depression,
                  and pain relief.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-feature text-center text-lg-left">
                <h3 className="card-feature__title">
                  <span className="card-feature__icon">
                    <i className="ti-heart-broken"></i>
                  </span>
                  Trusted Health Solutions
                </h3>
                <p className="card-feature__subtitle">
                  Shop with confidence knowing every product is carefully selected,
                  authentic, and backed by expert guidance to ensure safe and effective care.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-feature text-center text-lg-left">
                <h3 className="card-feature__title">
                  <span className="card-feature__icon">
                    <i className="ti-headphone-alt"></i>
                  </span>
                  Doorstep Delivery
                </h3>
                <p className="card-feature__subtitle">
                  Enjoy fast, secure, and discreet delivery straight to your doorstep,
                  making it easy and convenient to manage your health from anywhere.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="service-area area-padding-top">
        <div className="container">

          <div className="area-heading row">
            <div className="col-md-5 col-xl-4">
              <h3>Professional<br/>
                Health Services</h3>
            </div>
            <div className="col-md-7 col-xl-8">
              <p>
                We provide expert-led healthcare solutions designed around your needs.
                From professional consultations to real-time assistance and easy online
                ordering, our services ensure safe, personalized, and convenient care
                at every step of your health journey.
              </p>
            </div>
          </div>

          <div className="row">

            <div className="col-md-6 col-lg-4">
              <div className="card-service text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-service__icon">
                  <i className="flaticon-brain"></i>
                </span>
                <h3 className="card-service__title">Professional Consultation</h3>
                <p className="card-service__subtitle">
                  Our experts provide personalized consultations to understand your
                  health needs and recommend suitable medications, guiding you
                  through your treatment journey with ongoing support.
                </p>
                <a className="card-service__link" href="#">Learn More</a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card-service text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-service__icon">
                  <i className="flaticon-tooth"></i>
                </span>
                <h3 className="card-service__title">Customized Care Plan</h3>
                <p className="card-service__subtitle">
                  We create personalized care plans tailored to your unique health
                  requirements, ensuring effective treatment and long-term
                  well-being with expert guidance at every stage.
                </p>
                <a className="card-service__link" href="#">Learn More</a>
              </div>
            </div>


            <div className="col-md-6 col-lg-4">
              <div className="card-service text-center text-lg-left mb-4 mb-lg-0">
                <span className="card-service__icon">
                  <i className="flaticon-face"></i>
                </span>
                <h3 className="card-service__title">Real-Time Assistance</h3>
                <p className="card-service__subtitle">
                  Get immediate support for your questions or orders through our
                  live chat. Enjoy a seamless online ordering experience with
                  reliable doorstep delivery designed for your comfort and care.
                </p>
                <a className="card-service__link" href="#">We Are Here</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-6 offset-xl-7 col-xl-5">
              <div className="about-content">

                <h4>Top Health Solutions<br/>
                  Designed Just for You
     </h4>

                <h6>
                  Trusted medications, expert guidance, and personalized care
                  to support your mental and physical well-being.
                </h6>

                <p>
                  We provide a wide range of premium health solutions tailored to
                  your unique needs. From expert consultations to safe, reliable
                  medications and convenient doorstep delivery, our goal is to
                  make quality healthcare accessible, simple, and stress-free
                  for you every day.
                </p>

                <a className="link_one" href="#">Learn More</a>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area area-padding">
        <div className="container">

          <div className="area-heading row">
            <div className="col-md-5 col-xl-4">
              <h3>What Our<br/>
                Customers Say</h3>
            </div>
            <div className="col-md-7 col-xl-8">
              <p>
                Real experiences from customers who trust us for their health needs.
                From expert guidance to fast delivery, discover how we make healthcare
                simple, safe, and reliable every day.
              </p>
            </div>
          </div>

          <div className="row">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-team">
                <img className="card-img rounded-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KUTCvpajEUZ_arWsbA9GUD6OwfhmzUCXZw&s" alt="Customer"/>
                  <div className="card-team__body text-center">
                    <h3><a href="#">Sarah M.</a></h3>
                    <p>Verified Customer</p>

                    <p className="mt-3">
                      “The consultation was professional and very helpful. I received
                      the right guidance and my medicines were delivered quickly and
                      discreetly. Highly recommended!”
                    </p>

                    <div className="team-footer d-flex justify-content-center">
                      <ul className="card-team__social">
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-team">
                <img className="card-img rounded-0" src="https://www.svgrepo.com/show/192244/man-user.svg" alt="Customer"/>
                  <div className="card-team__body text-center">
                    <h3><a href="#">James R.</a></h3>
                    <p>Verified Customer</p>

                    <p className="mt-3">
                      “Ordering online was incredibly easy, and the support team
                      answered my questions instantly. Reliable service and genuine
                      medicines delivered on time.”
                    </p>

                    <div className="team-footer d-flex justify-content-center">
                      <ul className="card-team__social">
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>

 
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card card-team">
                <img className="card-img rounded-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJaBE1zGqFHvIzpdYXTr1d8jsfO2ywxZceFw&s" alt="Customer"/>
                  <div className="card-team__body text-center">
                    <h3><a href="#">Emily K.</a></h3>
                    <p>Verified Customer</p>

                    <p className="mt-3">
                      “Excellent service and great care. The personalized recommendations
                      really helped me, and the delivery was fast and secure. I’ll
                      definitely order again.”
                    </p>

                    <div className="team-footer d-flex justify-content-center">
                      <ul className="card-team__social">
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                        <li><i className="ti-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>
      <section className="appointment-area">
        <div className="container">

          <div className="appointment-inner">
            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <h3>Have Some Questions?</h3>
                <div className="accordion" id="accordionExample">

      
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Are your medications genuine and safe?
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        Yes. All our medications are sourced from licensed manufacturers and
                        verified suppliers. We strictly follow quality and safety standards
                        to ensure you receive authentic and effective products every time.
                      </div>
                    </div>
                  </div>

   
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Do I need a prescription to order medicines?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                        Prescription requirements depend on the medication. For prescription-only
                        medicines, you can upload a valid prescription during checkout or consult
                        with our experts for proper guidance.
                      </div>
                    </div>
                  </div>

         
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How long does delivery usually take?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        Delivery times vary based on your location, but most orders are delivered
                        within 2–5 business days. We ensure fast, secure, and discreet delivery
                        straight to your doorstep.
                      </div>
                    </div>
                  </div>

          
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Can I consult a healthcare professional before ordering?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div className="card-body">
                        Absolutely. Our qualified professionals offer confidential consultations
                        to help assess your health needs and recommend suitable medications,
                        ensuring safe and effective treatment.
                      </div>
                    </div>
                  </div>


                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Is my personal and payment information secure?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div className="card-body">
                        Yes. We use secure encryption and trusted payment gateways to protect
                        your personal and payment information. Your privacy and data security
                        are our top priorities.
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="testimonial">
        <div className="container">
          <div className="testi_slider owl-carousel owl-theme">
            <div className="item">
              <div className="testi_item">
                <div className="testimonial_image">
                  <img src="img/elements/tes1.jpg" alt=""/>
                  </div>
                <div className="testi_item_content">
                  <p>
                    “ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Can't him fowl his can not ready for game”
                  </p>
                  <h4>- Dr. Suzanne Holroyd -</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testi_item">
                <div className="testimonial_image">
                  <img src="img/elements/tes1.jpg" alt=""/>
                  </div>
                <div className="testi_item_content">
                  <p>
                    “ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Can't him fowl his can not ready for game”
                  </p>
                  <h4>- Dr. Suzanne Holroyd -</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testi_item">
                <div className="testimonial_image">
                  <img src="img/elements/tes1.jpg" alt=""/>
                  </div>
                <div className="testi_item_content">
                  <p>
                    “ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Can't him fowl his can not ready for game”
                  </p>
                  <h4>- Dr. Suzanne Holroyd -</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hotline-area text-center area-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Pharmacy Support Hotline</h2>
              <span>+1 206 354 9780</span>
              <p className="pt-3">
                We provide 24/7 customer and medication support.<br/>
                  Contact us anytime for orders, consultations, or urgent assistance.
                </p>
            </div>
          </div>
        </div>
      </section>
<section className="brands-area background_one py-5">
  <div className="container">

    {/* Heading */}
    <div className="row mb-5 align-items-center">
      <div className="col-md-5 col-xl-4 mb-3 mb-md-0">
        <h3 className="fw-bold">
          Latest Health <br />
          & Pharmacy Updates
        </h3>
      </div>
      <div className="col-md-7 col-xl-8">
        <p className="text-muted mb-0">
          Stay informed with expert insights, medication guides, and wellness tips
          to help you make better health decisions every day.
        </p>
      </div>
    </div>

    {/* Cards */}
    <div className="row g-4">

      {/* Card 1 */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <img
            src="img/blog/1.jpg"
            className="card-img-top"
            alt="blog"
          />
          <div className="card-body d-flex flex-column">
            <div className="mb-2">
              <small className="text-muted">
                pharmacy, medication, health
              </small>
            </div>

            <h5 className="card-title">
              How to Safely Use Prescription Medications
            </h5>

            <div className="mt-auto d-flex justify-content-between">
              <small className="text-muted">
                <i className="ti-comments me-1"></i>12 comments
              </small>
              <small className="text-muted">
                <i className="ti-heart me-1"></i>24 likes
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <img
            src="img/blog/2.jpg"
            className="card-img-top"
            alt="blog"
          />
          <div className="card-body d-flex flex-column">
            <div className="mb-2">
              <small className="text-muted">
                wellness, mental health
              </small>
            </div>

            <h5 className="card-title">
              Managing Anxiety & Sleep Disorders Effectively
            </h5>

            <div className="mt-auto d-flex justify-content-between">
              <small className="text-muted">
                <i className="ti-comments me-1"></i>8 comments
              </small>
              <small className="text-muted">
                <i className="ti-heart me-1"></i>19 likes
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <img
            src="img/blog/3.jpg"
            className="card-img-top"
            alt="blog"
          />
          <div className="card-body d-flex flex-column">
            <div className="mb-2">
              <small className="text-muted">
                pain relief, care
              </small>
            </div>

            <h5 className="card-title">
              Understanding Pain Management Treatments
            </h5>

            <div className="mt-auto d-flex justify-content-between">
              <small className="text-muted">
                <i className="ti-comments me-1"></i>6 comments
              </small>
              <small className="text-muted">
                <i className="ti-heart me-1"></i>15 likes
              </small>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<Footer/>
      </div>
  );
}
