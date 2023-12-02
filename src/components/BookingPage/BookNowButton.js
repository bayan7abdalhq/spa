import './Booking.css'
import { UserData } from "../Admin/UserData"
const Check = () => {
    
    const daySelect = document.getElementById("day-select").value;
    const timeSelect = document.getElementById("time-select").value;
    const serviceSelect = document.getElementById("service-select").value;
    const bookedDays = UserData.filter((element) =>
        element.serviceDay === daySelect
        && element.serviceTime === timeSelect
        && element.service === serviceSelect);
    console.log(bookedDays);
    if (bookedDays.length !== 0)
        return (
            alert("Already Booked , Please Choose another time or day")
        )



}
const BookNowButton = () => {


    return (
        <> <div className='booking'>
            <button type="submit" className="btn btn-spa" onClick={Check}>Book Now</button>
        </div>
        </>
    )
}

export default BookNowButton;