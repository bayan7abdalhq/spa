import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const MoroccanBath= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Moroccan Bath"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg= './images/Moroccan Bath.png'  alt=" MoroccanBath" servicename="-Body Care"
        title1="RELAX AND REJUVENATE" Paragraph1=" Experience massage therapy at Serenity Spa, the perfect way to relax,
        unwind and rejuvenate the body and mind. All our treatments are performed by our expert therapists within a tranquil
        and sophisticated environment designed to provide the perfect relaxation and restorative retreat in the heart of Dubai"
        title2="What is a Moroccan Bath?" Paragraph2="Traditional Moroccan Bath is one of the most ancient relaxing, cleansing rituals. 
        The benefits of this treatment are numerous, including reduced muscle tension,
         improved sleep, nourished skin, better blood circulation, relaxation of the body as well as exfoliation of dead skin" 
        title3="" Paragraph3="This intensely cleansing ritual helps eliminate toxins and stimulates circulation. Beginning with a
        Black Soap cleanse, your Therapists will then start a full body exfoliation using a traditional Kessa Mitt which will remove 
        all dead skin cells leaving you feeling refreshed and your skin smooth."
       /> 
     </div>
     
    </>)
            }
            
 export default MoroccanBath