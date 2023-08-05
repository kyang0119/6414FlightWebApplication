//this document has all query functions for assignment 4

// const { text } = require("express");

//Use jquery to create flight table and add 10 flights
// $(document).ready(function () {
function searchOneWayFlight() {
    //use jquery create div and create table header
    var div = $("<div id='flightTableDiv'></div>");
    $("#flightsColumnMiddle").append(div);
    var searchedFlights = $("<p><b>One Way Trip Research Results(from user input):</b></p>")
    var table = $("<table id=flightTable></table>");
    $("#flightTableDiv").append(searchedFlights, table);
    var row = $("<tr id='flightTableHeader'></tr>");
    $("#flightTable").append(row);
    var header1 = $("<th></th>").text("Origin");
    var header2 = $("<th></th>").text("Destination");
    var header3 = $("<th></th>").text("Departure Date");
    var header4 = $("<th></th>").text("Departure Time");
    var header5 = $("<th></th>").text("Arrival Date");
    var header6 = $("<th></th>").text("Arrival Time");
    var header7 = $("<th></th>").text("Price");
    var header8 = $("<th></th>").text("Choose Flight");
    $("#flightTableHeader").append(header1, header2, header3, header4, header5, header6, header7, header8);

    //use jquery to create ten one way flights based on user input
    const flightsInfo = JSON.parse(window.localStorage.getItem("flights"));
    var flightsArray = new Array();
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "7:00", flightsInfo.arrivalDate, "11:00", "$480"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "8:00", flightsInfo.arrivalDate, "12:00", "$490"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "9:00", flightsInfo.arrivalDate, "13:00", "$520"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "10:00", flightsInfo.arrivalDate, "14:00", "$680"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "11:00", flightsInfo.arrivalDate, "15:00", "$680"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "12:00", flightsInfo.arrivalDate, "16:00", "$560"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "13:00", flightsInfo.arrivalDate, "17:00", "$830"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "14:00", flightsInfo.arrivalDate, "18:00", "$820"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "15:00", flightsInfo.arrivalDate, "19:00", "$590"]);
    flightsArray.push([flightsInfo.Origin, flightsInfo.Destination, flightsInfo.departDate, "16:00", flightsInfo.arrivalDate, "20:00", "$660"]);

    // add the data rows
    for (var i = 0; i < flightsArray.length; i++) {
        row = $("<tr id='flightTableDataRow" + (i) + "'></tr>");
        for (var j = 0; j < flightsArray[0].length; j++) {
            var cell = $("<td id='flightTableCell" + i + j + "'></td>")
            cell.html(flightsArray[i][j]);
            row.append(cell);
        }
        $("#flightTable").append(row);
    }

    // to create radio button 
    var rowCount = $("#flightTable tr").length - 1;
    console.log(rowCount);
    // var radio = $("<input type='radio'>");
    // $(`#flightTableDataRow0`).append(radio);
    for (var i = 0; i < rowCount; i++) {
        // var radio = $("<input type='radio' id='flightTableRadioBtnRow" + (i) + "'>");
        var radio = $(`<td><input type='radio' id='flightTableRadioBtnRow${i}' value='${i}'></td>`);
        $(`#flightTableDataRow${i}`).append(radio);
    }

    // use jquery to create cart
    var cart = $(`<a href='#' id='flightCart' class='cart'>Add to Cart</a>`);
    var cartInfo = $(`<p id='flightCartInfo' class='cart'></p>`);
    $("#flightTableDiv").append(cart, cartInfo);
    // $("#flightColumnMiddle").append(cart, cartInfo);

}


