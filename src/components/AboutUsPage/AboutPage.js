import './AboutPage.css'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import AboutCard from './AboutCard'
const AboutPage = () => {
        return (
                <>
                        <Navbar />
                        <div className="about">
                        <div className="col ">
                                <img src="./images/aboutpage.png" className="img-fluid w-100 aboutimg" alt="teamspa" />
                                <HeaderPage title="About Us" />
                        </div>
                        <div className="fade">
                                <div className=" m-5 ">
     <div className="row">
             <div className="col-8">
                     <div className="title h2">About Centre Spa: </div>
                     <p>At Centre Spa , we believe in providing our luxury day spa, hair salon, and wellness guests with the best experience possible.
                             Focused on your satisfaction, our experienced team of the Kalamazoo area’s best hair stylists, nail technicians, estheticians,
                             and massage therapists create a relaxing and comforting atmosphere for all of our guests.
                             To learn more about Centre Spa and our team or to apply for a career with us, select an item from the options below.
                     </p>
             </div>
             <div className='col-4 pt-4'>
                     <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                             <div className="carousel-inner">
  <div className="carousel-item active">
          <img src="./images/about1.png" className="d-block w-100" alt="spa center" />
  </div>
  <div className="carousel-item">
          <img src="./images/about2.png" className="d-block w-100" alt="spa center" />
  </div>
  <div className="carousel-item">
          <img src="./images/about3.png" className="d-block w-100" alt="spa center" />
  </div>
  <div className="carousel-item">
          <img src="./images/about4.png" className="d-block w-100" alt="spa center" />
  </div>
                             </div>
                     </div>
             </div>
     </div>

     <div className="title h2">The history of the SPA: </div>
     <p>Etymologically the word 'Spa' was derived from the Walloon word ‘espa’ meaning fountain. Spa was the name of the Belgian town in the 14th century where a curative thermal spring was discovered. The origin of the term 'Spa' is from the Latin word 'spagere' which means to scatter, sprinkle, moisten or it may be an acronym of the Latin phrase 'sanitas per aquas' (health through water). This thermal water bath is known for its therapeutic effects and encompasses different kinds of therapies such as balneotherapy, spa therapy and hydrotherapy.<br />Historians believe that Greeks used variety of social bathing in 500 BC including hot air baths known as 'laconica' for medicinal purposes. In Rome Emperors designed and created several 'thermae' (a large-scale spa) so that the benefit of the curative features of hot water can be availed by common people. Gradually this became popular throughout the world and they were built across the Roman Empire, from Africa to England. People come to these places for treatment from various parts of the world which developed it into a medical profession. The increase in demand from visitors helped in emergence of several well equipped complexes which offered places to stay, entertainment facilities and various types of baths.    </p>


     <div className="title h2">About Our Team: </div>

     <div id="carouselabout" className="carousel slide" data-bs-ride="carousel">
             <div className="carousel-inner">
                     <div className="carousel-item active">
                             <div className="container d-flex justify-content-center mb-5">
  <div className="row align-items-center ">
          <div className="row row-cols-1 row-cols-md-4 g-4">

                  <AboutCard imgg="./images/Theresa.jpg" title="Theresa Greenberg" altt="Theresa Greenberg" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
                  <AboutCard imgg="./images/Chase.jpg" title="Chase Phelps" altt="Chase Phelps" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
                  <AboutCard imgg="./images/Ling.jpg" title="Ling Sung" altt="Ling Sung" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
                  <AboutCard imgg="./images/lance.jpg" title="Lance Hickey" altt="Lance Hickey" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
          </div>
  </div>
                             </div>
                     </div>
                     <div className="carousel-item ">
                             <div className="container d-flex justify-content-center mb-5">
  <div className="row align-items-center ">
          <div className="row row-cols-1 row-cols-md-4 g-4">
                  <AboutCard imgg="./images/joav.jpg" title="Joav Zaragoza" altt="Joav Zaragoza" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
                  <AboutCard imgg="./images/Sabriye.jpg" title="Sabriye van Omme" altt="Sabriye van Omme" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
                  <AboutCard imgg="./images/lings.jpg" title="Ling Sung" altt="Ling Sung" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
                  <AboutCard imgg="./images/lanceh.jpg" title="Lance Hickey" altt="Lance Hickey" content="Assueverit interesset eu sed, te lorem delectus theophrastus his. Tantas omittantur elit." />
          </div>
  </div>
                             </div >
                     </div>
             </div>
             <button className="carousel-control-prev" type="button" data-bs-target="#carouselabout" data-bs-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Previous</span>
             </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselabout" data-bs-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="visually-hidden">Next</span>
             </button>
     </div>
                                </div >
                                <div className=" m-5 p-3">
        <div className="container ">
             <div className="row">
   
     
                     <div className="col-12 col-md-6 col-lg-6 col-xxl-6 ">
                        <div className="title h2">Our Location: </div>
                             <iframe title="map" className="gmap_iframe w-100 h-100 mapframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=najah&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                     </div>
                     <div className="col-12 col-md-6 col-lg-6 col-xxl-6 ">
                     <div className="title h2">Our Social Media: </div>
                     <div className='h5'>
                     - facebook <br/>
                        - Instgram
                     </div>
                     </div>
             </div>
     </div>
                                </div>
                        </div>
                        </div>
                        <Footer />
                </>
        )
}
export default AboutPage;