import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const Nails = () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Nails"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg= './images/hands.png'  alt="Nails" servicename="-Salon Services"
        title1="What is a Manicure?" Paragraph1="A manicure involves trimming, shaping and polishing fingernails. 
        That said, an at-home manicure can be just as effective if done correctly using proper tools such as nail 
        clippers (manicurist grade), cuticle pushers (to push back your cuticles) and nail files 
        of different coarsenesses to shape your nails in various ways from square/oval to round/squoval). "
        title2="What is a Pedicure?" Paragraph2="Typical pedicures involves cleaning, shaping and polishing your toe nails.
         Like a manicure, at-home pedicures can be just as effective if done correctly using proper tools such as nail clippers
          (manicurist grade), cuticle pushers (to push back your cuticles) and nail files of different coarsenesses to shape your
           nails in various ways from square/oval to round/squoval)." 
        title3="Difference Between a Manicure and a Pedicure" Paragraph3="So, what is the difference between a manicure and pedicure? Well, 
        for starters they are two different treatments. The most obvious difference is a manicure is done to the fingernails while a pedicure is done to the toes.
        The focus of each treatment is also different. For instance, a manicure usually involves trimming and shaping of nails, a cuticle treatment and application
         of nail polish. A pedicure treatment involves the same process plus other treatments such as a foot soak, removal of dead and dry skin with a foot file or
          pumice stone, use of mask and exfoliating foot scrub."
        title4="Similarities Between a Manicure and a Pedicure" Paragraph4="However, there is a common thread between the two treatments. The main aim of getting either 
        nail treatment is for your nails to look and feel great. For this reason, you can expect that both a manicure treatment and a pedicure treatment will leave your 
        fingernails and toes looking spectacular. A manicure or pedicure will help rid your nails of any imperfections, which ultimately leads to healthier looking nails. 
        While getting a manicure or pedicure is considered to be a luxury, there are many health benefits of having your nails cared for by someone else – as well as the 
        fact that you’re giving yourself a treat."/> 
     </div>
     
         </>)
            }
            
 export default  Nails