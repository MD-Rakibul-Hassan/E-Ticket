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
// dynamicTicketDiscription 
let dynamicTicketDiscription = getId("dynamicTicketDiscription");
// loop thrugh ticketBtns ;
for (btn of ticketBtns) {
    //  addEventListener every single button 
    btn.addEventListener ("click",function (e) {
        // Change bg color clicking the button 
        e.target.style.backgroundColor = "#1DD100";
        e.target.style.color = 'white';
        // get seat count element 
        seatCount += 1;
        seatElem.innerText = seatCount;
        totalPrice += 550;
        totalPriceElement.innerText = totalPrice;
        // create ul element 
        let div = makeElem("div");
        div.style.display = "flex";
        div.style.justifyContent = "space-between"
        div.innerHTML = `<p>${ e.target.innerText}</p>
        <p>Ecommerch</p>
        <p>550</p>
         `;
        dynamicTicketDiscription.appendChild(div);
        
    })
    
}