//10 flights round trip table 
//Use jquery to create flight table and add 10 flights for round trip.
function searchRoundTripFlight() {
    //use jquery create div and create table
    var div = $("<div id='flightTableRoundTripDiv'></div>");
    $("#flightsColumnMiddle").append(div);
    var searchedFlights = $("<p><b>Round Trip Research Results(from user input):</b></p>")
    var table = $("<table id=flightTableRoundTrip></table>");
    $("#flightTableRoundTripDiv").append(searchedFlights, table);
    var row = $("<tr id='flightTableRoundTripHeader'></tr>");
    $("#flightTableRoundTrip").append(row);
    var header1 = $("<th></th>").text("Origin");
    var header2 = $("<th></th>").text("Destination");
    var header3 = $("<th></th>").text("Departure Date");
    var header4 = $("<th></th>").text("Departure Time");
    var header5 = $("<th></th>").text("Arrival Date");
    var header6 = $("<th></th>").text("Arrival Time");
    var header7 = $("<th></th>").text("Price");
    var header8 = $("<th></th>").text("Choose Flight");
    $("#flightTableRoundTripHeader").append(header1, header2, header3, header4, header5, header6, header7, header8);

    //use jquery to create ten one way flights based on user input
    const roundTripInfo = JSON.parse(window.localStorage.getItem("roundTripFlights"));
    var flightsArray = new Array();
    flightsArray.push([roundTripInfo.Origin, roundTripInfo.Destination1, roundTripInfo.departDate, "7:00", roundTripInfo.arrivalDate, "15:00", "$630"]);
    flightsArray.push([roundTripInfo.ReturnFrom, roundTripInfo.Destination2, roundTripInfo.returnDate, "12:00", roundTripInfo.returnArrivalDate, "18:00", "$630"]);
    flightsArray.push([roundTripInfo.Origin, roundTripInfo.Destination1, roundTripInfo.departDate, "8:00", roundTripInfo.arrivalDate, "16:00", "$630"]);
    flightsArray.push([roundTripInfo.ReturnFrom, roundTripInfo.Destination2, roundTripInfo.returnDate, "13:00", roundTripInfo.returnArrivalDate, "19:00", "$700"]);
    flightsArray.push([roundTripInfo.Origin, roundTripInfo.Destination1, roundTripInfo.departDate, "9:00", roundTripInfo.arrivalDate, "17:00", "$680"]);
    flightsArray.push([roundTripInfo.ReturnFrom, roundTripInfo.Destination2, roundTripInfo.returnDate, "14:00", roundTripInfo.returnArrivalDate, "22:00", "$630"]);
    flightsArray.push([roundTripInfo.Origin, roundTripInfo.Destination1, roundTripInfo.departDate, "10:00", roundTripInfo.arrivalDate, "18:00", "$750"]);
    flightsArray.push([roundTripInfo.ReturnFrom, roundTripInfo.Destination2, roundTripInfo.returnDate, "15:00", roundTripInfo.returnArrivalDate, "23:00", "$620"]);
    flightsArray.push([roundTripInfo.Origin, roundTripInfo.Destination1, roundTripInfo.departDate, "11:00", roundTripInfo.arrivalDate, "19:00", "$760"]);
    flightsArray.push([roundTripInfo.ReturnFrom, roundTripInfo.Destination2, roundTripInfo.returnDate, "15:30", roundTripInfo.returnArrivalDate, "23:30", "$590"]);


    // add the data rows
    for (var i = 0; i < flightsArray.length; i++) {
        row = $("<tr id='flightTableRoundTripDataRow" + (i) + "'></tr>");
        for (var j = 0; j < flightsArray[0].length; j++) {
            var cell = $("<td id='flightTableRoundTripCell" + i + j + "'></td>")
            cell.html(flightsArray[i][j]);
            row.append(cell);
        }
        $("#flightTableRoundTrip").append(row);
    }

    // to create radio button 
    var rowCount = $("#flightTableRoundTrip tr").length - 1;
    console.log(rowCount);
    // var radio = $("<input type='radio'>");
    // $(`#flightTableDataRow0`).append(radio);
    for (var i = 0; i < rowCount; i++) {
        // var radio = $("<input type='radio' id='flightTableRadioBtnRow" + (i) + "'>");
        var radio = $(`<td><input type='radio' id='flightTableRoundTripRadioBtnRow${i}' value='${i}'></td>`);
        $(`#flightTableRoundTripDataRow${i}`).append(radio);
    }

    // use jquery to create cart
    var cart = $(`<a href='#' id=flightCartRoundTrip class=cart >Add to Cart</a>`)
    var cartInfo = $(`<p id='flightCartInfoRoundTrip' class='cart'></p>`);
    $("#flightTableRoundTripDiv").append(cart, cartInfo);

}


//Use jquery to create hotel table
function searchHotel() {
    var div = $("<div id=hotelTableDiv></div>");
    $("#hotelsColumnMiddle").append(div);
    var searchedHotel = $("<p><b>Hotel Research Results(from user input):</b></p>")
    var table = $("<table id=hotelTable></table>");
    $("#hotelTableDiv").append(searchedHotel, table);
    var row = $("<tr id='hotelTableHeader'></tr>");
    $("#hotelTable").append(row);
    var header1 = $("<th></th>").text("City");
    var header2 = $("<th></th>").text("Hotel");
    var header3 = $("<th></th>").text("Check-in Date");
    var header4 = $("<th></th>").text("Check-out Date");
    var header5 = $("<th></th>").text("Price");
    var header6 = $("<th></th>").text("Choose Hotel");

    $("#hotelTableHeader").append(header1, header2, header3, header4, header5, header6);

    //use jquery to create ten hotels
    const hotelInfo = JSON.parse(window.localStorage.getItem("hotel"));
    var hotelArray = new Array();
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$280 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$250 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$180 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$230 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$160 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$200 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$150 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$320 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$280 Per Day"]);
    hotelArray.push([hotelInfo.City, hotelInfo.Hotel, hotelInfo.Checkin, hotelInfo.Checkout, "$220 Per Day"]);

    // add the data rows for hotel table
    for (var i = 0; i < hotelArray.length; i++) {
        row = $("<tr id='hotelTableDataRow" + (i) + "'></tr>");
        for (var j = 0; j < hotelArray[0].length; j++) {
            var cell = $("<td id='hotelTableCell" + i + j + "'></td>")
            cell.html(hotelArray[i][j]);
            row.append(cell);
        }
        $("#hotelTable").append(row);
    }

    //add radio button for hotel table
    var rowCount = $("#hotelTable tr").length - 1;
    console.log(rowCount);
    // var radio = $("<input type='radio'>");
    // $(`#flightTableDataRow0`).append(radio);
    for (var i = 0; i < rowCount; i++) {
        // var radio = $("<input type='radio' id='flightTableRadioBtnRow" + (i) + "'>");
        var radio = $(`<td><input type='radio' id='hotelTableRadioBtnRow${i}' value='${i}'></td>`);
        $(`#hotelTableDataRow${i}`).append(radio);
    }

    // use jquery to create cart
    var cart = $(`<a href='#' id=hotelCart class=cart >Add to Cart</a>`);
    var cartInfo = $(`<p id='hotelCartInfo' class='cart'></p>`);
    $("#hotelTableDiv").append(cart, cartInfo);
}


