$(document).ready(function(){


var cityName = $("#userCity".text);
var currentDay = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1e5b1e82033f913ca953c232c1749468";
var fiveDay = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=1e5b1e82033f913ca953c232c1749468";

$("#cityButton").on("click", function(){
    console.log(cityName);
})


})
