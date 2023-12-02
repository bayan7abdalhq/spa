import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const BodyHydration= () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Body Hydration"/>
     <div className="ServicesPageTemplete ">
    < ServicesPageTemplete imgg= './images/BodyHydration.png'  alt="BodyHydration" servicename="- Body Care"
        title1="About Us" Paragraph1="The human body consists of more than sixty percent of water. This is a good indication as
         to bow important water is for the survival of mankind. How much water is taken into the body and how much water is expelled 
         from the body are equally important and taken together the management of water in our bodies and its balance within the body is known as ‘hydration’.
         Each and every cell in our body requires water and thus the tissues and all organs function well with correct hydration. "
       Paragraph2="Correct hydration occurs as you intake water in its original form or in an indirect form through other beverages and food. 
        It is water that is responsible for transporting and distributing the nutrients introduced to our body through food, beverages and water to each and every cell.
        The nutrients that we introduce to our bodies through food and water are transported constantly and distributed to each and every cell.
         In the same manner it is water that is responsible for flushing out the toxins and other waste produced in the cells by carrying them 
         to the organs and systems of excretion. Here, it is evident that water is of paramount importance for the complete and proper functioning
          of all cells and organs in the body. Although hydrationis vital to our physical wellbeing we never really give it much thought. It should, 
          in fact, be one of our primary concerns on a daily basis." 
        title3="Processing of bodily functions" Paragraph3="The body being made up of nearly 6o% of water should give us a fair idea as to what the dire consequences
         will be if we are starved of it or if we ingest polluted water. The body will come to a standstill and the absence of nutrients will make it sluggish and 
         even threaten vital organs. Water not only facilitates the biochemical reactions which constitute the metabolism of each cell but also removes waste.
         Lack of timely waste removal from the cells will result in the body being slowly poisoned by heightened toxin levels. The body will also be susceptible 
         to diseases in the absence of proper hydration. The body’s temperature is also controlled by water. Water helps to cool the body by transferring the heat
          generated within the body to the surface of the body where it is emitted from the body altogether via perspiration. Thus, it is water that is once again the medium for heat distribution. Our blood is made up of 80% water."
        title4="Form and structure of the body" Paragraph4="Our bodies retain their form thanks to water. If not for the quantity of water in each cell the body will 
        look like a deflated balloon; our skin will get a parched look and feel like sandpaper. Our skin will shrivel up and split as it loses suppleness. 
        It is hydration that helps us to be what we are both inside and out. In addition, water is highly efficient in lubricating joints and the brain for proper 
        functioning. Adequate hydration when young will ensure a healthy look preventing visible signs of aging."/> 
   </div>
     
    </>)
            }
            
 export default  BodyHydration