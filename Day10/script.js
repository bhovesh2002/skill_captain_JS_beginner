const api = "API KEY";

const getWeatherButton = document.getElementById("search");
const cityName = document.getElementById("cityName");
const result = document.getElementById("weather");

getWeatherButton.addEventListener('click', () =>{
    const city = cityName.value;
    if(city){
        fetchWeather(city);
    }
});

function fetchWeather(city){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error =>{
            console.error("Error: "+ error);
        });
}

function displayWeather(data){
    const temperature = data.main.temp;
    const desc = data.weather[0].desc;

    const weatherInfo = {
        "temperature": temperature,
        "Weather": desc
    };
    result.innerHTML = weatherInfo;
}
