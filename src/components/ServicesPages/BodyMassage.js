import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const BodyMassage = () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Body Massage"/>
     <div className="ServicesPageTemplete ">
    < ServicesPageTemplete imgg= './images/BackMassge.png'  alt="Body Massage" servicename="- Massage"
        title1="What is a Back Massage? " Paragraph1="Put simply, a Back Massage
         is any type of massage that is performed on the back of an individual. 
         The back is the posterior side of the human torso and starts just above the buttocks and ends just below the neck.
          The vertebral column runs all the way through the centre of the back from the 5th Lumbar vertebrae (L5), all the way up to 1st Thoracic Vertebrae 
        (T1). The vertebral column then continues through the neck into the cervical part of the spine. "
        title2="Why have a Back Massage?" Paragraph2="Lots of people opt for a back massage as a form of 
        relaxation, stress relief, or even pain relief. The reason for that is that the back is often a 
        part of the body that carries a lot of stress and tension and, as a result, there are many different types of massage that 
        can help with this. Some of these include: Deep Tissue Massage,
         Sports Massage, Remedial Massage, Relaxation massage, Swedish massage and more." 
        title3="Which type of Back Massage is right for me?" Paragraph3="Massage performed on the back can be a good way to end the day, or a long week, 
        and is also known to help improve the quality of sleep. A Deep Tissue Massage is particularly good if you like 
        firm pressure and your muscles tend to ache. It can also prove to be very relaxing if you’re comfortable with the firmer pressure of the therapist.
        Sports and Remedial Massage are both great at targeting specific areas that cause pain or discomfort.
         Sports Massage is generally for those who participate in sport or exercise, but it’s also suitable for 
         anyone suffering with back pain or discomfort. Remedial Massage is a great option for anyone suffering with aches, pains or discomfort.
        Relaxation and Swedish massage are recommended for those seeking a more relaxing, slow and stress relieving massage. These types of massage don’t typically 
        apply masses of pressure, but are a great way to relax the body."
       /> 
   </div>
     
    </>)
            }
            
 export default  BodyMassage