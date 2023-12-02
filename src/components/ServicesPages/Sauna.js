import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const Sauna= () =>
{ 
    return(
    <> 
    <Navbar/>
    <HeaderPage title="Sauna"/>
     <div className="ServicesPageTemplete "> 
   
     
    < ServicesPageTemplete 
   imgg= './images/sauna.png'  alt="sauna" servicename="-Body Care" 
        title1="What Is Sauna Therapy?" Paragraph1="Sauna therapy is exposing your body to high heat in an enclosed space for health purposes. The resulting elevation in core body temperature — hyperthermia — may improve your health.
        Traditional cultures used saunas for ceremonial or spiritual purposes. For example, Native American or shamanic sweat lodges were used for vision questing or purification as a cultural ritual.
        Modern-day sauna therapy is the use of sauna bathing as a health practice. As your body is exposed to heat, your breathing rate increases and your body may begin to sweat.   "
        title2="Types of Sauna Therapy" Paragraph2="There are two main types of sauna therapy in use today: Finnish sauna therapy and infrared sauna therapy. Let’s discuss what’s unique about each type of sauna therapy." 
        title3="Traditional Sauna Therapy" Paragraph3="Traditional Finnish saunas are usually kept between 175-212 degrees F. You stay in the sauna for 5-20 minutes, and then cool off outdoors or in a cold water plunge. Finnish saunas are generally kept dry, but some people pour water onto the heated rocks to make a steam sauna .
        Finnish saunas are typically heated with electric coils but may also be wood-fired, and are the most studied type of sauna"
        title4="Far-Infrared Sauna Therapy " Paragraph4="Infrared sauna therapy is a newer type of heat therapy, popularized in the last decade. Infrared saunas emit far-infrared heat, a wavelength of red light, from a special lamp. "/> 
    </div>
     
    </>)
            }
            
 export default  Sauna