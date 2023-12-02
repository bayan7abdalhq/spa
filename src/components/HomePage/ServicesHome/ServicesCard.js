import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="services-card">
        <img src={props.imag} alt="spa sevices"></img>
        <div className="card-body">
       <div className="text-center pt-3 text-white">
        <Link to ="/ServicesPage" className="h5 text-white">{props.ser_card_title}</Link>
         </div> <p className="ser-card-text">{props.ser_card_text}</p>
        </div>
      </div>
    </div>
  )
}
export default ServicesCard;