//Use jquery to create rental car table
function searchRental() {
    var div = $("<div id=rentalsTableDiv></div>");
    $("#rentalsColumnMiddle").append(div);
    var searchedRental = $("<p><b>Rental Cars Research Results(from user input):</b></p>")
    var table = $("<table id=rentalTable></table>");
    $("#rentalsTableDiv").append(searchedRental, table);
    var row = $("<tr id='rentalTableHeader'></tr>");
    $("#rentalTable").append(row);
    var header1 = $("<th></th>").text("Name");
    var header2 = $("<th></th>").text("Check-in Date");
    var header3 = $("<th></th>").text("Check-out Date");
    var header4 = $("<th></th>").text("Price");
    var header5 = $("<th></th>").text("Choose Car");

    $("#rentalTableHeader").append(header1, header2, header3, header4, header5);

    //use jquery to create ten hotels
    const rentalInfo = JSON.parse(window.localStorage.getItem("rentalCar"));
    var rentalCarArray = new Array();
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$80 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$180 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$260 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$220 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$130 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$80 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$99 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$320 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$170 Per Day"]);
    rentalCarArray.push([rentalInfo.Car, rentalInfo.Checkin, rentalInfo.Checkout, "$190 Per Day"]);


    // add the data rows for rental table
    for (var i = 0; i < rentalCarArray.length; i++) {
        row = $("<tr id='rentalTableDataRow" + (i) + "'></tr>");
        for (var j = 0; j < rentalCarArray[0].length; j++) {
            var cell = $("<td id='rentalTableCell" + i + j + "'></td>")
            cell.html(rentalCarArray[i][j]);
            row.append(cell);
        }
        $("#rentalTable").append(row);
    }

    //add radio button for rental table
    var rowCount = $("#rentalTable tr").length - 1;
    console.log(rowCount);
    // var radio = $("<input type='radio'>");
    // $(`#flightTableDataRow0`).append(radio);
    for (var i = 0; i < rowCount; i++) {
        // var radio = $("<input type='radio' id='flightTableRadioBtnRow" + (i) + "'>");
        var radio = $(`<td><input type='radio' id='rentalTableRadioBtnRow${i}' value='${i}'></td>`);
        $(`#rentalTableDataRow${i}`).append(radio);
    }

    // use jquery to create cart
    var cart = $(`<a href='#' id=rentalCart class=cart >Add to Cart</a>`)
    var cartInfo = $(`<p id='rentalCartInfo' class='cart'></p>`);
    $("#rentalsTableDiv").append(cart, cartInfo);
}

