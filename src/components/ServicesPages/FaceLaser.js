import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const FaceLaser= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Face Laser"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg= './images/FaceLaser.png'  alt="face laser" servicename="- Laser Services"
        title1="What is a laser facial?" Paragraph1="It's a treatment that elevates the basic facial, providing a safe and effective means of
         stimulating collagen and evening skin tone. At Skin Laundry, the laser and light facial provides the benefits that one might typically 
         associate with going to a dermatologist, but given in a more accessible setting. "
        title2="What types of lasers are used for the treatment?" Paragraph2="There is no one single agreed-upon laser that's used for a laser facial. Non-ablative lasers are a resurfacing
         device that stimulates your collagen and improves the skin is appearance without damaging the surface  Ablative lasers 
         which are more aggressive and typically burn the skin, are not going to be associated with the word facial, because a 
         facial is implying gentleness and safety. Then there are IPL devices, intense pulse light devices, what have also been called photo facials. So when people talk
         about what a photo facial is, it's a treatment with an IPL, or an intense pulse light device. That's now been expanded to
          include other layered treatments with other low energy, high impact, non-ablative resurfacing agents, such as an Nd:YAG laser.
           At Skin Laundry, when we refer to a laser and light facial, we are pairing an IPL treatment with a longer wavelength, collagen-stimulating Nd:YAG 
           laser treatment."
        title3="What types of skin concerns does a laser facial treat?" Paragraph3="Someone wouldn't come in for a laser treatment for hydration, because lasers 
        in general are focusing on targeting structures in the skin like pigmentation, decreasing red and brown spots. These treatments can certainly provide 
        suppleness to the skin but if someone has severely dry skin, I wouldn't recommend this as a direct treatment for dryness. Steps can be added to provide 
        a hydration boost, but in general lasers are more focused on pores, wrinkles, texture, tone, and firming of the skin rather than hydration."
        title4="Are there products that you should stop using in the days leading up to a laser facial?" Paragraph4="When you're going in for a facial, it's best to keep your skin as hydrated as possible. I do usually recommend stopping retinoids, like Retin-A, or Retinol, at least three days before the treatment (ideally up to a week). It's not a mandate, but if someone has very sensitive skin, it's a good idea to stop the retinoid before going in for a laser treatment."/> 
    </div>
     
    </>)
            }
            
 export default  FaceLaser