const productsData = [
{
name : "Face Wash" ,
price : 43 , 
cat : "skincare" ,
id : 1 ,
photo : "./images/mask3.jpg"

}
,
{
    name : "Face Toner" ,
    price : 28 , 
    cat : "skincare",
    id : 2 , 
    photo : "./images/mask5.jpg"
}
,
{
    name : "Face Cream" ,
    price : 50 , 
    cat : "skincare",
    id : 3 , 
    photo : "./images/mask7.jpg"
}
,
{
    name : "Face Serum" ,
    price : 18 , 
    cat : "skincare",
    id : 4 , 
    photo : "./images/maskg1.jpg"
}
,
{
    name : "Face Scrab" ,
    price : 30 , 
    cat : "skincare",
    id : 5 , 
    photo : "./images/mask6.jpg"
}
,
{
    name : "Face Oli" ,
    price : 53 , 
    cat : "skincare",
    id : 6 , 
    photo : "./images/mask4.jpg"
}
,
{
    name : "Face Oli" ,
    price : 50 , 
    cat : "skincare",
    id : 7 , 
    photo : "./images/Hair2.jpg"
}
,
{
    name : " Face Cream" ,
    price : 19 , 
    cat : "skincare",
    id : 8, 
    photo : "./images/Hair1.jpg"
}
, ///makeup
{
    name : "Mario Lipstick" ,
    price : 43 , 
    cat : "makeup" ,
    id : 9 ,
    photo : "./images/makeup22.webp"
    
    }
    ,
    {
        name : "Face Toner" ,
        price : 28 , 
        cat : "makeup",
        id : 10 , 
        photo : "./images/brozer.webp"
    }
    ,
    {
        name : "Face Cream" ,
        price : 50 , 
        cat : "makeup",
        id : 11, 
        photo : "./images/foundation.webp"
    }
    ,
    {
        name : "Face Serum" ,
        price : 18 , 
        cat : "makeup",
        id : 12 , 
        photo : "./images/eyeliner.webp"
    }
    ,
    {
        name : "Face Scrab" ,
        price : 30 , 
        cat : "makeup",
        id : 13, 
        photo : "./images/makeup88.webp"
    }
    ,
    {
        name : "Face Oli" ,
        price : 53 , 
        cat : "makeup",
        id : 14 , 
        photo : "./images/makeup111.webp"
    },
    ///body
    {
        name : "Body Wash" ,
        price : 43 , 
        cat : "body-products" ,
        id : 15 ,
        photo : "./images/body2.jpg"
        
        }
        ,
        {
            name : "Body Splash" ,
            price : 20 , 
            cat : "body-products",
            id : 16 , 
            photo : "./images/body3.jpg"
        }
        ,
        {
            name : "Body Serum" ,
            price : 30 , 
            cat : "body-products",
            id : 17 , 
            photo : "./images/body5.jpg"
        }
        ,
        {
            name : "Body Cream" ,
            price : 18 , 
            cat : "body-products",
            id : 18 , 
            photo : "./images/body6.jpg"
        }
        ,
        {
            name : "Body Scrab" ,
            price : 32 , 
            cat : "body-products",
            id : 19, 
            photo : "./images/body7.webp"
        }
        ,
        {
            name : "Body Oli" ,
            price : 53 , 
            cat : "body-products",
            id : 20 , 
            photo : "./images/body9.webp"
    }
    ,
    {
        name : "Mademoiselle" ,
        price : 43 , 
        cat : "perfumes" ,
        id : 21 ,
        photo : "./images/perfume1.webp"
        
        }
        ,
        {
            name : "Chance" ,
            price : 20 , 
            cat : "perfumes",
            id : 22 , 
            photo : "./images/perfume2.webp"
        }
        ,
        {
            name : "CoCo" ,
            price : 30 , 
            cat : "perfumes",
            id : 23 , 
            photo : "./images/perfume5.webp"
        }
        ,
        {
            name : "Chance Eau" ,
            price : 18 , 
            cat : "perfumes",
            id : 24 , 
            photo : "./images/perfume77.webp"
        }
        ,
        {
            name : "N°5" ,
            price : 32 , 
            cat : "perfumes",
            id : 25, 
            photo : "./images/perfume99.webp"
        }
        ,
        {
            name : "Gabrielle" ,
            price : 53, 
            cat : "perfumes",
            id : 26 , 
            photo : "./images/perfume55.webp"
    },
    //Hair 
    {
        name : "Hair Cream" ,
        price : 43 , 
        cat : "hair-products" ,
        id : 27 ,
        photo : "./images/Hair1.jpg"
    }
    , ///makeup
    {
        name : "Mario Lipstick" ,
        price : 43 , 
        cat : "makeup" ,
        id : 9 ,
        photo : "./images/makeup22.webp"
        
        }
        ,
        {
            name : "Hair Oli" ,
            price : 20 , 
            cat : "hair-products",
            id : 28, 
            photo : "./images/Hair2.jpg"
        }
        ,
        {
            name : "Hair Shampoo" ,
            price : 30 , 
            cat : "hair-products",
            id : 29 , 
            photo : "./images/Hair3.jpg"
        }
        ,
        {
            name : " Conditioner" ,
            price : 18.00 , 
            cat : "hair-products",
            id : 30 , 
            photo : "./images/hair4.jpg"
        }
        ,
        {
            name : "Hair Mask" ,
            price : 32 , 
            cat : "hair-products",
            id : 31 , 
            photo : "./images/hair5.jpg"
        }
        ,
        {
            name : "Lip Liner" ,
            price : 53 , 
            cat : "hair-products",
            id : 32 , 
            photo : "./images/hair7.jpg"
        }
        ,
        //perfumes
        {
            name : "Mademoiselle" ,
            price : 43 , 
            cat : "perfumes" ,
            id : 21 ,
            photo : "./images/perfume1.webp"
            
            }
            ,
            {
                name : "Chance" ,
                price : 20 , 
                cat : "perfumes",
                id : 22 , 
                photo : "./images/perfume2.webp"
            }
            ,
            {
                name : "CoCo" ,
                price : 30 , 
                cat : "perfumes",
                id : 23 , 
                photo : "./images/perfume5.webp"
            }
            ,
            {
                name : "Chance Eau" ,
                price : 18 , 
                cat : "perfumes",
                id : 24 , 
                photo : "./images/perfume77.webp"
            }
            ,
            {
                name : "N°5" ,
                price : 32 , 
                cat : "perfumes",
                id : 25, 
                photo : "./images/perfume99.webp"
            }
            ,
            {
                name : "Gabrielle" ,
                price : 53 , 
                cat : "perfumes",
                id : 26 , 
                photo : "./images/perfume55.webp"
        },
        //Hair 
        {
            name : "Hair Cream" ,
            price : 43 , 
            cat : "hair-products" ,
            id : 27 ,
            photo : "./images/Hair1.jpg"
            
            }
            ,
            {
                name : "Hair Oli" ,
                price : 20 , 
                cat : "hair-products",
                id : 28, 
                photo : "./images/Hair2.jpg"
            }
            ,
            {
                name : "Hair Shampoo" ,
                price : 30 , 
                cat : "hair-products",
                id : 29 , 
                photo : "./images/Hair3.jpg"
            }
            ,
            {
                name : " Conditioner" ,
                price : 18 , 
                cat : "hair-products",
                id : 30 , 
                photo : "./images/hair4.jpg"
            }
            ,
            {
                name : "Hair Mask" ,
                price : 32 , 
                cat : "hair-products",
                id : 31 , 
                photo : "./images/hair5.jpg"
            }
            ,
            {
                name : "Hair Scrub" ,
                price : 53 , 
                cat : "hair-products",
                id : 32 , 
                photo : "./images/hair7.jpg"
            }
    ]
    export default productsData;