//traverse xml to get information to flight table
$(document).ready(function () {
    var parser, xmlDoc; const rows = [];
    var text = "<flightList>" +
        "<flight>" +
        "<origin>Dallas</origin>" +
        "<destination>Hawaii</destination>" +
        "<departureDate>07-20-23</departureDate>" +
        "<departureTime>8:00</departureTime>" +
        "<arrivalDate>07-20-23</arrivalDate>" +
        "<arrivalTime>17:00</arrivalTime>" +
        "<price>$1200</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>Dallas</origin>" +
        "<destination>Austin</destination>" +
        "<departureDate>07-22-23</departureDate>" +
        "<departureTime>7:00</departureTime>" +
        "<arrivalDate>07-22-23</arrivalDate>" +
        "<arrivalTime>9:00</arrivalTime>" +
        "<price>$200</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>New York</origin>" +
        "<destination>LA</destination>" +
        "<departureDate>07-23-23</departureDate>" +
        "<departureTime>21:00</departureTime>" +
        "<arrivalDate>7-24-23</arrivalDate>" +
        "<arrivalTime>1:00</arrivalTime>" +
        "<price>$500</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>Dallas</origin>" +
        "<destination>Cancun</destination>" +
        "<departureDate>08-10-23</departureDate>" +
        "<departureTime>7:00</departureTime>" +
        "<arrivalDate>08-10-23</arrivalDate>" +
        "<arrivalTime>17:00</arrivalTime>" +
        "<price>$680</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>LA</origin>" +
        "<destination>London</destination>" +
        "<departureDate>09-20-23</departureDate>" +
        "<departureTime>7:00</departureTime>" +
        "<arrivalDate>09-21-23</arrivalDate>" +
        "<arrivalTime>3:00</arrivalTime>" +
        "<price>$970</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>Seatle</origin>" +
        "<destination>Austin</destination>" +
        "<departureDate>09-18-23</departureDate>" +
        "<departureTime>12:00</departureTime>" +
        "<arrivalDate>09-19-23</arrivalDate>" +
        "<arrivalTime>17:00</arrivalTime>" +
        "<price>$620</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>DC</origin>" +
        "<destination>San Francisco</destination>" +
        "<departureDate>10-10-23</departureDate>" +
        "<departureTime>17:00</departureTime>" +
        "<arrivalDate>10-10-23</arrivalDate>" +
        "<arrivalTime>23:00</arrivalTime>" +
        "<price>$800</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>Boston</origin>" +
        "<destination>Austin</destination>" +
        "<departureDate>08-18-23</departureDate>" +
        "<departureTime>7:00</departureTime>" +
        "<arrivalDate>08-19-23</arrivalDate>" +
        "<arrivalTime>17:00</arrivalTime>" +
        "<price>$400</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>Atlana</origin>" +
        "<destination>Denver</destination>" +
        "<departureDate>10-01-23</departureDate>" +
        "<departureTime>7:00</departureTime>" +
        "<arrivalDate>10-01-23</arrivalDate>" +
        "<arrivalTime>12:00</arrivalTime>" +
        "<price>$610</price>" +
        "</flight>" +

        "<flight>" +
        "<origin>Dallas</origin>" +
        "<destination>Pheonix</destination>" +
        "<departureDate>10-10-23</departureDate>" +
        "<departureTime>7:00</departureTime>" +
        "<arrivalDate>10-11-23</arrivalDate>" +
        "<arrivalTime>15:00</arrivalTime>" +
        "<price>$200</price>" +
        "</flight>" +
        "</flightList>";

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
    var rowNum = xmlDoc.documentElement.childNodes.length;
    var colNum = xmlDoc.documentElement.childNodes[0].childNodes.length;
    console.log(rowNum);
    console.log(colNum);

    // create xml flight table header
    var div = $("<div id='flightTableXMLDiv'></div>");
    $("#flightsColumnMiddle").append(div);
    var popularFlights = $("<p><b>Popular Flights(from XML):</b></p>")
    var table = $("<table id=flightTableXML></table>");
    $("#flightTableXMLDiv").append(popularFlights, table);
    var row = $("<tr id='flightTableXMLHeader'></tr>");
    $("#flightTableXML").append(row);
    var header1 = $("<th></th>").text("Origin");
    var header2 = $("<th></th>").text("Destination");
    var header3 = $("<th></th>").text("Departure Date");
    var header4 = $("<th></th>").text("Departure Time");
    var header5 = $("<th></th>").text("Arrival Date");
    var header6 = $("<th></th>").text("Arrival Time");
    var header7 = $("<th></th>").text("Price");
    // var header8 = $("<th></th>").text("Choose Flight");
    $("#flightTableXMLHeader").append(header1, header2, header3, header4, header5, header6, header7);

    // put data in 
    for (let i = 0; i < rowNum; i++) {
        rows[i] = $("<tr id='flightTableXMLDataRow" + (i) + "'></tr>");
        // rows[i] = $("<tr id='flightrow${i}'></tr>");
        for (var j = 0; j < colNum; j++) {
            var y = xmlDoc.documentElement.childNodes[i].childNodes[j].childNodes[0].nodeValue;
            //console.log(y);
            var tablleCell = $("<td id='flightTableXMLCell" + (i) + j + "'></td>").text(y);
            // console.log(tablleCell);
            rows[i].append(tablleCell);
        }
        $("#flightTableXML").append(rows[i]);
    }
})


