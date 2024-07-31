const apikey="5329c77fca38e8923f27bd1eabb6fda1"
const apiurl="http://api.openweathermap.org/data/2.5/weather?q=Agra&units=metric";

setInterval(()=>{
    let d = new Date();
    document.querySelector("#time").innerHTML = d.toLocaleTimeString();
},1000)

let c = new Date();
let date = c.getDate();
let month = c.getMonth() +1;
let year = c.getFullYear();
let fullYear = document.getElementById("current_date");
fullYear.innerHTML = `${date}/${month}/${year}`;

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const d = new Date();
let day = days[ d.getDay() ];
document.querySelector("#weakDay").innerHTML=day;

async function checkWeather(){
    const responce =  await fetch(apiurl + `&appid=${apikey}`);
    let data = await responce.json();
    console.log(data);

    document.querySelector("#nowTemp").innerHTML=data.main.temp.toFixed(0);
    document.querySelector("#Temp").innerHTML=data.main.temp.toFixed(0);
    document.querySelector("#location").innerHTML=data.name;
    document.querySelector("#humidity").innerHTML=data.main.humidity;
    document.querySelector("#windSpeed").innerHTML=data.wind.speed.toFixed(0);
    document.querySelector("#feels").innerHTML=data.main.feels_like.toFixed(0);
    document.querySelector("#weather_main").innerHTML=data.weather[0].main;

}

checkWeather()

