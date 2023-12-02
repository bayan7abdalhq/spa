import ServicesCard from "./ServicesCard";
import './ServicesHome.css';
function ServicesHome() {
  return (
    <>
      <div className="services d-flex col-12">
        <div className="container">
          <div className="row-services ">
            <div className="services-title p-3">
              <h1 className="mb-3">SERVICES WE PROVIDE</h1>
              <p className="fs-5">Our SPA center is first of its kind in palestine in services we provide and profisseinal services we have</p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <ServicesCard imag="./images/skincare.jpg" ser_card_title="SKIN CARE" ser_card_text="Choose from a variety of treatments that can help repair, rejuvenate, and refresh your skin. SPA curated selection of medical grade products and services are the gateway to the “Fountain Of You”." />
              <ServicesCard imag="./images/bodycare.jpg" ser_card_title="BODY CARE" ser_card_text="Having a spa body treatment yields a number of great benefits, from preventing the signs of aging and creating a sense of relaxation to flushing out toxins and promoting the appearance of glowing." />
              <ServicesCard imag="./images/haircare.jpg" ser_card_title="HAIR CARE" ser_card_text="Offering an unmatched assortment of Kalamazoo’s best salon services, including hair coloring, styling, treatments, and finishes, we utilize the industry’s best hair care products in our SPA center." />
              <ServicesCard imag="./images/facecare.jpg" ser_card_title="FACE CARE" ser_card_text="Aiming to help correct sun damage, limit the effects of environmental factors, and reduce stress, facials are a great way to kick back, relax, and unwind after a long tired day… or long couple of days! "/>
            </div>
          </div></div></div>
    </>
  );
}
export default ServicesHome;  