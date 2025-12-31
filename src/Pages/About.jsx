import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
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
                                <h2>About Us</h2>
                                <p>Belding years moveth earth green behold wherein</p>
                            </div>
                            <div className="page_link">
                                <a href="index.html">Home</a>
                                <a href="contact.html">About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-area mb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-6 offset-xl-7 col-xl-5">
                            <div className="about-content">

                                <h4>Our Commitment<br />
                                    Goes Beyond<br />
                                    Medicines
                                </h4>

                                <h6>
                                    We believe healthcare is built on confidence, care, and meaningful support
                                    tailored to every individual.
                                </h6>

                                <p>
                                    At Curalynx, our approach focuses on more than supplying medications.
                                    We aim to guide, inform, and stand by you throughout your wellness journey.
                                    From reliable products to expert advice, we are dedicated to helping you
                                    make informed decisions and feel supported at every stage of your health.
                                </p>

                                <a className="link_one" href="#">Learn More</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="service-area area-padding-top">
                <div className="container">

                    <div className="area-heading row">
                        <div className="col-md-5 col-xl-4">
                            <h3>Our Purpose<br />
                                & Care Promise</h3>
                        </div>
                        <div className="col-md-7 col-xl-8">
                            <p>
                                We are dedicated to delivering trusted pharmaceutical services that
                                put people first. By combining expert care, ethical practices, and
                                modern solutions, we support individuals in making confident health
                                decisions while strengthening a healthier, connected community.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card-service text-center text-lg-left mb-4 mb-lg-0">
                                <span className="card-service__icon">
                                    <i className="flaticon-brain"></i>
                                </span>
                                <h3 className="card-service__title">Dedicated Care Support</h3>
                                <p className="card-service__subtitle">
                                    Work closely with a qualified pharmacist who understands your
                                    health needs. From medication guidance to lifestyle advice,
                                    we help keep your treatment aligned and effective.
                                </p>
                                <a className="card-service__link" href="#">Explore Care</a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card-service text-center text-lg-left mb-4 mb-lg-0">
                                <span className="card-service__icon">
                                    <i className="flaticon-tooth"></i>
                                </span>
                                <h3 className="card-service__title">Smart Health Management</h3>
                                <p className="card-service__subtitle">
                                    Stay consistent with your medications through proactive refill
                                    alerts and structured support. Our system is designed to make
                                    ongoing care simpler, reliable, and stress-free.
                                </p>
                                <a className="card-service__link" href="#">Stay On Track</a>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="card-service text-center text-lg-left mb-4 mb-lg-0">
                                <span className="card-service__icon">
                                    <i className="flaticon-face"></i>
                                </span>
                                <h3 className="card-service__title">Always-On Care Concierge</h3>
                                <p className="card-service__subtitle">
                                    Access professional assistance whenever you need it. Our care
                                    concierge is available around the clock to answer questions,
                                    support orders, and ensure peace of mind—day or night.
                                </p>
                                <a className="card-service__link" href="#">We’re Available</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="appointment-area area-padding-top">
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
                                    <img src="img/elements/tes1.jpg" alt="" />
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
                                    <img src="img/elements/tes1.jpg" alt="" />
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
                                    <img src="img/elements/tes1.jpg" alt="" />
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

            <section className="brands-area border-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="owl-carousel brand-carousel">

                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell">
                                        <img src="img/brand/1.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell">
                                        <img src="img/brand/2.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell">
                                        <img src="img/brand/3.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell">
                                        <img src="img/brand/4.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell">
                                        <img src="img/brand/5.png" alt="" />
                                    </div>
                                </div>

                                <div className="single-brand-item d-table">
                                    <div className="d-table-cell">
                                        <img src="img/brand/3.png" alt="" />
                                    </div>
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

export default About