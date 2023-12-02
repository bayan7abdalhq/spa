import './HomeHeader.css';
import HeadCarousel from './HeadCarousel';
const HomeHeader = () => {
  return (
    <div className='head'>
      <div id="homeheadercarousel" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button data-bs-target="#homeheadercarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button data-bs-target="#homeheadercarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button data-bs-target="#homeheadercarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button data-bs-target="#homeheadercarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button data-bs-target="#homeheadercarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <HeadCarousel sentence="Hi there! If you are looking for beauty , you are in the right place! Welcome to SPA center" btntitle="Read More About SPA" link="/About" /></div>

          <div className="carousel-item">
            <HeadCarousel sentence="You can book at any time! And you only need small deposit of the amount!" btntitle="Book Now!" link="/BookingPage" /></div>

          <div className="carousel-item">
            <HeadCarousel sentence="Enjoy a Facial Treatment at Our Day Spa and Enhance Your Look with Our Salon Services" btntitle="See Oue Services" link="/ServicesPage" /></div>

          <div className="carousel-item">
            <HeadCarousel sentence="We have a lot of reliable global products that will suit everyone!" btntitle="See Our Products" link="/ShoppingPage" /></div>

          <div className="carousel-item">
            <HeadCarousel sentence="What if you took a gift for yourself that includes a variety of everything we own?" btntitle="See our offers" link="/ShoppingPage" /></div>
        </div>
      </div>
    </div>
  )
}
export default HomeHeader;