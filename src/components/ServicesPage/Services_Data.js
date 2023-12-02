const servicesData = [
    {
        sername: "Skin Clean",
        rate: "100.00$/Hour",
        cat: "skin-care",
        description: "If you’re prone to breakouts or have oily skin, don’t skimp on washing your face as part of your morning and evening skin care routine. In a studyTrusted Source that focused specifically on face.",
        number: 1,
        servimg: "/images/skinclean.jpg",
        altt: "Skin Clean",
        pagelink: "/SkinCleanPage"
    }
    ,
    {
        sername: "Peeling Skin",
        rate: "150.00$/Hour",
        cat: "skin-care",
        description: "Repeated irritation can lead to skin peeling. In babies born past their due date, it's not unusual for them to experience some painless skin peeling. Skin peeling can also result a disease.",
        number: 2,
        servimg: "/images/peelingskin.jpg",
        altt: "Peeling Skin",
        pagelink: "/PeelingSkinPage"
    }
    ,
    {
        sername: "Mesotherapy",
        rate: "100.00$/Hour",
        cat: "skin-care",
        description: "Mesotherapy is a technique in SPA that uses injections of vitamins, enzymes, hormones, and plant extracts to rejuvenate and tighten skin, as well as remove excess fat.",
        number: 3,
        servimg: "/images/mesotherapy.jpg",
        altt: "Mesotherapy",
        pagelink: "/MesotherapyPage"
    }
    ,
    {
        sername: "Cell Regeneration ",
        rate: "30.00$/Hour",
        cat: "skin-care",
        description: "ermapen is a microneedling treatment to improve scars, acne scars, stretch marks, wrinkles, discoloration, and skin rejuvenation.The benefits begin the skin's self-healing.",
        number: 4,
        servimg: "/images/CellRegeneration.png",
        altt: "Cell Regeneration ",
        pagelink: "/CellRegenerationPage"
    },
    // salon services
    {
        sername: "Hair Cut & Style",
        rate: "50.00$/Hour",
        cat: "salon-services",
        description: "Get your hair styled from our professionals, SPA salon professionals offer you versatile and customized options. Using the latest techniques, you can expect a superior cut and style.",
        number: 5,
        servimg: "/images/HairCutStyle.jpg",
        altt: "Hair Cut & Style",
        pagelink: "/HairCutPage"
    }
    ,
    {
        sername: "Hair Color",
        rate: "30.00$/Hour",
        cat: "salon-services",
        description: "Hair color can be your crowning glory or an expression of your true personality. At Radiance we embrace hair of every color.This process involves in applying color all over to create a new base color.  ",
        number: 6,
        servimg: "/images/haircolor.jpg",
        altt: "Hair Color",
        pagelink: "/HairColorPage"
    }
    ,
    {
        sername: "Makeup",
        rate: "50.00$/Hour",
        cat: "salon-services",
        description: "Whether you’re in need of makeup application for bridal parties,or an important interview, our team of trained professionals can help you look best.",
        number: 7,
        servimg: "/images/makeup.jpg",
        altt: "Makeup",
        pagelink: "/MakeupPage"
    }
    ,
    {
        sername: "Nails",
        rate: "50.00$/Hour",
        cat: "salon-services",
        description: "We offer a variety of services and looks for nails, from natural to luxurious, including acrylic, gel, polish services, and hand and foot pampering.",
        number: 8,
        servimg: "/images/nails.jpg",
        altt: "Nails",
        pagelink: "/NailsPage"
    }
    //message
    ,
     {
        sername: "Body Massage",
        rate: "100.00$/Hour",
        cat: "massage",
        description: " Body Massage Wellness Spa offers a wide range of services from therapeutic massage and waxing to microderm abrasion and other skin care treatments like Micro Needling, RFSkin resurfacing, and skin rejuvenation with signature..",
        number: 11,
        servimg: "/images/BodyMassage.jpg",
        altt: "Body Massage",
        pagelink: "/BodyMassagePage"
    }
    ,
    {
        sername: "Back & Neck Massage",
        rate: "90.00$/Hour",
        cat: "massage",
        description: "Most spas offer their own take on this popular massage style, which targets the upper body and is loosely based around the technique used in Swedish massage.  At around 30 to 40 minutes, a back & neck massage is a shorter treatment.",
        number: 10,
        servimg: "/images/BackandNeckMassage.jpg",
        altt: "Back & Neck Massage",
        pagelink: "/BackandNeckMassagePage"
    }

    ,
    {
        sername: "Therapeutic Massage",
        rate: "50.00$/Hour",
        cat: "massage",
        description: "Therapeutic massage is a type of complementary and alternative medicine practice that is often used to treat muscle pain, injury, and stiffness. Massage therapy has also been used for the treatment of mental and emotional problems.",
        number: 9,
        servimg: "/images/TherapeuticMassage.jpg",
        altt: "Therapeutic Massage",
        pagelink: "/TherapeuticMassagePage"
    }
    ,
    {
        sername: "Foot Massage",
        rate: "70.00$/Hour",
        cat: "massage",
        description: "Although the massage of the feet is often underestimated, it is not so simple. When done properly, it involves applying pressure to certain points on the foot that correspond to and affect various organs and body systems. This technique is very relaxing.",
        number: 12,
        servimg: "/images/FootMassage.jpg",
        altt: "Foot Massage",
        pagelink: "/FootMassagePage"
    }
    // body care
    ,
    {
        sername: "Body Hydration",
        rate: "100.00$/Hour",
        cat: "body-care",
        description: "Since ancient times, sea water was used for therapeutic purposes. The term promotes the healing properties of the sea through an increasingly sought after alternative method for the body.",
        number: 13,
        servimg: "/images/BodyHydration.jpg",
        altt: "Body Hydration",
        pagelink: "/BodyHydrationPage"
    }
    ,
    {
        sername: "Turkish Bath",
        rate: "150.00$/Hour",
        cat: "body-care",
        description: "A visit to a Turkish bath or Hamam is one of the most memorable experiences you will have in Istanbul. Check out all the authentic baths in Istanbul and compare the prices of Turkish bath and services.",
        number: 14,
        servimg: "/images/TurkishBath.jpg",
        altt: "Turkish Bath",
        pagelink: "/TurkishBathPage"
    }
    ,
    {
        sername: "Sauna",
        rate: "100.00$/Hour",
        cat: "body-care",
        description: "The Sauna and Steam Room Center has all the right solutions for your Sauna needs. No matter  the size of your space, we can help. Pick from our line of prebuilt Infrared or Traditional saunas.",
        number: 15,
        servimg: "/images/sauna.png",
        altt: "Sauna",
        pagelink: "/SaunaPage"
    }
    ,
    {
        sername: "Moroccan Bath",
        rate: "100.00$/Hour",
        cat: "body-care",
        description: "among the warmest rooms and clean and healthy towels using the best soap that enhances your feeling of relaxation after the best professional Moroccan bath in our SPA center.",
        number: 16,
        servimg: "/images/MoroccaBath.jpg",
        altt: "Moroccan Bath",
        pagelink: "/MoroccanBathPage"
    }
    //laser services
    ,
    {
        sername: "Face Laser",
        rate: "30.00$/Hour",
        cat: "laser-servises",
        description: "specialized facial treatments for the individualized care of each patient. You can be sure of quality care when you stop by either one of our Spa & Laser Center.",
        number: 17,
        servimg: "/images/FaceLaser.jpg",
        altt: "Face Laser",
        pagelink: "/FaceLaserPage"
    }
    ,
    {
        sername: "Hands Laser",
        rate: "50.00$/Hour",
        cat: "laser-servises",
        description: "Laser hair removal is a highly effective option for eliminating hair from the hands. The laser works by zapping the hair follicle with light.",
        number: 18,
        servimg: "/images/HandsLaser.jpg",
        altt: "Hands Laser ",
        pagelink: "/HandsLaserPage"
    }
    ,
    {
        sername: "Legs Laser",
        rate: "100.00$/Hour",
        cat: "laser-servises",
        description: "Our procedure is a painless and comfortable procedure that helps you achieve permanently hair-free legs for a lifetime without harsh side effects or downtime.",
        number: 19,
        servimg: "/images/legslaser.jpg",
        altt: "Legs Laser",
        pagelink: "/LegsLaserPage"
    }
    ,
    {
        sername: "Full Body Laser",
        rate: "200.00$/Hour",
        cat: "laser-servises",
        description: "Our state-of-art laser technology is FDA Approved and a totally safe procedure. The patented ChillTip technology is designed to protect the outer layer of the skin.",
        number: 20,
        servimg: "/images/laserbody.jpg",
        pagelink: "/FullBodyPage"
    }
]
export default servicesData;
