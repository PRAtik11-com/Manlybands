let productData1 = [];
let powerful = document.querySelector('.rebels');
let totalAmount = 0;

function focus() {
    fetch("http://localhost:3000/cart")
        .then((res) => res.json()) 
        .then((datas) => {
            productData1 = datas;
            return beats(datas);
        })
        .catch((err) => {
            console.log(err);
        });
}

function beats(datas) {
    let fresh = datas.map((el) => {
        return cardio(el.id, el.image, el.name, el.price, el.discountedPrice);
    });
    powerful.innerHTML = fresh.join(''); 

    // Add event listeners to the buttons
    const minusButtons = document.querySelectorAll('.minus-button');
    const plusButtons = document.querySelectorAll('.plus-button');
    const deleteButtons = document.querySelectorAll('.removeDelete');

    minusButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const quantitySpan = e.target.nextElementSibling; // Access the span element
            const discountedPriceSpan = e.target.closest('.cart').querySelector('.frezze2');
            const totalAmountSpan = document.querySelector('.fork');

            let quantity = parseInt(quantitySpan.textContent); // Get current quantity
            let discountedPrice = parseFloat(discountedPriceSpan.textContent); // Get current price per item

            if (quantity > 1) {
                quantity--; // Decrease quantity
                quantitySpan.textContent = quantity; // Update quantity display
                const updatedPrice = (discountedPrice / (quantity + 1)) * quantity;
                discountedPriceSpan.textContent = updatedPrice.toFixed(2); // Update price display
                updateTotalAmount(totalAmountSpan, -discountedPrice / (quantity + 1)); // Update total amount
            }
        });
    });

    plusButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const quantitySpan = e.target.previousElementSibling; // Access the span element
            const discountedPriceSpan = e.target.closest('.cart').querySelector('.frezze2');
            const totalAmountSpan = document.querySelector('.fork');

            let quantity = parseInt(quantitySpan.textContent); // Get current quantity
            let discountedPrice = parseFloat(discountedPriceSpan.textContent); // Get current price per item

            quantity++; // Increase quantity
            quantitySpan.textContent = quantity; // Update quantity display
            const updatedPrice = (discountedPrice / (quantity - 1)) * quantity;
            discountedPriceSpan.textContent = updatedPrice.toFixed(2); // Update price display
            updateTotalAmount(totalAmountSpan, discountedPrice / (quantity - 1)); // Update total amount
        });
    });

    deleteButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const cardElement = e.target.closest('.rows33'); // Get the product card element
            const quantitySpan = cardElement.querySelector('.quantity span');
            const discountedPriceSpan = cardElement.querySelector('.frezze2');
            const totalAmountSpan = document.querySelector('.fork');

            const quantity = parseInt(quantitySpan.textContent); // Get quantity
            const discountedPrice = parseFloat(discountedPriceSpan.textContent); // Get price per item

            updateTotalAmount(totalAmountSpan, -(discountedPrice * quantity)); // Subtract the total for this product
            cardElement.remove(); // Remove the product from DOM
        });
    });
}

function cardio(id, image, name, price, discountedPrice) {
    return `
    <hr>
    <div class="rows33">
        <div class="imagecarts">
            <a href="description.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&discountedPrice=${encodeURIComponent(discountedPrice)}&price=${encodeURIComponent(price)}">
                <img src="${image}" alt="not found">
            </a>
        </div>
        <div class="writingplusminus">
            <p class="amplifyer">${name}</p>
            <p class="mm">4/5 mm</p>
            <button class="addsomething">Add En Engraving</button>
            <div class="cart">
                <div class="quantity">
                    <button class="minus-button">-</button>
                    <span id="quantity">1</span>
                    <button class="plus-button">+</button>
                </div>
                <button class="removeDelete">Delete</button>
                <div class="crave2">
                    <span class="frezze1">${price}</span>
                    <span class="frezze2" id="price">${discountedPrice}</span>
                </div>
            </div>
        </div>  
        <section class="mt-3 pt-2">
            <div class="rows77">
                <p class="honors">Total:</p>
                <p class="fork" id="total-amount">${totalAmount.toFixed(2)}</p>
            </div>
        </section> 
    </div>
    `;
}

function updateTotalAmount(totalAmountSpan, amount) {
    totalAmount += amount;
    totalAmountSpan.textContent = totalAmount.toFixed(2);
}

focus();













// let productData1 = [];
// let powerful = document.querySelector('.rebels');


// function focus() {
//     fetch("http://localhost:3000/cart")
//         .then((res) => res.json()) 
//         .then((datas) => {
//             productData1 = datas;
//             return beats(datas);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

// function beats(datas) {
//     let fresh = datas.map((el) => {
//         return cardio(el.id, el.image, el.name, el.price, el.discountedPrice);
//     });
//     powerful.innerHTML = fresh.join(''); 
// }

// function cardio(id, image, name, price, discountedPrice) {
//     return `
//     <hr>
//     <div class="rows33">
//         <div class="imagecarts">
//             <a href="description.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&discountedPrice=${encodeURIComponent(discountedPrice)}&price=${encodeURIComponent(price)}"><img src="${image}" alt="not found"></a>
//         </div>
//         <div class="writingplusminus">
//             <p class="amplifyer">${name}</p>
//             <p class="mm">4/5 mm</p>
//             <button class="addsomething">Add En Engraving</button>
//             <div class="cart">
//                 <div class="quantity">
//                     <button class="minus-button">-</button>
//                     <span type="number" id="quantity" value="1">1</span>
//                     <button class="plus-button">+</button>
                    
//                 </div>
//                 <button class="removeDelete">Delete</button>
//                 <div class="crave2">
//                     <span class="frezze1">${price}</span>
//                     <span class="frezze2" id="price">${discountedPrice}</span>
//                 </div>
//             </div>
//         </div>  
          
//           <section class="mt-3 pt-2">
//             <div class="rows77">
                
//                     <p class="honors">Total:</p>
//                     <p class="fork" id="total-amount">1</p>
            
//             </div>
//           </section> 
//     </div>
                
//     `;
// }
// focus();
