function showTime1() {

    document.getElementById("flights time").innerHTML = new Date();

}
function showTime2() {
    document.getElementById("hotels time").innerHTML = new Date();
}
function showTime3() {
    document.getElementById("orderstatus time").innerHTML = new Date();
}
function showTime4() {
    document.getElementById("rentalcarsbook time").innerHTML = new Date();
}
function showTime5() {
    document.getElementById("contact time").innerHTML = new Date();
}


// function validationForm() {
//     var fname = document.forms["contact form"]["fname"].value;
//     var lname = document.forms["contact form"]["lname"].value;
//     // var hasNumber = /\d/;
//     if (/\d/.test(fname)) {
//         alert("First name should be alphabetic only !");
//     }
//     if (/\d/.test(lname)) {
//         alert("Last name should be alphabetic only !");
//     }

//     if (fname == lname) {
//         alert("First name and Last Name can't be the same!");
//     }
//     if (fname[0] != fname[0].toUpperCase()) {
//         alert("First Name First character should be Capital Letter! Please enter again! ");
//     }

//     if (lname[0] != lname[0].toUpperCase()) {
//         alert("Last Name First character should be Capital Letter! Please enter again! ");
//     }

// }


function validateHotel() {
    var today = new Date();
    day = today.getDate();
    document.getElementsById("checkin").setAttribute("min", today);
    var inDate = document.getElementsById("checkin").value;
    var outDate = document.getElementsById("checkout").value;
    if (inDate - outDate > 0) {
        alert("Check out date should be later be after check in date")
    }


}

function showHotelSelectionForm() {
    var x = document.getElementById("hotelSelectionForm");
    if (x.style.display != "block") {
        x.style.display = "block";
    }
}

function showRentalSelectionForm() {
    var x = document.getElementById("rentalSelectionForm");
    if (x.style.display != "block") {
        x.style.display = "block";
    }
}

function offerIncreaseFontSize() {
    var x = document.getElementsByClassName("specialOffer column middle");
    for (i = 0; i < x.length; i++) {
        x[i].style.fontSize = "60px";
    }

}

function offerDecreaseFontSize() {
    var x = document.getElementsByClassName("specialOffer column middle");
    for (i = 0; i < x.length; i++) {
        x[i].style.fontSize = "8px";
    }
}


$(document).ready(function () {
    $(".question").hide();
    $(".selectFlight").hide();
    $(".enterPassenger").hide();

});



function NextBack(id) {
    $(".question").hide();
    $("#" + id).show();
}



function displayRadioValue() {
    var ele1 = document.getElementsByName("firstQues");
    yesNum = 0;
    //console.log(ele);
    for (i = 0; i < ele1.length; i++) {
        if (ele1[i].checked) {
            document.getElementById("result").innerHTML = "Your answer to First Question is: " + ele1[i].value.toUpperCase() + "<br />";
            if (ele1[i].value == "yes") {
                yesNum++;
            }
        }
    }
    var ele2 = document.getElementsByName("secondQues");
    //console.log(ele);
    for (i = 0; i < ele2.length; i++) {
        if (ele2[i].checked) {
            document.getElementById("result").innerHTML += "Your answer to Second Question is : " + ele2[i].value.toUpperCase() + "<br />";
            if (ele2[i].value == "yes") {
                yesNum++;
            }
        }
    }

    var ele3 = document.getElementsByName("thirdQues");
    //console.log(ele);
    for (i = 0; i < ele3.length; i++) {
        if (ele3[i].checked) {
            document.getElementById("result").innerHTML += "Your answer to Third Question is : " + ele3[i].value.toUpperCase();
            if (ele3[i].value == "yes") {
                yesNum++;
            }
        }
    }

    if (yesNum === 3) {
        document.getElementById("offer").innerHTML = "Congradulations ! Because you qualifiy three conditionis , you qualify for $100 off your flight!";
    } else {
        document.getElementById("offer").innerHTML = "Sorry , you didn't qualifiy for ALL THREE conditionis , no special deal offer";
    }

}

function calculateTime() {
    var start = new Date().getTime();
    document.getElementById("finishQues").addEventListener("click", () => {
        var end = new Date().getTime();
        var totalTime = (end - start) / 1000;
        //console.log(totalTime);
        document.getElementById("totalTime").innerHTML = "Total Time spent on three questions was: " + totalTime + " seconds";
    });

};


function changeBackgroundColor() {
    document.body.style.backgroundColor = "#cfd9df ";
    // window.localStorage.setItem("bgColor", "#8FBC8F");
    window.localStorage.setItem("bgColor", "#cfd9df ");
    // window.sessionStorage.setItem("bgColor", "#cfd9df ");
}


// flights page 
function chooseTripType() {
    var ele = document.getElementsByName("trip type");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            //document.getElementById("1or2").innerHTML = "you chose: " + ele[i].value.toUpperCase() + "<br />";
            $("#" + ele[i].value).show();
        }
    }
}

