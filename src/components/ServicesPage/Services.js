import ServicesCard from "./ServicesCard";
import servicesData from "./Services_Data";
const Services = (props) =>
 {
  const typee = props.categorytype;
    return (
      <>
        {
          servicesData
          .filter
          (
              service => (service.cat === typee)
          )
          .map(
            (service) => 
          {
              return (
              <div className ="col-12 col-md-6 col-lg-6 col-xxl-6 mb-5">
              <ServicesCard  ImgServices={service.servimg} altt={service.altt} key= {service.number} title = {service.sername} star={props.stars} content={service.description} price ={service.rate} serlink = {service.pagelink}/>
              </div>
               )
          }
          )
        }
      </>
    )
  }
export default Services;