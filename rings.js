//Rings Data Fetch
let productdata = [];
let show = document.querySelector(".container56")
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
        return scences(el.id,el.image,el.src2,el.name,el.price,el.discountedPrice,el.Category) 
    })
    show.innerHTML= fresh.join("")
}
function scences(id,image,src2,name,price,discountedPrice,Category){
    return `
      <div class="items1" data-id="${id}">
      <a href="#"><img src="${image}" alt="not found"></a>
      <div class="beta">
            <a href="description.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&Category=${encodeURIComponent(Category)}&discountedPrice=${encodeURIComponent(discountedPrice)}&price=${encodeURIComponent(price)}&src2=${encodeURIComponent(src2)}"><img src="${src2}" alt="The Baller"></a>
      </div>
        <div class="cross1">
                    <h5 class="cross1title">${name}</h5>
                    <strong class="crosscategory">${Category}</strong>
                    <span class="cross1text">${price}</span>
                    <span class="cross1price">${discountedPrice}</span>
                </div>
      </div>        
    `
}
let sortlow = document.getElementById("lowtoHigh")
let sorthigh = document.getElementById("Hightolow")
let AZsort = document.getElementById("AZ")
let ZAsort = document.getElementById("ZA")
let gold = document.getElementById("Gold")
let silver = document.getElementById("Silver")
let antler = document.getElementById("Antler")
let meteriote = document.getElementById("Meteriote")
let opal = document.getElementById("Opal")
let titanium = document.getElementById("Titanium")
let Damascus =document.getElementById("Damascus-Steel")


// sort based on low to high
sortlow.addEventListener("click", () => {
    // alert("her")
    let setData = productdata.sort((a,b) => {
        return a.discountedPrice -b.discountedPrice
    })
    console.log(setData);
    beats(setData); 
  });

// sort based on high to low
sorthigh.addEventListener("click", () => {
    // alert("hello")
    let highDataset = productdata.sort((a,b) => {
        return b.discountedPrice - a.discountedPrice
    })
    console.log(highDataset);
    beats(highDataset)
}) 

//sort A-Z
AZsort.addEventListener("click",() => {
    // alert("hello")
    let TVS = productdata.sort((a,b) => {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    })
    beats(TVS)
})

//sort Z-A
ZAsort.addEventListener("click", () => {
    // alert("hello")
    let SVT = productdata.sort((a,b) => {
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
    })
    beats(SVT)
})

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