//traverse xml to get information to hotel table
$(document).ready(function () {
    var parser, xmlDoc; const rows = [];
    var text = "<cityList>" +
        "<hotel>" +
        "<city>Dallas</city>" +
        "<hotelName>Hilton</hotelName>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-23-23</check-outDate>" +
        "<price>$200 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>Austin</city>" +
        "<hotelName>Holiday Inn</hotelName>" +
        "<check-inDate>07-28-23</check-inDate>" +
        "<check-outDate>07-29-23</check-outDate>" +
        "<price>$86 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>Las Vegas</city>" +
        "<hotelName>Cosmopolitan</hotelName>" +
        "<check-inDate>08-20-23</check-inDate>" +
        "<check-outDate>08-25-23</check-outDate>" +
        "<price>$188 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>Hawaii</city>" +
        "<hotelName>Marriott</hotelName>" +
        "<check-inDate>08-20-23</check-inDate>" +
        "<check-outDate>08-22-23</check-outDate>" +
        "<price>$268 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>Dallas</city>" +
        "<hotelName>The Grand Hotel</hotelName>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-21-23</check-outDate>" +
        "<price>$120 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>Orlando</city>" +
        "<hotelName>Disney Resort</hotelName>" +
        "<check-inDate>09-20-23</check-inDate>" +
        "<check-outDate>09-25-23</check-outDate>" +
        "<price>$260 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>San Marcos</city>" +
        "<hotelName>Marriott</hotelName>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-28-23</check-outDate>" +
        "<price>$125 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>San Diego</city>" +
        "<hotelName>La Quinta</hotelName>" +
        "<check-inDate>09-17-23</check-inDate>" +
        "<check-outDate>09-23-23</check-outDate>" +
        "<price>$99 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>Los Angels</city>" +
        "<hotelName>La Quinta</hotelName>" +
        "<check-inDate>09-18-23</check-inDate>" +
        "<check-outDate>09-28-23</check-outDate>" +
        "<price>$79 Per Day</price>" +
        "</hotel>" +

        "<hotel>" +
        "<city>New York</city>" +
        "<hotelName>Hilton</hotelName>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-28-23</check-outDate>" +
        "<price>$288 Per Day</price>" +
        "</hotel>" +

        "</cityList>";

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
    var rowNum = xmlDoc.documentElement.childNodes.length;
    var colNum = xmlDoc.documentElement.childNodes[0].childNodes.length;
    console.log(rowNum);
    console.log(colNum);

    // create xml hotel table header
    var div = $("<div id='hotelTableXMLDiv'></div>");
    $("#hotelsColumnMiddle").append(div);
    var popularHotel = $("<p><b>Popular Hotels(from XML):</b></p>")
    var table = $("<table id=hotelTableXML></table>");
    $("#hotelTableXMLDiv").append(popularHotel, table);
    var row = $("<tr id='hotelTableXMLHeader'></tr>");
    $("#hotelTableXML").append(row);
    var header1 = $("<th></th>").text("City");
    var header2 = $("<th></th>").text("Hotel");
    var header3 = $("<th></th>").text("Check-in Date");
    var header4 = $("<th></th>").text("Check-out Date");
    var header5 = $("<th></th>").text("Price");
    // var header8 = $("<th></th>").text("Choose Flight");
    $("#hotelTableXMLHeader").append(header1, header2, header3, header4, header5);

    for (let i = 0; i < rowNum; i++) {
        rows[i] = $("<tr id='hotelTableXMLDataRow" + (i) + "'></tr>");
        // rows[i] = $("<tr id='flightrow${i}'></tr>");
        for (var j = 0; j < colNum; j++) {
            var y = xmlDoc.documentElement.childNodes[i].childNodes[j].childNodes[0].nodeValue;
            // console.log(y);
            var tablleCell = $("<td id='hotelTableXMLCell" + (i) + j + "'></td>").text(y);
            // console.log(tablleCell);
            rows[i].append(tablleCell);
        }
        $("#hotelTableXML").append(rows[i]);
    }
})


//traverse xml to get information to rental table
$(document).ready(function () {
    var parser, xmlDoc; const rows = [];
    var text = "<rentalCarList>" +
        "<car>" +
        "<name>Chysler</name>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-25-23</check-outDate>" +
        "<price>$160 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>BMW</name>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-22-23</check-outDate>" +
        "<price>$300 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Nissan</name>" +
        "<check-inDate>07-28-23</check-inDate>" +
        "<check-outDate>08-05-23</check-outDate>" +
        "<price>$88 Per Day</price>" +
        "</car>" +


        "<car>" +
        "<name>Chevrolet</name>" +
        "<check-inDate>08-10-23</check-inDate>" +
        "<check-outDate>08-20-23</check-outDate>" +
        "<price>$119 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Dodge</name>" +
        "<check-inDate>08-20-23</check-inDate>" +
        "<check-outDate>08-25-23</check-outDate>" +
        "<price>$175 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Infinity</name>" +
        "<check-inDate>08-22-23</check-inDate>" +
        "<check-outDate>08-29-23</check-outDate>" +
        "<price>$170 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Ford</name>" +
        "<check-inDate>09-02-23</check-inDate>" +
        "<check-outDate>09-20-23</check-outDate>" +
        "<price>$89 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Volkswagen</name>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-29-23</check-outDate>" +
        "<price>$96 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Tesla</name>" +
        "<check-inDate>09-20-23</check-inDate>" +
        "<check-outDate>09-22-23</check-outDate>" +
        "<price>$300 Per Day</price>" +
        "</car>" +

        "<car>" +
        "<name>Kia</name>" +
        "<check-inDate>07-20-23</check-inDate>" +
        "<check-outDate>07-30-23</check-outDate>" +
        "<price>$65 Per Day</price>" +
        "</car>" +

        "</rentalCarList>";

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, "text/xml");
    var rowNum = xmlDoc.documentElement.childNodes.length;
    var colNum = xmlDoc.documentElement.childNodes[0].childNodes.length;
    console.log(rowNum);
    console.log(colNum);

    // create xml rental table header
    var div = $("<div id='rentalTableXMLDiv'></div>");
    $("#rentalsColumnMiddle").append(div);
    var popularRental = $("<p><b>Popular Rental Cars(from XML):</b></p>")
    var table = $("<table id=rentalTableXML></table>");
    $("#rentalTableXMLDiv").append(popularRental, table);
    var row = $("<tr id='rentalTableXMLHeader'></tr>");
    $("#rentalTableXML").append(row);
    var header1 = $("<th></th>").text("Car");
    var header2 = $("<th></th>").text("Check-in Date");
    var header3 = $("<th></th>").text("Check-out Date");
    var header4 = $("<th></th>").text("Price");
    // var header8 = $("<th></th>").text("Choose Flight");
    $("#rentalTableXMLHeader").append(header1, header2, header3, header4);

    for (let i = 0; i < rowNum; i++) {
        rows[i] = $("<tr id='rentalTableXMLDataRow" + (i) + "'></tr>");
        // rows[i] = $("<tr id='flightrow${i}'></tr>");
        for (var j = 0; j < colNum; j++) {
            var y = xmlDoc.documentElement.childNodes[i].childNodes[j].childNodes[0].nodeValue;
            // console.log(y);
            var tablleCell = $("<td id='rentalTableXMLCell" + (i) + j + "'></td>").text(y);
            // console.log(tablleCell);
            rows[i].append(tablleCell);
        }
        $("#rentalTableXML").append(rows[i]);
    }
})


