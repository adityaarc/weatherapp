const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const humidity = document.querySelector(".humid");
const latitude = document.querySelector(".lat");
const longitude = document.querySelector(".lon");
const wspeed = document.querySelector(".speed");
const press = document.querySelector(".pressure");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "ec1bbd45fc105715b9efd1d8f255481d";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ec1bbd45fc105715b9efd1d8f255481d`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            console.log(data);
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity= data.main.humidity;
            weather.latitude= data.coord.lat;
            weather.longitude=data.coord.lon;
            weather.wspeed=data.wind.speed;
            weather.press= data.main.pressure;
            weather.max= data.main.temp_max;
            weather.min= data.main.temp_min;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}`;
    humidity.innerHTML= `Humidity : ${weather.humidity}`;
    latitude.innerHTML= `Lattitude : ${weather.latitude}`;
    longitude.innerHTML= `Longitude : ${weather.longitude}`;
    press.innerHTML= `Pressure : ${weather.press}`
    wspeed.innerHTML= `Wind Speed : ${weather.wspeed}`;
    
    max.innerHTML = "Temperature Max:  " + Math.floor(weather.max-272)+ "°C  ";
    min.innerHTML = "Temperature Min :  " + Math.floor(weather.min-273)+ "°C  ";;

    if (weather.iconId.localeCompare("10d")==0){
        document.body.style.backgroundImage= `url('09n.jpg')`;
    }
    else if (weather.iconId.localeCompare("02d")==0){
        document.body.style.backgroundImage= `url('02d.jpg')`;
    }
    else if (weather.iconId.localeCompare("02n")==0){
        document.body.style.backgroundImage= `url('02n.jpg')`;
    }
    else if (weather.iconId.localeCompare("03d")==0){
        document.body.style.backgroundImage= `url('03d.jpg')`;
    }
    else if (weather.iconId.localeCompare("03n")==0){
        document.body.style.backgroundImage= `url('03n.jpg')`;
    }
    else if (weather.iconId.localeCompare("04d")==0){
        document.body.style.backgroundImage= `url('04d.jpg')`;
    }
    else if (weather.iconId.localeCompare("04n")==0){
        document.body.style.backgroundImage= `url('04n.jpg')`;
    }
    else if (weather.iconId.localeCompare("09d")==0){
        document.body.style.backgroundImage= `url('09d.jpg')`;
    }
    else if (weather.iconId.localeCompare("09n")==0){
        document.body.style.backgroundImage= `url('09n.jpg')`;
    }
    
    else if (weather.iconId.localeCompare("10n")==0){
        document.body.style.backgroundImage= `url('10n.jpg')`;
    }
    else if (weather.iconId.localeCompare("11d")==0){
        document.body.style.backgroundImage= `url('11n.jpg')`;
    }
    else if (weather.iconId.localeCompare("11n")==0){
        document.body.style.backgroundImage= `url('11n.jpg')`;
    }
    else if (weather.iconId.localeCompare("50n")==0){
        document.body.style.backgroundImage= `url('50d.jpg')`;
    }
    else{
        document.body.style.backgroundImage= `url('f1.jpg')`;
    }

}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});

