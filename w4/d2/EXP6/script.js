function hotelCost(){
    let amounOfNights;
    let perNight=140;
    do{
        amounOfNights = prompt("How many nights you would like to stay in a hotel? ");
        console.log(amounOfNights);
    }
    while(isNaN(amounOfNights)||amounOfNights==''){
        return amounOfNights*perNight
}
}


let hotel = hotelCost();
console.log(hotel);

function planeRideCost(){
}
let planeRideCostfinal = planeRideCost();
console.log(planeRideCostfinal);

function rentalCarCost(){
}

let carForRntal = rentalCarCost();
console.log(carForRntal);


function totalVacationCost(){
    let totalAmountForTrip= hotelCost()+planeRideCost()+rentalCarCost();
    alert(`The total cost of your vacation is: ${totalAmountForTrip}`)
    console.log(totalAmountForTrip);   
}

let finalTripCost = totalVacationCost()
console.log(finalTripCost);