$(document).ready(function () {
    //use delegation from parent element that is static to child elements that are dynamiclly created. 
    $("#flightsColumnMiddle").on('click', '#flightTable :radio', function () {
        if (this.previous) {
            this.checked = false;
            $(this.parentElement.parentElement).css("opacity", "1");

        } else {
            this.previous = this.checked;
            $(this.parentElement.parentElement).css("opacity", "0.5");

        }
    })

    $("#flightsColumnMiddle").on('click', '#flightTableRoundTrip :radio', function () {
        if (this.previous) {
            this.checked = false;
            $(this.parentElement.parentElement).css("opacity", "1");

        } else {
            this.previous = this.checked;
            $(this.parentElement.parentElement).css("opacity", "0.5");

        }
    })

    $("#hotelsColumnMiddle").on('click', '#hotelTable :radio', function () {
        if (this.previous) {
            this.checked = false;
            $(this.parentElement.parentElement).css("opacity", "1");

        } else {
            this.previous = this.checked;
            $(this.parentElement.parentElement).css("opacity", "0.5");

        }
    })

    $("#rentalsColumnMiddle").on('click', '#rentalTable :radio', function () {
        if (this.previous) {
            this.checked = false;
            $(this.parentElement.parentElement).css("opacity", "1");

        } else {
            this.previous = this.checked;
            $(this.parentElement.parentElement).css("opacity", "0.5");

        }
    })

})


//create JSON object

function convertToJSON() {
    var count = 0;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phoneNum = document.getElementById("phone").value;
    var isMale = document.getElementById("male").checked;
    var isFemale = document.getElementById("female").checked;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    if (fname == "") {
        alert("First name is required !");
        count++;
    }

    if (lname == "") {
        alert("Last name is required !");
        count++;
    }

    if (/\d/.test(fname)) {
        alert("First name should be alphabetic only !");
        count++;
    }

    if (/\d/.test(lname)) {
        alert("Last name should be alphabetic only !");
        count++;
    }

    if (fname == lname && fname != "" && lname != "") {
        alert("First name and Last Name can't be the same!");
        count++;
    }
    if (fname[0] != fname[0].toUpperCase()) {
        alert("First Name First character should be Capital Letter! Please enter again! ");
        count++;
    }

    if (lname[0] != lname[0].toUpperCase()) {
        alert("Last Name First character should be Capital Letter! Please enter again! ");
        count++;
    }

    if (!email.includes(".") || (!email.includes("@"))) {
        alert("Email address should contain @ and '.', please try again");
        count++;
    }

    if (comment.length < 10) {
        alert("Comments should be at least 10 characters, please try again");
        count++;
    }

    var regExp = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
    if (!phoneNum.match(regExp) || phoneNum == "" || phoneNum == null) {
        alert("Phone number format should be xxx-xxx-xxxx or xxx.xxx.xxxx,  please try again");
        count++;
    }


    if (count > 0) return
    // document.getElementById("jsonOutput").innerHTML = "First Name: " + fname + '<br>'
    //     + "Last Name: " + lname + '<br>'
    //     + "First Name: " + fname + '<br>'
    //     + "Phone Number: " + phoneNum + '<br>'
    //     + "Male:" + isMale + '<br>'
    //     + "Female: " + isFemale + '<br>'
    //     + "Email: " + email + '<br>'
    //     + "comment: " + comment + '<br>'

    var jsObj = { FirstName: lname, LastName: lname, PhoneNumber: phoneNum, Male: isMale, Female: isFemale, Email: email, Comment: comment };
    var myJSON = JSON.stringify(jsObj);
    document.getElementById("jsonOutput").innerHTML = myJSON;
}

//oneWayFlight add to cart function
function oneWayFlightAddToCart() {
    // alert("i'm in add to cart function");
    var checkedRadio = $("#flightsColumnMiddle").find(' td input:radio:checked');
    flight = [];
    price = 0;
    for (var i = 0; i < checkedRadio.length; i++) {
        // get the checked radio button value , which matches the row number
        var x = checkedRadio[i].value;
        // alert(x);

        $(`#flightTableDataRow${x} td`).each(function () {
            if ($(this).text() != "")
                flight.push($(this).text());
            if ($(this).text().startsWith('$')) {
                var priceNoDollarSign = $(this).text().replace(/[^0-9]/g, '');
                price += parseInt(priceNoDollarSign);
            }
        });

    }
    var element = $("#flightsColumnMiddle").find('#flightCartInfo');
    alert("You added to cart: \n" + flight.join('\n'));
    alert("Total One Way Flight Price: $" + price);
    element.text("You added: " + flight + ". Total oneway flight price: $" + price);
    sessionStorage.setItem("OneWayFlightTotal", price);
    // alert(sessionStorage.getItem("OneWayFlightTotal"));
    sessionStorage.setItem("OneWayFlightInfo", flight);
    // alert(sessionStorage.getItem("OneWayFlightInfo"));

}

