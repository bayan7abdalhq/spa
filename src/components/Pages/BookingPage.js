import "../BookingPage/Booking.css"
import BookingForm from "../BookingPage/BookingForm"
import BookNowButton from "../BookingPage/BookNowButton"
import Footer from "../common/Footer"
import HeaderPage from "../common/HeaderPage"
import Navbar from "../common/Navbar"
const BookingPage = () => {
    return (
        <>
            <div className="booking col-md-12 col-sm-12 col-xxl-12 col-lg-12 d-flex">
                <img src="images/booking.png" alt="booking page" className="position-fixed vh-100 w-100 img-fluid d-flex"></img>
                <div className="position-absolute top-0 col-12 col-md-12 col-sm-12 ">
                    <Navbar />
                    <HeaderPage title="BOOKING PAGE" />
                    <div className="row w-100 align-items-center justify-content-center">
                        <div className="mt-2 col-md-8 col-sm-8 col-lg-7 rounded bg-white p-4 shadow">
                            <BookingForm><div className="text-end"><BookNowButton /></div></BookingForm>
                        </div>
                    </div></div>
                <div className="mt-5 w-100 position-absolute top-100">
                    <Footer/>
                </div>
            </div></>);
}
export default BookingPage;
