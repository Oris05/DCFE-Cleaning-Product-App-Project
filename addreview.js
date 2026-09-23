const product = [
    {
      id: 1,
      title: "What payment methods do you accept?",
        answer:"We accept Visa, MasterCard, American Express, and PayPal",
    },
    {
        id: 2,
        title: "How do you ship products?",
          answer:"We offer standard shipping within the US, which typically takes 3-5 business days.",
     
    },
    {
        id: 3,
        title: "Do you offer international shipping?",
          answer:"Yes, we ship internationally to over 100 countries.",
     
    },
    {
        id: 4,
        title: "What is your return policy?",
          answer:"You can return items within 30 days of receiving them for a full refund or exchange.",
      
    },
    {
        id: 5,
        title: "How can I track my order?",
          answer:"You can track your order through the tracking number provided in your order confirmation email.",
    },
    {
        id: 6,
        title: "Do you offer any discounts or promotions?",
          answer:"Yes, we offer seasonal sales and special promotions on our website.",
    },

    {
       id: 7,
      title: "Is your website secure?",
        answer:"Yes, we use SSL encryption to ensure the security of your personal and financial information.",
    },

    {
        id: 8,
        title: "Do you offer gift wrapping services?",
          answer:"Yes, we offer gift wrapping services for an additional fee.",
      
    }
   
   
  ]
;
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('afaq').innerHTML = categories.map((item)=>
{
    var {id, title, answer} = item;
    return(
       
    `<div class = "questionFaq">
    <p><b>${id}.${title}</b></p>
    
        <p> ${answer}</p>
        </div>
        `
    )
}).join('')