$("#flightsColumnMiddle").on('click', '#flightCart', function () {
    oneWayFlightAddToCart();
})

//has problem 
//Round trip Flight add to cart function 
function roundTripFlightAddToCart() {
    // alert("i'm in add to cart function");
    var checkedRadio = $("#flightsColumnMiddle").find('#flightTableRoundTrip input:radio:checked')
    console.log(checkedRadio);
    flight = [];
    price = 0;
    for (var i = 0; i < checkedRadio.length; i++) {
        // get the checked radio button value , which matches the row number
        var x = checkedRadio[i].value;
        // $("#flightsColumnMiddle").find(`#flightTableRoundTripDataRow${x} td`));
        $(`#flightTableRoundTripDataRow${x} td`).each(function () {
            // $(`#flightTableRoundTripDataRow${x} td`).each(function () {
            if ($(this).text() != "")
                flight.push($(this).text());
            if ($(this).text().startsWith('$')) {
                var priceNoDollarSign = $(this).text().replace(/[^0-9]/g, '');
                price += parseInt(priceNoDollarSign);
            }
        });

    }
    var element = $("#flightsColumnMiddle").find('#flightCartInfoRoundTrip');
    alert("You added to cart: \n" + flight.join('\n'));
    alert("Total round-trip Flight Price: $" + price);
    element.text("You added: " + flight + ". Total round-trip flight price: $" + price);
    sessionStorage.setItem("roundTripFlightTotal", price);
    // alert(sessionStorage.getItem("OneWayFlightTotal"));
    sessionStorage.setItem("roundTripFlightInfo", flight);
    // alert(sessionStorage.getItem("OneWayFlightInfo"));

}

$("#flightsColumnMiddle").on('click', '#flightCartRoundTrip', function () {
    roundTripFlightAddToCart();
})


//hotel add to cart function
function hotelAddToCart() {
    // alert("i'm in add to cart function");
    var checkedRadio = $("#hotelsColumnMiddle").find(' td input:radio:checked')
    console.log(checkedRadio);
    hotel = [];
    price = 0;
    for (var i = 0; i < checkedRadio.length; i++) {
        // get the checked radio button value , which matches the row number
        var x = checkedRadio[i].value;
        // alert("i am here:");
        $(`#hotelTableDataRow${x} td`).each(function () {
            if ($(this).text() != "") {
                hotel.push($(this).text());
            }
            if ($(this).text().startsWith('$')) {
                var priceNoDollarSign = $(this).text().replace(/[^0-9]/g, '');
                price += parseInt(priceNoDollarSign);
            }
        });

    }
    var element = $("#hotelsColumnMiddle").find('#hotelCartInfo');
    alert("You added to cart: \n" + hotel.join('\n'));
    alert("Total hotel Price: $" + price);
    element.text("You added: " + hotel + ". Total hotel price: $" + price);
    sessionStorage.setItem("hotelTotal", price);
    // alert(sessionStorage.getItem("OneWayFlightTotal"));
    sessionStorage.setItem("hotelInfo", hotel);
    // alert(sessionStorage.getItem("OneWayFlightInfo"));

}

$("#hotelsColumnMiddle").on('click', '#hotelCart', function () {
    hotelAddToCart();
})

//rental add to cart function
function rentalAddToCart() {
    // alert("i'm in add to cart function");
    var checkedRadio = $("#rentalsColumnMiddle").find(' td input:radio:checked')
    rental = [];
    price = 0;
    for (var i = 0; i < checkedRadio.length; i++) {
        // get the checked radio button value , which matches the row number
        var x = checkedRadio[i].value;

        $(`#rentalTableDataRow${x} td`).each(function () {
            if ($(this).text() != "")
                rental.push($(this).text());
            if ($(this).text().startsWith('$')) {
                var priceNoDollarSign = $(this).text().replace(/[^0-9]/g, '');
                price += parseInt(priceNoDollarSign);
            }
        });

    }
    var element = $("#rentalsColumnMiddle").find('#rentalCartInfo');
    alert("You added to cart: \n" + rental.join('\n'));
    alert("Total rental car Price: $" + price);
    element.text("You added: " + rental + ". Total rental price: $" + price);
    sessionStorage.setItem("rentalTotal", price);
    // alert(sessionStorage.getItem("OneWayFlightTotal"));
    sessionStorage.setItem("rentalInfo", rental);
    // alert(sessionStorage.getItem("OneWayFlightInfo"));

}

$("#rentalsColumnMiddle").on('click', '#rentalCart', function () {
    rentalAddToCart();
})