function displayPeopleInfo() {
    var typeSlot1 = document.getElementById("passengerTypeSlot1").value;
    var typeSlot2 = document.getElementById("passengerTypeSlot2").value;
    var typeSlot3 = document.getElementById("passengerTypeSlot3").value;
    var numSlot1 = document.getElementById("passengerNumSlot1").value;
    var numSlot2 = document.getElementById("passengerNumSlot2").value;
    var numSlot3 = document.getElementById("passengerNumSlot3").value;
    document.getElementById("1111").innerHTML = "Passenger info:" + "<br>" + typeSlot1 + ": " + numSlot1 + "<br/>" + typeSlot2 + ": " + numSlot2 + "<br>" +
        typeSlot3 + ": " + numSlot3;

    const info = {
        typeSlot1: typeSlot1,
        numSlot1: numSlot1,
        typeSlot2: typeSlot2,
        numSlot2: numSlot2,
        typeSlot3: typeSlot3,
        numSlot3: numSlot3,
    };
    window.localStorage.setItem("passenger", JSON.stringify(info));
}

function showPassenger() {
    $(".enterPassenger").show();
}

function displayFlightInfoOneWay() {
    var from1 = document.getElementById("from1").value;
    var to1 = document.getElementById("to1").value;
    var depart1 = document.getElementById("depart1").value;
    var arrival1 = document.getElementById("arrival1").value;
    document.getElementById("2222").innerHTML = "One Way <br>" + "Origin: " + from1 + "<br />" + "Destination: " + to1 + "<br />" + "Departure Date: " + depart1 + "<br />"
        + "Arrival time: " + arrival1;
    const info = {
        Origin: from1,
        Destination: to1,
        departDate: depart1,
        arrivalDate: arrival1
    };
    window.localStorage.setItem("flights", JSON.stringify(info));
    // const userData = JSON.parse(window.localStorage.getItem("flights"));
    // console.log(userData);

}

function displayFlightInfoRoundTrip() {
    var from2 = document.getElementById("from2").value;
    var to2 = document.getElementById("to2").value;
    var depart2 = document.getElementById("depart2").value;
    var arrival2 = document.getElementById("arrival2").value;
    var from3 = document.getElementById("from3").value;
    var to3 = document.getElementById("to3").value;
    var depart3 = document.getElementById("depart3").value;
    var arrival3 = document.getElementById("arrival3").value;
    document.getElementById("2222").innerHTML = "Round Trip <br>" + "Origin: " + from2 + "<br />" + "Destination: " + to2 + "<br />" + "Departure Date: " + depart2 + "<br />" +
        "Arrival time: " + arrival2 + "<br />" + "Return from:" + from3 + "<br />" + "Destination: " + to3 + "<br />" + "Departure Date:" + depart3 + "<br />" + "Arrival time" + arrival3;
    const info = {
        Origin: from2,
        Destination1: to2,
        departDate: depart2,
        arrivalDate: arrival2,
        ReturnFrom: from3,
        Destination2: to3,
        returnDate: depart3,
        returnArrivalDate: arrival3,
    };
    window.localStorage.setItem("roundTripFlights", JSON.stringify(info));
}

function displayRentalCarInfo() {
    var checkInDate = document.getElementById("rentalCheckin").value;
    var checkOutDate = document.getElementById("rentalCheckout").value;
    var city = document.getElementById("city").value;
    var carBrand = document.getElementById("chooseRentalCar").value;
    document.getElementById("4444").innerHTML = "City: " + city + "<br />" + "Check-in: " + checkInDate + "<br />" + "Check-out:" + checkOutDate + "<br />"
        + "Car: " + carBrand;
    const info = {
        City: city,
        Checkin: checkInDate,
        Checkout: checkOutDate,
        Car: carBrand
    };
    window.localStorage.setItem("rentalCar", JSON.stringify(info));

}

function displayHotelInfo() {
    var checkInDate = document.getElementById("hotelCheckin").value;
    var checkOutDate = document.getElementById("hotelCheckout").value;
    var city = document.getElementById("destin").value;
    var hotelName = document.getElementById("chooseHotel").value;
    document.getElementById("5555").innerHTML = "City: " + city + "<br />" + "Check-in: " + checkInDate + "<br />" + "Check-out:" + checkOutDate + "<br />"
        + "Hotel: " + hotelName;
    const info = {
        City: city,
        Checkin: checkInDate,
        Checkout: checkOutDate,
        Hotel: hotelName
    };
    window.localStorage.setItem("hotel", JSON.stringify(info));
}


function displayOneWayFlightStatus() {
    try {
        const flightsInfo = JSON.parse(window.localStorage.getItem("flights"));
        document.getElementById("flightCell").innerHTML = "Origin: " + flightsInfo.Origin + "<br>"
            + "Des:" + flightsInfo.Destination + "<br/>"
            + "DepartDate:" + flightsInfo.departDate + "<br/>"
            + "ArrivalDate:" + flightsInfo.arrivalDate + "<br/>"
    } catch {
        alert("Error! You didn't select One Way flight! ")

    }
}

