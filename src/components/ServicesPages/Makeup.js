import Navbar from '../common/Navbar'
import HeaderPage from '../common/HeaderPage'
import ServicesPageTemplete from './ServicesPageTemplete'

const Makeup = () =>
{ 
    return(
    <>
      <Navbar/>
    <HeaderPage title="Makeup"/>
     <div className="ServicesPageTemplete "> 
    < ServicesPageTemplete imgg= './images/makeup.png'  alt="makeup" servicename="-Salon Services"
        title1="Makeup" Paragraph1=" Whatever the occasion, makeup is always our ally. Whether you’re a makeup lover or learner, 
        you’ll find all you need to look good, feel even better - all day, everyday. Think freshly 
        glossed lips and dewy complexions to the latest twist on smokey eyes. No matter who you are
        and where you are, creating all your favourite looks has never been so fun."
        title2="FACE MAKEUP" Paragraph2="Make your AM beauty routine total bliss with complexion perfecting face makeup that works for you.
         From award-winning foundations and concealers to cult-favourite bronzers and blushers to suit every skin tone, flawless makeup is guaranteed. 
         Put your best base forward with our epic lineup of face makeup. Rate the dewy, barely-there look? Shop illuminating primers, 
         lightweight foundations, easy tinted moisturisers and glow-giving BB creams. If you're up for some artistic sculpting and vibrant colour,
          explore bronzers, blushers, highlighters and a wide selection of contour makeup to suit your every whim. Discover offerings from your mainstay classics,
           modern icons and the indie brands you need to know. One thing's for sure, you'll never be short of choice." 
        title3="BRONZER" Paragraph3="The right bronzer can add both warmth and definition to your face, so kit out your beauty bag with a bronzer (or two) that has all your 
        looks covered. Today a natural beauty, tomorrow a 'kissed by the rays' glow. Anyone who’s introduced a face bronzer to their makeup routine will know that, 
        with even the lightest application, it’s the number one product for instantly amplifying your look. From lightweight powders to this-means-business contour creams,
         delve into our collection and find the best bronzer for you - and if you like yours with a touch of shimmer, we’ve got that too. For a kissed-by-the-rays glow, 
         apply to all your high points where the sun would naturally hit - across your forehead, nose and cheeks."
        title4="TINTED MOISTURISER" Paragraph4="Tinted moisturiser is where makeup meets skincare, for hydration and flawless coverage and the no-makeup-makeup
         look wouldn’t be the same without it. Add this to your daily beauty routine for a natural-looking glow all year round. You won’t get a whole lot of coverage here,
          but that’s what it’s all about - your skin, just that little bit more radiant than usual. Tinted moisturiser deserves a place in everyone's makeup collection 
          - it’s gentle on congested complexions, hydrating on dry skin types, perfect for the barely-there look and it offers the all-important dewy glow. Whether you wear 
          it daily or save it for those uber-lazy moments, tinted face moisturiser is a beauty essential."/> 
     </div>
     
    </>)
            }
            
 export default  Makeup