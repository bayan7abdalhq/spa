import { Link } from 'react-router-dom';
import './HomeHeader.css';
const HeadCarousel = (props) => {
    return (
        <>
            {/* Here I designed the Carousel because it is the same,
     with different sentences, to prevent repetition in the main file */}
            <div className='head'>
                <img src='images\head.png' className="col-12 imgback img-fluid" alt="homeslider"/>
                <div className='col-12 col-md-7 col-lg-7 col-sm-6 col-xl-7 container cont justify-content-center position-absolute top-50 start-50 translate-middle d-flex align-items-center pb-5 pt-5'>
                    <div className="h1 fs-2 fw-semibold text-center mb-4">{props.sentence}</div>
                    <Link to={props.link} className="btn headbtn rounded-0 shadow p-3 fs-5 border">{props.btntitle}</Link>
                </div>
            </div>
        </>
    )
}
export default HeadCarousel;