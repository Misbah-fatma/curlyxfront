import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="banner_area">
                <div className="banner_inner d-flex align-items-center">
                    <div className="container">
                        <div
                            className="banner_content d-md-flex justify-content-between align-items-center"
                        >
                            <div className="mb-3 mb-md-0">
                                <h2>Contact</h2>
                                <p>Belding years moveth earth green behold wherein</p>
                            </div>
                            <div className="page_link">
                                <a href="index.html">Home</a>
                                <a href="contact.html">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section area-padding bg-light">
                <div className="container">
                <div className="d-none d-sm-block mb-5 pb-4">
  <div style={{ height: "480px", width: "100%" }}>
    <iframe
      title="Google Map"
      src="https://www.google.com/maps?q=New+York&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


                    <div className="row bg-white p-4">
                        <div className="col-12">
                            <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm">Send Message</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3><a href="tel:454545654">+1 206 354 9780</a></h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3><a href="mailto:support@colorlib.com">healthsolutionmedcare@gmail.com</a></h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

  
            <Footer />
        </div>
    )
}

export default Contact