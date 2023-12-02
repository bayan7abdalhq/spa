import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const Mesotherapy= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Mesotherapy"/>
     <div className="ServicesPageTemplete ">
    < ServicesPageTemplete imgg= './images/Mesotherapy.png'  alt="Mesotherapy" servicename="-Skin Care"
        title1="What is mesotherapy?" Paragraph1=" Mesotherapy is a technique that uses injections of vitamins, enzymes, hormones, and plant extracts to rejuvenate and tighten skin, as well as remove excess fat.
        Michel Pistor, a doctor in France, developed the technique in 1952. It was originally used to relieve pain. In the years since, it has gained popularity in the United States and other parts of the world."
        title2="Today, mesotherapy is used to:"Paragraph2="remove fat in areas like the stomach, thighs, buttocks, hips, legs, arms, and face
        reduce cellulite
        fade wrinkles and lines The technique uses very fine needles to deliver a series of injections into the middle layer
         (mesoderm) of skin. The idea behind mesotherapy is that it corrects underlying issues like poor circulation and inflammation that cause skin damage.
         There isn’t a standard formula for the substances injected in mesotherapy. Doctors use many different solutions, including:prescription medicines like vasodilators and antibiotics
        hormones such as calcitonin and thyroxin
        enzymes like collagenase and hyaluronidase
        herbal extracts
        vitamins and minerals" 
        title3="How much does it cost?" Paragraph3="The cost of mesotherapy depends on the type of treatment you’re getting and the number of sessions you need. In general,
        a single session costs between $250 and $600. Because mesotherapy is cosmetic and not medically necessary, insurance companies usually don’t cover the cost"
        title4="How do you prepare?" Paragraph4="You’ll meet with the doctor ahead of time to find out what to expect. 
        You might have to avoid aspirin (Bufferin) and other nonsteroidal anti-inflammatory drugs
         (NSAIDs) for one week before the procedure. These pain relievers can increase your risk of bleeding and bruising during mesotherapy."/> 
    </div>
     
    </>)
            }
            
 export default  Mesotherapy