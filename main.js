// Rings Data Fetch
let mainSection=document.querySelector("main")
function pro(){
    fetch("http://localhost:3000/products").
    then((res) => {
        return res.json()
        // console.log(res.json());      
    }).then((data) => {
        return card(data)
        // console.log(card(data));   
    }).catch((err) => {
        console.log(err);
    });
}
function card(data){
    let choose = data.map((el)=> { 
        return titles(el.id,el.image,el.link,el.name,el.price) 
    })
    mainSection.innerHTML = choose.join("")
}
function titles(id,image,link,name,price){
    return `
      <div class="product" data-id="${id}">
      <a href="#"><img src="${image}" alt="not found"></a>
      <div class="pros-core">
            <a href="#"><img src="${link}" alt="The Baller"></a>
      </div>
        <div class="bass">
                    <h5 class="basstitle">${name}</h5>
                    <span class="basstext">${price}</span>
                    
                </div>
      </div>        
    `
}
pro()

    // fetch rings
    let Section = document.querySelector(".ringsfetches")
    const slide = document.querySelector('.slide')
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    let shouts = 0;
    let totalSlide;
    
function pros(){

    fetch("http://localhost:3000/products").
    then((res) => {
        return res.json()
        // console.log(res.json());
        
    }).then((data) => {
        totalSlide = data.length;
        return cards(data)
        // console.log(card(data));
        
    }).catch((err) => {
        console.log(err);
    });
}
function cards(data){
    let choose = data.map((el)=> {
       
        return titless(el.id,el.image,el.link,el.name,el.price) 
    })
    Section.innerHTML = choose.join("")
}

function titless(id,image,link,name,price){
    return `
      <div class="milks" data-id="${id}">
      <a href="#"><img src="${image}" alt="not found"></a>
      <div class="ringhand">
            <a href="#"><img src="${link}" alt="The Baller"></a>
      </div>
        <div class="jass">
                    <h5 class="basstitle">${name}</h5>
                    <span class="basstext">${price}</span>
                    
                </div>
      </div>        
    `
}
pros()

function NextSlide() {
    shouts = (shouts + 1) % totalSlide;
    Section.style.transform = `translateX(-${shouts * 100}px)`;
}

function PrevSlide() {
    shouts = (shouts - 1 + totalSlide) % totalSlide;
    Section.style.transform = `translateX(-${shouts * 100}px)`;
}

next.addEventListener('click', NextSlide);
prev.addEventListener('click', PrevSlide);
// Qutoes
let arr1 = ["Rather than a staid gold wedding band, some grooms-to-be are choosing bands made from unorthodox materials like a used Jack Daniel’s cask or a dinosaur bone.",
    "Male-oriented jewelry is bucking the trend and providing men with a vast array of styles that include 21st century furnishes.",
    "If you and your partner, like many couples around the world, have bonded through a mutual obsession for DC, then these might just make for a perfectly nerdy twist on your I do’s.",
    "Manly Bands celebrates every type of man by offering couples the option to choose the ring that suits their man best, and even customize something totally unique!",
    "The formerly nondescript rings symbolizing our love for our partners can now symbolize our love for our favorite superheroes too.",
    ]
    let answerand = document.getElementById('quotes')
    
    function changesofinterval() {
        let answ = Math.floor(Math.random() * arr1.length)
        answerand.innerHTML = arr1[answ];   
    }
    // Qouets()
    setInterval(changesofinterval, 3000)


    let productdata = [];
    let show = document.querySelector(".rows34")
function byte(){
    fetch("http://localhost:3000/rings").
    then((res) => {
        // console.log(res.json());
        return res.json()         
    }).then((datas) => {
        productdata = datas
         beats(datas)
        // console.log(card(datas));   
    }).catch((err) => {
        console.log(err);
    });
}
byte()
function beats(datas){
    let fresh = datas.map((el)=> { 
        return scences(el.id,el.image,el.name,el.price,el.discountedPrice,el.Category) 
    })
    show.innerHTML= fresh.join("")
}
function scences(id,image,name,price,discountedPrice,Category){
    return `
      <div class="container9999" data-id="${id}">
              <a href="#"><img src="${image}" alt="not found"></a>
          </div>
          <div class="drums6">
            <p>${name}</p>
            <p class="golddigger">${Category}</p>
            <span class="moneydollar">${price}</span>
            <span class="moneycero">${discountedPrice}</span>
          </div>      
    `
}

let gold = document.getElementById("Gold")
let silver = document.getElementById("Silver")
let antler = document.getElementById("Antler")
let meteriote = document.getElementById("Meteriote")
let opal = document.getElementById("Opal")
let titanium = document.getElementById("Titanium")
let Damascus =document.getElementById("Damascus-Steel")



//Gold
gold.addEventListener("click", () => {
    let filters = productdata.filter((el) => {
        return el.Category === "Gold"
       })
       console.log(filters); 
       beats(filters)
})
//Silver
silver.addEventListener("click",() => {
    let filters = productdata.filter((el) => {
        return el.Category === "Silver"
       })
       console.log(filters); 
       beats(filters)
})
//Antler
antler.addEventListener("click",() => {
    let filters = productdata.filter((el) => {
        return el.Category === "Antler"
       })
       console.log(filters); 
       beats(filters)
})
//Meteriote
meteriote.addEventListener("click",() => {
    let filters = productdata.filter((el) => {
        return el.Category === "Meteriote"
       })
       console.log(filters); 
       beats(filters)
})
//Opal
opal.addEventListener("click",() => {
    let filters = productdata.filter((el) => {
        return el.Category === "Opal"
       })
       console.log(filters); 
       beats(filters)
})
//Titanium
titanium.addEventListener("click",() => {
    let filters = productdata.filter((el) => {
        return el.Category === "Titanium"
       })
       console.log(filters); 
       beats(filters)
})
//Damascus-Steel
Damascus.addEventListener("click",() => {
    let filters = productdata.filter((el) => {
        return el.Category === "Damascus Steel"
       })
       console.log(filters); 
       beats(filters)
})



//   ......rings under $300 javascript........


    