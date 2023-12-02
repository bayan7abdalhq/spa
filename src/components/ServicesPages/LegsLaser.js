import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const LegsLaser = () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Legs Laser"/>
     <div className="ServicesPageTemplete ">
    < ServicesPageTemplete imgg= './images/legs.png'  alt="legs laser" servicename="-Laser Service"
        title4="Shorts or Skirt Ready Always" Paragraph4=" No more last minute shaving or having to wear pants because you ran out of time to shave. 
        You’re always ready to show off your smooth legs! "
        title2="Comfortable Treatments." Paragraph2=" Say Goodbye to the pain of tearing off hot wax strips & razor nicks. Our lasers are gentle enough 
        to target the hair follicle without damaging or breaking the surface of the skin." 
        title3="Never Shave Again." Paragraph3=" With Milan’s exclusive Unlimited Package™, your results are guaranteed for life. A rogue hair shows up on
         your knee 10 years down the road…No Problem! Come in and we’ll take care of it for you."
        title1="How Leg Laser Hair Removal Works" Paragraph1="With laser hair removal, razor bumps and ingrown hairs are a thing of the past. Your legs will be softer and look incredible without hair follicles creating shadows in the skin. Stop negotiating the terrain around your knees and ankles and start your journey to smooth.

        Our lasers target your hair follicle to eliminate the root of the hair without damaging or irritating your skin. After a highly-trained medical professional pulses the laser, a cooling mist is immediately released to ease any discomfort. With the root destroyed, that hair will never regrow...giving you hair-free legs. See Demo
        
        Treatments are quick and you must shave beforehand. Unlike electrolysis or waxing, there’s no need for you to walk around with a pair hairy legs prior to your appointment."/> 
     </div>
     
    </>)
            }
            
 export default  LegsLaser
 