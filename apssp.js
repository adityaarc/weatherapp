var button = document.querySelector('.button')
var inputvalue = document.querySelector('.iv')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var long = document.querySelector('.long')
var lat = document.querySelector('.lat')
var humid = document.querySelector('.humid')
var to = document.querySelector('.to')


button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=ec1bbd45fc105715b9efd1d8f255481d')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description']
        var longValue = data['coord']['lon']
        var latValue = data['coord']['lat']
        var humidity  = data['main']['humidity']
        
        to.innerHTML = "Today's Weather";
        name.innerHTML = nameValue;
        temp.innerHTML = "Temperature :  " + Math.floor(tempValue-273)+ "°C  ";
        desc.innerHTML = descValue;
        long.innerHTML = "LongiTude :  " + longValue;
        lat.innerHTML = "LatiTude :  " + latValue;
        humid.innerHTML = "Humidity : "+ humidity;
    })
.catch(err => alert("Wrong City !!"))
})
