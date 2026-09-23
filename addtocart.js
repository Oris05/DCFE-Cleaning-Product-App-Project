const product = [
    {
      id: 1,
      title: "Corn Based Cleaning Solution",
  
      price: 14,
      
      image: "../image/agriculture.jpg"
    },
    {
      id: 2,
      title: "Super Wiper Max Pro",
      
      price: 29,
     
      image: "../image/chore.jpg"
    },
    {
      id: 3,
      title: "World Class Cotton Cloth",
    
      price: 7,
     
      image: "../image/cotton.jpg"
    },
    {
      id: 4,
      title: "Super Effective Cotton Cloth",
      
      price: 6,
      
      image: "../image/cotton2.jpg"
    },
    {
      id: 5,
      title: "Chemical Spray",
      
      price: 12,
      
      image: "../image/disinfectan.jpg"
    },
    {
      id: 6,
      title: "Multi-Purpose Board Cleaner",
      
      price: 24,
      
      image: "../image/glass.jpg"
    },

    {
      id: 7,
      title: "Super Potent Chemical",
      
      price: 46,
      
      image: "../image/objects.jpg"
    },

    {
      id: 8,
      title: "Super CLeaner Spray",
      
      price: 19,
      
      image: "../image/spray.jpg"
    },
    {
        id: 9,
        title: "Cleaner Maximum Super Pack",
        
        price: 59,
        
        image: "../image/spray2.jpg"
      },
      {
        id: 10,
        title: "Simple Textile Cleaning Cloth",
        
        price: 2,
        
        image: "../image/textile.jpg"
      },
      {
        id: 11,
        title: "Pack of Cleaning Towels",
        
        price: 15,
        
        image: "../image/towels.jpg"
      },
      {
        id: 12,
        title: "Water Based Cleaning Solution",
        
        price: 4,
        
        image: "../image/water.jpg"
      }
   
   
  ]
;
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>€ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "€ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>€ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}