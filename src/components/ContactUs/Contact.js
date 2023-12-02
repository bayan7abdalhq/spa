import Footer from "../common/Footer";
import HeaderPage from "../common/HeaderPage";
import Navbar from "../common/Navbar";
import "./Contact.css"
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact mb-5">
        <img src='images\contact.png' className="d-block w-100 img-fuild" alt="homeslider" />
        <HeaderPage title="CONTACT US" />
        <div className="m-5">
          <h1>Questions for Our Full-Service Spa and Salon? Contact Us!</h1>
          <p className="fs-5 mt-4">If you have questions about our salon and spa services, whether they are about massage therapy, manicures and pedicures,
            or anything in between, our team will gladly offer an answer. With a professional, knowledgeable staff that have distinguished themselves in their
            fields, we’re confident that no matter what concerns or questions you may have we can provide you with the information that you need.<br />
            A wellness center offers a well-rounded relaxation and fitness services for tired body and stressed mind. Nevertheless, everyone deserves to relax and rewind from the pressures
            of modern life. Being treated in a wellness center is a well-deserved.</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 col-xxl-6">
              <form className="contactform p-3">
                <div className="row">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Name" name="name" /></div>
                  <div className="col">
                    <input type="phone" className="form-control mb-4" placeholder="Phone" name="phone" />
                  </div>
                </div>
                <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Email" />
                <textarea className="form-control mb-4" id="exampleFormControlTextarea1" placeholder="How may we help you?" rows="7"></textarea>
                <button className="btn contactbtn mb-5" type="submit">SEND MESSAGE</button>
              </form>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xxl-6 ">
              <iframe title ="map" className="gmap_iframe w-100 h-100 mapframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>)
}
export default Contact;