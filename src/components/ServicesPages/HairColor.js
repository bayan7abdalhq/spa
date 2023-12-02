import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'


const HairColor = () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="HairColor"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg= './images/Hair dye .png'  alt="HairColor" servicename="-Salon Services"
        title1=" Abstract" Paragraph1="Hair dye cosmetic products are used for colouring hair. These products are mainly classified into
         two categories according to their duration in the hair, i.e., temporary and permanent. This classification
          is in line with the type of active ingredients involved in the dyeing process and with the dyeing process itself,
           commonly known as non-oxidative and oxidative hair dye products. Owing to the different side effects described for
            these active cosmetic ingredients, some of them have been prohibited during the past years, whereas others have been
             restricted in the different legislations in force. The aim of this chapter is to familiarize the reader with the different 
             compounds used as hair dyes and the legislation regulating these compounds, and especially to review the existing 
        analytical methods for hair dye determination in cosmetic products."
        title2="Hair color measurement" Paragraph2="The hair colorant industry is currently under significant pressure to 
        develop economical, natural hair dyes. Although not yet commercialized, there may be some scope for
         using DOPA (3,4 dihydroxyphenylalanine), which after oxidation provides a natural brown dye. In the presence 
         of cysteine, natural red pigments (pheomelanins) can be formed from DOPA, while the presence of sulfur-containing nucelophile 
         (rather than cysteine) can increase still further the range of hair color shades possible. Here, hydrogen peroxide is a superior oxidizer,
          though the reaction can proceed even with basic atmospheric oxygen. Brown colors can be deepened to intense blacks if potassium ferricyanide is added." 
     title3="Permanent hair-dye products" Paragraph3="Nowadays, these hair-dye products are by far the most frequently used hair colouring products and hold the 
     dominant share of the market. They have sufficient durability so that the user only requires one application a month.
     The formulation of almost all permanent hair-dye products uses the so-called oxidative hair dyes. These chemicals are often referred as intermediates, because most 
     of them are uncoloured and produce coloured compounds through a process of oxidative condensation when mixed with oxidizing products just before use. In fact, the hair 
     colour is formed when a dye precursor (usually referred to as base or primary intermediate)
      is oxidized by the oxidizing agent (also known as the developer) to produce an imine, which reacts rapidly with the so-called modifier (also known as coupler).
     So, the oxidative hair-dye products consist of two bottles, one containing the oxidative hair dye (both base and coupler) and the other one containing the oxidizing
      agent which are mixed shortly before application to the hair.Hydrogen peroxide is the most commonly used developer.
     In general, bases and couplers are aromatic derivatives belonging to three major chemical families: aromatic diamines, aminophenols, and phenols (or also naphthols)."
        title4="Polymers for Improvements in Hair Coloring" Paragraph4="Conventional conditioning agents are incompatible with hair dye formulations but there is a need to
         simultaneously color and condition the hair. This is achieved by the addition of ethylene acrylic acid copolymers optionally in combination with a metallocene
          polymerized polyolefin.386 The addition of just 1% of these polymers led to advantages in wet combing benefits.
        The oxidizing agents used in hair colorants do damage the hair fibers. Moreover, the rapid kinetics of oxidation can cause uneven coloring of the hair, especially
         when long preparation procedures are involved such as in selective highlighting. Encapsulation of the oxidation precursors with polymethacrylates, poly(vinylacetate)s, 
         or shellac allows the coloring process to be more uniform"/> 
    </div>
     
    </>)
            }
 export default   HairColor 