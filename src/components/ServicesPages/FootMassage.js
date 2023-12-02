import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const FootMassage= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Foot Massage"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg= './images/FeetCare.png '  alt="Foot Massage" servicename="-Massage"
        title1="Feet Care Fundings" Paragraph1="All approved services will be funded through the National Disability Insurance Scheme. 
        Our company has a ‘no gap’ payment scheme. This guarantees that every Client can benefit from our services. "
        title2=" Foot Care Specialized Shop in Singapore" Paragraph2="
        We provide fitting of comfortable footwear and foot care products to relieve your feet issues. The result – your discomfort is
         relieved and your life gets back to normal. For over 9 years, we’ve helped more than 50,000 of our customers relieve foot pain and resolve 
         foot problems like Heel Pain, Bunions, Flat Foot, Plantar Fasciitis, High Arch, Bursitis, Achilles Tendinitis and more.
        We want to help you too." 
        title3="Getting Your Flat Foot Pain Treatment" Paragraph3="Did you know that if you have flat foot, you probably have overpronation on your feet?
        Flat foot is a relatively common condition. It’s usually painless but can sometimes contribute to ankle and knee problems since having a flat foot can alter
         the alignment of your legs. These symptoms are usually associated with flat foot,
         such as pain in the heel, over-pronation, shin splint, low back pain, knee pain, and more.A good pair of footwear and orthotics
          insoles is crucial for the flat foot as a well-fitted shoe can provide you with adequate support, and a flat foot insole helps 
          relieve pressure on your arch and reduce flat foot pain.FeetCare takes in a wide variety of shoes, slippers, and flat foot insoles treating flat foot pain. 
         In the long run, our customers can do a lot of outdoor activities such as jogging, hiking, and weight-lifting without suffering from 
         pain as our shoes and insoles provide good support for your arch and body alignment.
         It’s crucial to correct pronation to avoid other foot conditions. Here’s where we can help for your flat foot pain."
        title4="Getting your heel pain treated" Paragraph4="Did you know that heel pain is a common foot problem. Pain usually occurs under the heel or just behind it.

        Here’s where we can help."/> 
     </div>
     
    </>)
            }
            
 export default FootMassage