$(document).ready(function(){

    var currentDay = "api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=1e5b1e82033f913ca953c232c1749468";
    var fiveDay = "api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=1e5b1e82033f913ca953c232c1749468";



$("#cityButton").on("click", function(){
    var userCity = $("#userCity").val();

    console.log(userCity);
})


})
