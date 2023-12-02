import './Booking.css'
import servicesData from "../ServicesPage/Services_Data"



const ServiceBooking = () => {
    return (
        <>
            <div className='booking col-12'>
                <div className="mb-3 mt-2">
                    <label htmlFor="services">Choose the service you want to book : </label>
                    <select name="services" id='service-select' className="col-3 col-md-3 mx-3 mt-2">
                        <option value=""> Select Your Service </option>
                        {
                            servicesData.map((data) => (
                                <option key={data.sername}> {data.sername}</option>
                            ))
                        }
                    </select>
                    <span id='result'> </span>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="date" >Pick A Day :</label>
                            <input type="date" id='day-select' required />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <select name="time" className="col-6 col-md-6 col-lg-6 mb-3 mx-3 mt-2" id='time-select'>
                                <option value="12:00PM">12:00PM</option>
                                <option value="3:00PM">3:00PM</option>
                                <option value="6:00PM">6:00PM</option>
                                <option value="9:00PM">9:00PM</option>

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );


}


export default ServiceBooking;