function displayMyCart() {
    try {

        if (sessionStorage.getItem("OneWayFlightInfo")) {
            var oneWayFlightInfo = sessionStorage.getItem("OneWayFlightInfo");
            var oneWayFlightTotal = parseInt(sessionStorage.getItem("OneWayFlightTotal"));
        } else {
            var oneWayFlightTotal = 0;
        }
        if (sessionStorage.getItem("roundTripFlightInfo")) {
            var roundTripFlightInfo = sessionStorage.getItem("roundTripFlightInfo");
            var roundTripFlighTotal = parseInt(sessionStorage.getItem("roundTripFlightTotal"));
        } else {
            var roundTripFlighTotal = 0;
        }
        if (sessionStorage.getItem("hotelInfo")) {
            var hotelInfo = sessionStorage.getItem("hotelInfo");
            var hotelTotal = parseInt(sessionStorage.getItem("hotelTotal"));
        } else var hotelTotal = 0;

        if (sessionStorage.getItem("rentalInfo")) {
            var rentalInfo = sessionStorage.getItem("rentalInfo");
            var rentalTotal = parseInt(sessionStorage.getItem("rentalTotal"));
        } else var rentalTotal = 0;

        var grandTotal = hotelTotal + rentalTotal + oneWayFlightTotal + roundTripFlighTotal;

        if (oneWayFlightInfo) {
            $(`.myCartP1`).text("Oneway flight info: " + oneWayFlightInfo + ". OneWay flight total:$ " + oneWayFlightTotal);
        }
        if (roundTripFlightInfo) {
            $(`.myCartP2`).text("Round-trip flight info:" + roundTripFlightInfo + ". Round-Trip flight total: $ " + roundTripFlighTotal);
        }
        if (hotelInfo) {
            $(`.myCartP3`).text("Hotel info:" + hotelInfo + ". Hotel total: $" + hotelTotal);
        }
        if (rentalInfo) {
            $(`.myCartP4`).text("Rental Car info:" + rentalInfo + ". Rental car total: $" + rentalTotal);
        }
        if (grandTotal == 0) {
            $(`.myCartP5`).text(" You have not selected anything! Grand Total:$ " + grandTotal);
        } else {
            $(`.myCartP5`).text("Grand Total:$ " + grandTotal);
        }


    } catch {
        alert("Error! Something is wrong, please refresh the page and try again!  ")
    }
}

// assignment 5 , validate  
////create JSON object

function registerInfoConvertToJSON() {
    var count = 0;
    var fname = document.getElementById("registerfname").value;
    var lname = document.getElementById("registerlname").value;
    var passengerID = document.getElementById("passengerID").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("registerEmail").value;
    var age = document.getElementById("registerAge").value;
    if (age == "") {
        alert("age is required !");
        count++;
    }
    if (fname == "") {
        alert("First name is required !");
        count++;
    }

    if (lname == "") {
        alert("Last name is required !");
        count++;
    }

    if (/\d/.test(fname)) {
        alert("First name should be alphabetic only !");
        count++;
    }

    if (/\d/.test(lname)) {
        alert("Last name should be alphabetic only !");
        count++;
    }

    if (fname == lname && fname != "" && lname != "") {
        alert("First name and Last Name can't be the same!");
        count++;
    }

    if (password == "" || confirmPassword == "") {
        alert("password is required , please re-enter");
        count++;
    }

    if (password != confirmPassword) {
        alert("password are not the same, please re-enter");
        count++;
    }

    if (password.length < 8 || confirmPassword.length < 8) {
        alert("password must be at least 8 characters ");
        count++;
    }
    // if (fname[0] != fname[0].toUpperCase()) {
    //     alert("First Name First character should be Capital Letter! Please enter again! ");
    //     count++;
    // }

    // if (lname[0] != lname[0].toUpperCase()) {
    //     alert("Last Name First character should be Capital Letter! Please enter again! ");
    //     count++;
    // }

    if (!email.includes(".") || (!email.includes("@"))) {
        alert("Email address should contain @ and '.', please try again");
        count++;
    }

    // if (comment.length < 10) {
    //     alert("Comments should be at least 10 characters, please try again");
    //     count++;
    // }

    var regExp = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
    if (!passengerID.match(regExp) || passengerID == "" || passengerID == null) {
        alert("passengerID format should be (xxx)xxx-xxxx,  please try again");
        count++;
    }


    if (count > 0) return
    // document.getElementById("jsonOutput").innerHTML = "First Name: " + fname + '<br>'
    //     + "Last Name: " + lname + '<br>'
    //     + "First Name: " + fname + '<br>'
    //     + "Phone Number: " + phoneNum + '<br>'
    //     + "Male:" + isMale + '<br>'
    //     + "Female: " + isFemale + '<br>'
    //     + "Email: " + email + '<br>'
    //     + "comment: " + comment + '<br>'

    var jsObj = { FirstName: fname, LastName: lname, PassengerID: passengerID, Age: age, Email: email, Password: password };
    var myJSON = JSON.stringify(jsObj);
    document.getElementById("registerOutput").innerHTML = myJSON;
}