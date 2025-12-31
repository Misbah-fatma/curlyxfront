import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { FaShippingFast, FaClock, FaPhoneAlt,FaQuestion } from "react-icons/fa";

const Faq = () => {
const faqs = [
  {
    question: "What are your pharmacy hours?",
    answer: "Our pharmacy is open Monday to Saturday from 9:00 AM to 8:00 PM and closed on Sundays.",
    contact: "+1 234 567 890",
  },
  {
    question: "Do you provide home delivery?",
    answer: "Yes, we provide home delivery for prescriptions within our local area. Free shipping for orders above $50.",
    contact: "+1 234 567 891",
  },
  {
    question: "Can I refill my prescription online?",
    answer: "Absolutely! Upload your prescription on our website or mobile app to request a refill.",
    contact: "+1 234 567 892",
  },
];

  return (
    <div>
        <Navbar/>
    <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
        <div class="container">
          <div
            class="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div class="mb-3 mb-md-0">
              <h2>Faq</h2>
              <p>Belding years moveth earth green behold wherein</p>
            </div>
            <div class="page_link">
              <a href="index.html">Home</a>
              <a href="contact.html">Doctors</a>
            </div>
          </div>
        </div>
      </div>
    </section>

 <section className="team-area area-padding">
      <div className="container">
        {/* Heading */}
        <div className="area-heading row mb-4">
          <div className="col-md-5 col-xl-4">
            <h3>Pharmacy<br />Frequently Asked Questions</h3>
          </div>
          <div className="col-md-7 col-xl-8">
            <p>
              Have questions about our pharmacy services? Find answers to the most common queries below.
            </p>
          </div>
        </div>

        {/* FAQ Cards */}
        <div className="row">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card card-team shadow-sm position-relative">
  {/* Icon */}
  <div
    className="faq-icon d-flex justify-content-center align-items-center bg-primary text-white"
    style={{
      height: "80px",
      width: "80px",
      borderRadius: "50%",
      fontSize: "2rem",
      position: "absolute",
      top: "-40px", // half outside
      left: "50%",
      transform: "translateX(-50%)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      zIndex: 1,
    }}
  >
    <FaQuestion />
  </div>

  {/* Card Body */}
  <div className="card-team__body text-center p-4 pt-5 mt-4">
    <h5><a href="#">{faq.question}</a></h5>
    <p className="text-muted">{faq.answer}</p>
    <div className="team-footer d-flex justify-content-between mt-3">
      <span><FaShippingFast className="me-1" /> Delivery Info</span>
      <span><FaClock className="me-1" /> Hours</span>
      <span><FaPhoneAlt className="me-1" /> {faq.contact}</span>
    </div>
  </div>
</div>
            </div>
          ))}
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

        <section class="hotline-area text-center area-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2>Emergency hotline</h2>
                        <span>(+01) – 256 567 550</span>
                        <p class="pt-3">We provide 24/7 customer support. Please feel free to contact us <br/>for emergency case.</p>
                    </div>
                </div>
            </div>
        </section>

  
        <Footer/>
    </div>
  )
}

export default Faq