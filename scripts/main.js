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
})
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
        })
    }
    e.target.setAttribute("disabled", "true");  
}
