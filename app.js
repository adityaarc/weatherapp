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
        console.log(data);

        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var longValue = data['coord']['lon'];
        var latValue = data['coord']['lat'];
        var humidity  = data['main']['humidity'];
        var iconid = data['weather'][0]['icon'];
        
        to.innerHTML = "Today's Weather";
        name.innerHTML = nameValue;
        temp.innerHTML = "Temperature :  " + Math.floor(tempValue-273)+ "°C  ";
        desc.innerHTML = descValue;
        long.innerHTML = "LongiTude :  " + longValue;
        lat.innerHTML = "LatiTude :  " + latValue;
        humid.innerHTML = "Humidity : "+ humidity;

        
    if (iconid.localeCompare("10d")==0){
        document.body.style.backgroundImage= `url('09n.jpg')`;
    }
    else if (iconid.localeCompare("02d")==0){
        document.body.style.backgroundImage= `url('02d.jpg')`;
    }
    else if (iconid.localeCompare("02n")==0){
        document.body.style.backgroundImage= `url('02n.jpg')`;
    }
    else if (iconid.localeCompare("03d")==0){
        document.body.style.backgroundImage= `url('03d.jpg')`;
    }
    else if (iconid.localeCompare("03n")==0){
        document.body.style.backgroundImage= `url('03n.jpg')`;
    }
    else if (iconid.localeCompare("04d")==0){
        document.body.style.backgroundImage= `url('04d.jpg')`;
    }
    else if (iconid.localeCompare("04n")==0){
        document.body.style.backgroundImage= `url('04n.jpg')`;
    }
    else if (iconid.localeCompare("09d")==0){
        document.body.style.backgroundImage= `url('09d.jpg')`;
    }
    else if (iconid.localeCompare("09n")==0){
        document.body.style.backgroundImage= `url('09n.jpg')`;
    }
    else if (iconid.localeCompare("10n")==0){
        document.body.style.backgroundImage= `url('10n.jpg')`;
    }
    else if (iconid.localeCompare("11d")==0){
        document.body.style.backgroundImage= `url('11n.jpg')`;
    }
    else if (iconid.localeCompare("11n")==0){
        document.body.style.backgroundImage= `url('11n.jpg')`;
    }
    
    else if (iconid.localeCompare("50n")==0){
        document.body.style.backgroundImage= `url('50d.jpg')`;
    }
    else{
        document.body.style.backgroundImage= `url('f1.jpg')`;
    }

    })


    .catch(err => alert("Wrong City !!"))
    })
