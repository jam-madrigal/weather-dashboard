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
          console.log(response);

        // Storing the coordinates of the city
        let cityLat = response.coord.lat;
        let cityLon = response.coord.lon;
        
        // Converting temperature response for the current day from kelvin to Fahrenheit and removing extraneous decimals
        let tempConvert = (response.main.temp-273.15)*1.8+32;
        let todayTemp = tempConvert.toFixed(1);

        // Setting the text/icon of the current day forecast divs based on the response
        $("#dayName").text(response.name);

        if (response.weather[0].main === "Clouds") {
            $("#todayIcon").attr("Class", "fa fa-cloud");
        };

        if (response.weather[0].main === "Clear") {
            $("#todayIcon").attr("Class", "fa fa-sun-o");
        };

        if (response.weather[0].main === "Rain") {
            $("#todayIcon").attr("Class", "fa fa-tint");
        };     
        
        $("#todayTemp").text(todayTemp + " " + "°F");
        $("#todayHumid").text("Humidity:" + " " + response.main.humidity+"%");
        $("#todayWind").text("Wind Speed:" + " " + response.wind.speed + " " + "MPH");

        //Logging the UV index with the above coordinates and setting it to text in the today's UV element
        var todayUV = "https://api.openweathermap.org/data/2.5/uvi?appid=1e5b1e82033f913ca953c232c1749468&lat=" + cityLat + "&lon=" + cityLon;

        $.ajax({
            url: todayUV,
            method: "GET"
          }).then(function(uvResponse) {
              console.log(uvResponse);
              $("#todayUV").text("UV Index:" + " " + uvResponse.value);

            // Color coding the UV index
            if (uvResponse.value >= 8) {
                $("#todayUV").attr("style", "background-color: red");
            }

            if (uvResponse.value > 5 && uvResponse.value < 8) {
                $("#todayUV").attr("style", "background-color: orange");
            }

            if (uvResponse.value > 2 && uvResponse.value < 6) {
                $("#todayUV").attr("style", "background-color: yellow");
            }

            if (uvResponse.value > -1 && uvResponse.value < 3) {
                $("#todayUV").attr("style", "background-color: green");
            }

        })

    })
    
    // Calling the five day forecast
    $.ajax({
        url: fiveDay,
        method: "GET"
      }).then(function(fiveResponse) {
          console.log(fiveResponse);
        // Converting the temp of the first day
        let tempConvert1 = (fiveResponse.list[5].main.temp-273.15)*1.8+32;
        let temp1 = tempConvert1.toFixed(1);
        // Setting the daily forecast
        $("#day1").text(fiveResponse.list[5].dt_txt);
        // Icon for day 1
        if (fiveResponse.list[5].weather[0].main === "Clouds") {
            $("#icon1").attr("Class", "fa fa-cloud");
        };
    
        if (fiveResponse.list[5].weather[0].main === "Clear") {
            $("#icon1").attr("Class", "fa fa-sun-o");
        };
    
        if (fiveResponse.list[5].weather[0].main === "Rain") {
            $("#icon1").attr("Class", "fa fa-tint");
        }; 
        // Temp and humidity
        $("#temp1").text(temp1 + " " + "°F");
        $("#humid1").text("Humidity:" + " " + fiveResponse.list[5].main.humidity);

        // Day 2
        let tempConvert2 = (fiveResponse.list[13].main.temp-273.15)*1.8+32;
        let temp2 = tempConvert2.toFixed(1);
        // Setting the daily forecast
        $("#day2").text(fiveResponse.list[13].dt_txt);
        // Icon for day 2
        if (fiveResponse.list[13].weather[0].main === "Clouds") {
            $("#icon2").attr("Class", "fa fa-cloud");
        };
    
        if (fiveResponse.list[13].weather[0].main === "Clear") {
            $("#icon2").attr("Class", "fa fa-sun-o");
        };
    
        if (fiveResponse.list[13].weather[0].main === "Rain") {
            $("#icon2").attr("Class", "fa fa-tint");
        }; 
        // Temp and humidity
        $("#temp2").text(temp2 + " " + "°F");
        $("#humid2").text("Humidity:" + " " + fiveResponse.list[13].main.humidity);

        // Day 3
        let tempConvert3 = (fiveResponse.list[21].main.temp-273.15)*1.8+32;
        let temp3 = tempConvert3.toFixed(1);
        // Setting the daily forecast
        $("#day3").text(fiveResponse.list[21].dt_txt);
        // Icon for day 3
        if (fiveResponse.list[21].weather[0].main === "Clouds") {
            $("#icon3").attr("Class", "fa fa-cloud");
        };
    
        if (fiveResponse.list[21].weather[0].main === "Clear") {
            $("#icon3").attr("Class", "fa fa-sun-o");
        };
    
        if (fiveResponse.list[21].weather[0].main === "Rain") {
            $("#icon3").attr("Class", "fa fa-tint");
        }; 
        // Temp and humidity
        $("#temp3").text(temp3 + " " + "°F");
        $("#humid3").text("Humidity:" + " " + fiveResponse.list[21].main.humidity);
        
        // Day 4
        let tempConvert4 = (fiveResponse.list[13].main.temp-273.15)*1.8+32;
        let temp4 = tempConvert4.toFixed(1);
        // Setting the daily forecast
        $("#day4").text(fiveResponse.list[29].dt_txt);
        // Icon for day 4
        if (fiveResponse.list[29].weather[0].main === "Clouds") {
            $("#icon4").attr("Class", "fa fa-cloud");
        };
    
        if (fiveResponse.list[29].weather[0].main === "Clear") {
            $("#icon4").attr("Class", "fa fa-sun-o");
        };
    
        if (fiveResponse.list[29].weather[0].main === "Rain") {
            $("#icon4").attr("Class", "fa fa-tint");
        }; 
        // Temp and humidity
        $("#temp4").text(temp4 + " " + "°F");
        $("#humid4").text("Humidity:" + " " + fiveResponse.list[29].main.humidity);

        // Day 5
        let tempConvert5 = (fiveResponse.list[37].main.temp-273.15)*1.8+32;
        let temp5 = tempConvert5.toFixed(1);
        // Setting the daily forecast
        $("#day5").text(fiveResponse.list[37].dt_txt);
        // Icon for day 5
        if (fiveResponse.list[37].weather[0].main === "Clouds") {
            $("#icon5").attr("Class", "fa fa-cloud");
        };
    
        if (fiveResponse.list[37].weather[0].main === "Clear") {
            $("#icon5").attr("Class", "fa fa-sun-o");
        };
    
        if (fiveResponse.list[37].weather[0].main === "Rain") {
            $("#icon5").attr("Class", "fa fa-tint");
        }; 
        // Temp and humidity
        $("#temp5").text(temp5 + " " + "°F");
        $("#humid5").text("Humidity:" + " " + fiveResponse.list[37].main.humidity);

    })

})


})
