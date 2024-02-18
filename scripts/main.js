// Common function for get elements using id 
function getId (id) {
    return document.getElementById(id);
}
// Common function for get Elements using classes 
function getClasses (classes) {
    return document.getElementsByClassName(classes);
}
// Common function for create Elements 
function makeElem (elemName) {
    return document.createElement(elemName)
}

// step 1 : Select all tickets button 
const ticketBtns = getClasses('ticket-btn');
// get seat Element 
const seatElem = getId("seatList");
//  make a variable for track seat count 
let seatCount = 0;
// get totalPrice element 
const totalPriceElement = getId("totalPrice");
// make a variable for total ticket price 
let totalPrice = 0;
//get dynamicTicketDiscription 
let dynamicTicketDiscription = getId("dynamicTicketDiscription");
// get left seat count element 
const seatLeft = getId("seatLeft");
// make left left seat count variable 
let seatLeftCount = 40;
// loop thrugh ticketBtns ;
// get phone number input field 
const phone = getId("phoneNumber");
// get next button 
const nextBtn = getId("nextBtn");
// get modal id 
const modal = getId("my_modal_3");
// Show success modal when click next button ;
nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.showModal();
});
// reload webpage when click crosh in modal 
const reloadPage = getId("relodBtn");
reloadPage.addEventListener('click', function () {
    window.location.reload()
});
// get copon input 
const coponInpt = getId("coponInpt");

// get apply button 
const applyBtn = getId("applyBtn");
// get Deiscounted price div 
const discountedPrice = getId("discountedPrice");
// get grand totalPrice 
const grandTotal = getId("grandTotal");

for (btn of ticketBtns) {
    //  addEventListener every single button 
    btn.addEventListener ("click",ticketClick);   
}
function ticketClick (e) {
    // Change bg color clicking the button 
    if (seatCount < 4) {
        // get seat count element 
        seatCount += 1;
        seatElem.innerText = seatCount;
        totalPrice += 550;
        totalPriceElement.innerText = totalPrice;
        grandTotal.innerText = totalPrice;
        // seatLeft count 
        seatLeftCount -= 1;
        seatLeft.innerText = seatLeftCount;
        e.target.style.backgroundColor = "#1DD100";
        e.target.style.color = 'white';
        // create and show ticiket names
        let div = makeElem("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-between"
        div.innerHTML = `<p>${ e.target.innerText}</p>
        <p>Ecommerch</p>
        <p>550</p>`;
        dynamicTicketDiscription.appendChild(div);
        phone.addEventListener("keyup", function (e) {
            if (e.target.value) {
                nextBtn.removeAttribute("disabled");
            }
        });
        if (seatCount === 4) {
            coponInpt.removeAttribute("disabled");
            applyBtn.removeAttribute("disabled");
        }
        
        
    }
    e.target.setAttribute("disabled", "true");  
}
applyBtn.addEventListener("click",function () {
    let coponValue = coponInpt.value;
    const splitedCoponValue = coponValue.split(" ").join("");
    let coponValueUpperCase = splitedCoponValue.toUpperCase ();
    if (coponValueUpperCase ===  "NEW15") {
        getDiscount(totalPrice,15);
        coponInpt.classList.add("hidden");
        applyBtn.classList.add("hidden");
    }else if (coponValueUpperCase === "COUPLE20") {
        getDiscount(totalPrice,20);
        coponInpt.classList.add("hidden");
        applyBtn.classList.add("hidden");
    } else {
        alert("How have provide invalid copoun code !")
    }
});
// function for get discount price 
function getDiscount (totalPrice,discountAmount) {
    const discount = (totalPrice * discountAmount) / 100;
    discountedPrice.style.display = "flex";
    discountedPrice.style.justifyContent = "space-between";
    discountedPrice.style.margin = "20px"
    discountedPrice.innerHTML = `<p>Discounted Price</p>
    <p>${discount}</p>`;
    const grandTotalPrice = totalPrice - discount;
    grandTotal.innerText = grandTotalPrice;
}