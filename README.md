# Weather Dashboard
---
A web application that will give you a 5 day forecast for any given city.
---
## Features
- Submit any city
- Receive back the current forecast, as well as the temperature, humidity, wind speed, and the UV index
---
### Pseudocode
- A top banner with "weather dashboard" 
- On the top left below the banner, there will be a submit with a button
- The submit will record the user's input on click
- The input will be saved and generate a button below the submit entry box/button
- This generated button will perform the same ajax call/generation function, but will consider the button text the user    input when it runs
- The input will be ran through an ajax call to query the weather api
- The weather api will return information like temperature, humidity, wind speed, and uv index for the week
- After this information is stored, a card area to the right of the city list/submit form will be generated
- There will be one main card div that displays the weather information for the current day
- Below this, there will be a forecast of the next 5 days in their own small cards
- The UV index stat will be color-coded
- An icon for cloudy, sunny, or rainy will be present next to the date/city name