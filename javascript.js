$(document).ready(function(){
    
// Storing the user's city input on button click and console logging the response from an ajax call based on that input
$("#cityButton").on("click", function(){
    // Variable to store user input city
    var userCity = $("#userCity").val();
    // Variable to hold the url for the current day forecast
    var currentDay = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=1e5b1e82033f913ca953c232c1749468";
    // Variable to hold the url for a 5 day forecast
    var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=1e5b1e82033f913ca953c232c1749468";
    

// Start the ajax call using the user's city input and console logging the responses for current day and then five day forecasts

    $.ajax({
        url: currentDay,
        method: "GET"
      }).then(function(response) {
          console.log(response)

        // Storing the coordinates of the city
        let cityLat = response.coord.lat;
        let cityLon = response.coord.lon;


     
        
        // Converting temperature response for the current day from kelvin to Fahrenheit and removing extraneous decimals
        let tempConvert = (response.main.temp-273.15)*1.8+32;
        let todayTemp = tempConvert.toFixed(1);

        // Setting the text of the current day forecast divs based on the response
        $("#dayName").text(response.name);
        $("#todayTemp").text(todayTemp + " " + "°F");
        $("#todayHumid").text("Humidity:" + " " + response.main.humidity+"%");
        $("#todayWind").text("Wind Speed:" + " " + response.wind.speed + " " + "MPH");

        //Logging the UV index with the above coordinates and setting it to text in the today's UV element
        var todayUV = "https://api.openweathermap.org/data/2.5/uvi?appid=1e5b1e82033f913ca953c232c1749468&lat=" + cityLat + "&lon=" + cityLon;

        $.ajax({
            url: todayUV,
            method: "GET"
          }).then(function(uvResponse) {
              console.log(uvResponse)
              $("#todayUV").text("UV Index:" + " " + uvResponse.value);
        })

    })
    
    // Calling the five day forecast
    $.ajax({
        url: fiveDay,
        method: "GET"
      }).then(function(fiveResponse) {
          console.log(fiveResponse)
    })

})


})
