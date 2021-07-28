# OpenWeatherMap API

## Instructions
1. Take a look at the OpenWeatherMap API documentation: http://openweathermap.org/current.
2. Get an API key from OpenWeatherMap: http://openweathermap.org/appid#get.
3. Add an event for the form submit in your main.js file. (Don't forget to prevent the default action for forms so that the page won't refresh.)
4. When the form is submitted:
	- Get the value the user entered into the `#city` field and store it in a variable `cityName`.
	- Use the `fetch()` method to write a request to the API:
		- **url:** See hint below to find out how the URL should be formatted, or look at the documentation.
		- **.then:** Chain your `.then()`s together. Don't forget to use the `.json()` method!
5. Take the data from the API and display it in the DOM. Example: "The weather in {city} is {75} degrees."
6. **Hint** - you can request that the temperature units come back in either Metric or Imperial formats: https://openweathermap.force.com/s/article/switching-between-temperature-units-2019-10-24-21-47-24
7. **Bonus:** Implement a feature that allows the user to select what temperature unit they'd like their data to come back in (Farenheit, Celcius, Kelvin)
8. **Bonus:** Add a function that will run if there is an error with the request. Display an error message if this is the case.




## Hints
Here's what a sample URL will look like:

```js
'http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=02e84210a52ed716535f02989864d080'
```
Following this format:

```js
'http://api.openweathermap.org/data/2.5/weather?q=City&units=imperial&appid=yourAppKey'
```

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";


// Get an api key: http://openweathermap.org/appid#get
const key = 'Your key here';

