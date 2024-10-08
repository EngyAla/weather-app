const apiKey = "0c42f7f6b53b244c78a418f4f181282a";
const apiUrl = "https://api.openweathermap.org./data/2.5/weather?&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search .secrch_icon")
const weatherIcon = document.querySelector(".weather_icon")

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    // console.log(data)
    if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".detailes").style.display = "none"
    document.querySelector(".weather").style.display = "none"
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp - 273.15) + "°C";
        document.querySelector(".humidity_val").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed_val").innerHTML = data.wind.speed + " Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "flex"
        document.querySelector(".detailes").style.display = "flex"
        document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener("click" , () =>{
    checkweather(searchBox.value)
})