function displayRoundTripFlightStatus() {
    try {
        const roundTripInfo = JSON.parse(window.localStorage.getItem("roundTripFlights"));
        document.getElementById("roundTripCell").innerHTML = "Origin: " + roundTripInfo.Origin + "<br>"
            + "Des:" + roundTripInfo.Destination1 + "<br/>"
            + "Depart:" + roundTripInfo.departDate + "<br/>"
            + "Arrival:" + roundTripInfo.arrivalDate + "<br/>"
            + "ReturnFrom: " + roundTripInfo.ReturnFrom + "<br>"
            + "Des:" + roundTripInfo.Destination2 + "<br/>"
            + "ReturnDate:" + roundTripInfo.returnDate + "<br/>"
            + "ArrivalDate:" + roundTripInfo.returnArrivalDate + "<br/>"
    } catch {
        alert("Error! You didn't select Round Trip flight! ")

    }
}

function displayPassengerStatus() {
    try {
        const passengerInfo = JSON.parse(window.localStorage.getItem("passenger"));
        document.getElementById("passengerCell").innerHTML = "Type: " + passengerInfo.typeSlot1 + "<br>"
            + "Number" + passengerInfo.numSlot1 + "<br/>"
            + "Type:" + passengerInfo.typeSlot2 + "<br/>"
            + "Number:" + passengerInfo.numSlot2 + "<br/>"
            + "Type:" + passengerInfo.typeSlot3 + "<br/>"
            + "Number:" + passengerInfo.numSlot3 + "<br/>"
    } catch {
        alert("Error! You didn't provide Passenger Information! ")

    }
}


function displayHotelStatus() {
    try {
        const hotelInfo = JSON.parse(window.localStorage.getItem("hotel"));
        document.getElementById("hotelCell").innerHTML = "City: " + hotelInfo.City + "<br>"
            + "Check-in:" + hotelInfo.Checkin + "<br/>"
            + "Check-out:" + hotelInfo.Checkout + "<br/>"
            + "Hotel:" + hotelInfo.Hotel + "<br/>"
    } catch {
        alert("Error! You didn't select hotel Information! ")

    }
}

function displayRentalStatus() {
    try {
        const rentalInfo = JSON.parse(window.localStorage.getItem("rentalCar"));
        document.getElementById("rentalCarCell").innerHTML = "City: " + rentalInfo.City + "<br>"
            + "Check-in:" + rentalInfo.Checkin + "<br/>"
            + "Check-out:" + rentalInfo.Checkout + "<br/>"
            + "Car:" + rentalInfo.Car
    } catch {
        alert("Error! You didn't select rental car Information! ")

    }
}


function validateRentalCarDate() {
    var checkInDate = document.getElementById("rentalCheckin").value;
    var checkOutDate = document.getElementById("rentalCheckout").value;
    if (checkInDate > checkOutDate) {
        alert("Error ! Check out date is earlier than Check in date! Please Choose the date again!");
        document.getElementById("validateInfo").innerHTML = " Error ! Check out date is earlier than Check in date! Please Choose the date again!";
    } else {
        alert("Dates are good to go! Please continue to 'search rental'");
        document.getElementById("validateRentalInfo").innerHTML = " Dates are good to go! Please continue to 'search rental'";
    }
}


function earlyThanTodayError(element) {
    //alert("date changed");
    var checkInDate = document.getElementById(element.id).value;
    //alert(document.getElementById(element.id).value)
    if (checkInDate < new Date().toISOString()) {
        alert("Error! This date has already past! The earliest available date is today, please select again!")
    }
}

function validateFlightOneWayTripDate() {
    var goDate = document.getElementById("depart1").value;
    var returnDate = document.getElementById("arrival1").value;
    if (goDate > returnDate) {
        alert("Error ! Arrival date is earlier than departure date! Please Choose the date again!");
    }
}


function validateFlightRoundTripDate() {
    var goDate = document.getElementById("depart2").value;
    var returnDate = document.getElementById("depart3").value;
    if (goDate > returnDate) {
        alert("Error ! Return date is earlier than departure date! Please Choose the date again!");
    }
    var flightOutDepartDate = document.getElementById("depart2").value;
    var flightOutArrivaltDate = document.getElementById("arrival2").value;
    var flightBackDepartDate = document.getElementById("depart3").value;
    var flightBackArrivaltDate = document.getElementById("arrival3").value;
    if (flightOutDepartDate > flightOutArrivaltDate) {
        alert("Error ! Fly out trip Arrival date is earlier than departure date! Please Choose the date again!");
    }
    if (flightBackDepartDate > flightBackArrivaltDate) {
        alert("Error ! FLy back tripArrival date is earlier than departure date! Please Choose the date again!");
    }

}

function validateHotelDate() {
    var checkInDate = document.getElementById("hotelCheckin").value;
    var checkOutDate = document.getElementById("hotelCheckout").value;
    if (checkInDate > checkOutDate) {
        alert("Error ! Check-out date is earlier than Check-in date! Please Choose the date again!");
        document.getElementById("validateHotelInfo").innerHTML = " Error ! Check out date is earlier than Check in date! Please Choose the date again!";
    } else {
        alert("Dates are good to go! Please continue to 'search hotel'");
        document.getElementById("validateHotelInfo").innerHTML = " Dates are good to go! Please continue to 'search hotel'";
    }
}


// localStorage.clear();