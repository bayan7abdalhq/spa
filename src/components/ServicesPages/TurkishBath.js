import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const TurkishBath= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title=" Turkish Bath"/>
     <div className="ServicesPageTemplete ">
    < ServicesPageTemplete imgg= './images/turkish bath.png'  alt="TurkishBath" servicename="-Body Care"
        title1="What is a Turkish Bath?" Paragraph1="A Turkish bath is called a hamam. It usually includes massage and a tea bar. 
        Some hamams in Istanbul are over 250 years old and some upscale hotels there also offer a similar experience. "
        Paragraph2="The first step in experiencing a traditional Turkish bath is getting ready in the camekan, 
        or changing room. You undress in a private booth where you can lock up your street clothing and change into a pestemal 
        and terlik, which are a fringed towel wrap and a pair of slippers. Many people bring the rest of what they need such as
         a drying towel, shampoo and soap because some hamams don't supply these items and the ones that do may charge a high price for them." 
        Paragraph3="You usually can choose whether you'd like to take a bath by yourself or have a hamam attendant scrub your
         skin with a coarse mitt. The hair treatment usually includes a scalp massage with a shampoo. The bathing room is a steam bath
          with separate washing areas around a heated stone table called a goebektas that is used for massage after the steam bath. "
        Paragraph4="After the steam bath and massage, hamam patrons go to a cooling room with cooler showers. Tea is usually available to drink. A visit to a Turkish bath may take two hours or even more.
        The idea of a Turkish bath is to sweat, much like in a sauna.
        The idea of a Turkish bath is to sweat, much like in a sauna.
        The idea behind the Turkish bath is to sweat much like one does in a sauna, but with the added elements of water, cleansing and massage. The hamam has been part of the Turkish
         culture for hundreds of years and connects with the Muslim appreciation for water and for cleanliness. This treatment is for people of all ages and social classes."/> 
 </div>
     
    </>)
            }
            
 export default  TurkishBath