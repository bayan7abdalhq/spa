import React, { useState } from "react";
import Footer from "../common/Footer";
import Services from '../ServicesPage/Services';
import HeaderPage from '../common/HeaderPage';
import Navbar from '../common/Navbar';

const ServicesPage = () => {
  const [category, setCategory] = useState("skin-care");
  const eventHandler = (event) => {
    setCategory(event.target.id);
  }
  return (
    <>
      <Navbar />
      <HeaderPage title=" Services" />
      <div className="ser container card-effect">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="filser card border shadow p-4 mt-4">
              <div className="btn-group align-items-center justify-content-center" role="group" aria-label="Services">
                <button onClick={eventHandler} className="btn" id="skin-care">Skin Care </button>
                <button onClick={eventHandler} className="btn" id="salon-services">Salon Services </button>
                <button onClick={eventHandler} className="btn" id="massage">Massage </button>
                <button onClick={eventHandler} className="btn" id="body-care"> Body Care </button>
                <button onClick={eventHandler} className="btn" id="laser-servises"> Laser Services </button>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row mt-5">
                <Services categorytype={category} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};
export default ServicesPage;