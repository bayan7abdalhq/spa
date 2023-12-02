import { Link } from 'react-router-dom';
import './ServicesPage.css';

const BookButton = () => {
    return (
        <>
            <Link to="/BookingPage" className="btnser btn m-2 fs-6">Book Now </Link>
        </>
    )
}

export default BookButton;  
