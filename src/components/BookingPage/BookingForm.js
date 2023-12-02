import './Booking.css'
import ServiceBooking from './ServicesBooking'
const BookingForm = (props) => {
    
    return (
        <><div className='booking'>
            <form className="was-validated">
                <div className="row">
                    <div className="col-md-6 mb-3 mt-2">
                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                        <input type="name" id='full-name' className="form-control" aria-describedby="nameHelp" placeholder="Required Name" required />
                    </div>
                    <div className="col-md-6 mb-3 mt-2">
                        <label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
                        <input type="name" id='phone-number' className="form-control" aria-describedby="numberHelp" placeholder="Required Number" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Required Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="address" className="form-control"  id="address" aria-describedby="addressHelp" placeholder="Required Address" required />
                </div>
                <ServiceBooking />
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" data-bs-toggle="modal" data-bs-target="#exampleModal"></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1" data-bs-toggle="modal" data-bs-target="#exampleModal">remind me</label></div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Thank You</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                We will remind you of the appointment by e-mail one day before the booked date
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ok!</button>
                            </div>
                        </div>
                    </div>
                </div>
                {props.children}
            </form>
        </div>
        
        </>
    )
}
export default BookingForm;
