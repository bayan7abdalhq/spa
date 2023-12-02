import { Link } from "react-router-dom";
import "./BookButton.css"
const BookButton = () => {
    return (
        <>
            <div className="bookbtnn position-fixed">
                <Link to="/BookingPage" className="btn"><img src="images\booknow.jpg" alt="booknow" /></Link>
            </div>
        </>
    )
}
export default BookButton;