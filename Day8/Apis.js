var city = "Delhi";

async function fetchWeather(city){
    try{
        let reponse = await fetch("https://openweathermap.org/api/${city}");
        let weather = await Response.json();
        console.log("The weather details for "+city+ " is as follows...");
        console.log(weather);
    }catch(error){
        console.error("Error: "+ error);
    }
}

fetchWeather(city);
