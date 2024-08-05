const apikey="5329c77fca38e8923f27bd1eabb6fda1"

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

// Searching Location Weather:-
async function checkWeather(city){
    apiurl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
    const responce =  await fetch(apiurl + `&appid=${apikey}`);
    let data = await responce.json();
    document.querySelector("#nowTemp").innerHTML=data.main.temp.toFixed(0);
    document.querySelector("#Temp").innerHTML=data.main.temp.toFixed(0);
    document.querySelector("#location").innerHTML=data.name;
    document.querySelector("#humidity").innerHTML=data.main.humidity;
    document.querySelector("#windSpeed").innerHTML=data.wind.speed.toFixed(0);
    document.querySelector("#feels").innerHTML=data.main.feels_like.toFixed(0);
    document.querySelector("#weather_main").innerHTML=data.weather[0].main;

    let b = document.querySelector("#lowermain_png")
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}

// Weather in Delhi:-
const apiurl_Delhi="http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric";
async function checkWeather_Delhi(){
    const responce_delhi =  await fetch(apiurl_Delhi + `&appid=${apikey}`);
    let data_delhi = await responce_delhi.json();
    document.querySelector("#delhi_temp").innerHTML=data_delhi.main.temp.toFixed(0);
    document.querySelector("#location_Delhi").innerHTML=data_delhi.name;
    document.querySelector("#delhi_humidity").innerHTML=data_delhi.main.humidity;
    document.querySelector("#delhi_windSpeed").innerHTML=data_delhi.wind.speed.toFixed(0);
    document.querySelector("#delhi_weather").innerHTML=data_delhi.weather[0].main;
    let b = document.querySelector("#delhi_png")
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data_delhi.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data_delhi.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data_delhi.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data_delhi.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data_delhi.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data_delhi.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data_delhi.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data_delhi.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}

//Weather in Kolkata:-
const apiurl_Kolkata="http://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric";
async function checkWeather_Kolkata(){
    const responce_kolkata =  await fetch(apiurl_Kolkata + `&appid=${apikey}`);
    let data_kolkata = await responce_kolkata.json();

    document.querySelector("#kolkata_temp").innerHTML=data_kolkata.main.temp.toFixed(0);
    document.querySelector("#location_Kolkata").innerHTML=data_kolkata.name;
    document.querySelector("#kolkata_humidity").innerHTML=data_kolkata.main.humidity;
    document.querySelector("#kolkata_windSpeed").innerHTML=data_kolkata.wind.speed.toFixed(0);
    document.querySelector("#kolkata_weather").innerHTML=data_kolkata.weather[0].main;
    let b = document.querySelector("#kolkata_png")
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data_kolkata.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data_kolkata.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data_kolkata.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data_kolkata.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data_kolkata.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data_kolkata.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data_kolkata.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data_kolkata.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}

//Weather in Mumbai:-
const apiurl_Mumbai="http://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric";
async function checkWeather_Mumbai(){
    const responce_mumbai =  await fetch(apiurl_Mumbai + `&appid=${apikey}`);
    let data_mumbai = await responce_mumbai.json();

    document.querySelector("#mumbai_temp").innerHTML=data_mumbai.main.temp.toFixed(0);
    document.querySelector("#location_Mumbai").innerHTML=data_mumbai.name;
    document.querySelector("#mumbai_humidity").innerHTML=data_mumbai.main.humidity;
    document.querySelector("#mumbai_windSpeed").innerHTML=data_mumbai.wind.speed.toFixed(0);
    document.querySelector("#mumbai_weather").innerHTML=data_mumbai.weather[0].main;
    let b = document.querySelector("#mumbai_png")
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data_mumbai.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data_mumbai.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data_mumbai.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data_mumbai.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data_mumbai.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data_mumbai.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data_mumbai.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data_mumbai.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}

//Weather in Hyderabad:-
const apiurl_Hyderabad="http://api.openweathermap.org/data/2.5/weather?q=Hyderabad&units=metric";
async function checkWeather_Hyderabad(){
    const responce_Hyderabad =  await fetch(apiurl_Hyderabad + `&appid=${apikey}`);
    let data_hyderabad = await responce_Hyderabad.json();

    document.querySelector("#hyderabad_temp").innerHTML=data_hyderabad.main.temp.toFixed(0);
    document.querySelector("#location_Hyderabad").innerHTML=data_hyderabad.name;
    document.querySelector("#hyderabad_humidity").innerHTML=data_hyderabad.main.humidity;
    document.querySelector("#hyderabad_windSpeed").innerHTML=data_hyderabad.wind.speed.toFixed(0);
    document.querySelector("#hyderabad_weather").innerHTML=data_hyderabad.weather[0].main;
    let b = document.querySelector("#hyderabad_png")
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data_hyderabad.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data_hyderabad.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data_hyderabad.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data_hyderabad.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data_hyderabad.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data_hyderabad.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data_hyderabad.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data_hyderabad.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}
//Weather in Bangalore:-
const apiurl_Bangalore="http://api.openweathermap.org/data/2.5/weather?q=Bangalore&units=metric";
async function checkWeather_Bangalore(){
    const responce_Bangalore =  await fetch(apiurl_Bangalore + `&appid=${apikey}`);
    let data_bangalore = await responce_Bangalore.json();

    document.querySelector("#bangalore_temp").innerHTML=data_bangalore.main.temp.toFixed(0);
    document.querySelector("#location_Bangalore").innerHTML=data_bangalore.name;
    document.querySelector("#bangalore_humidity").innerHTML=data_bangalore.main.humidity;
    document.querySelector("#bangalore_windSpeed").innerHTML=data_bangalore.wind.speed.toFixed(0);
    document.querySelector("#bangalore_weather").innerHTML=data_bangalore.weather[0].main;
    let b = document.querySelector("#bangalore_png");
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data_bangalore.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data_bangalore.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data_bangalore.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data_bangalore.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data_bangalore.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data_bangalore.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data_bangalore.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data_bangalore.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}

//Weather in Chennai:-
const apiurl_Chennai="http://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric";
async function checkWeather_Chennai(){
    const responce_Chennai =  await fetch(apiurl_Chennai + `&appid=${apikey}`);
    let data_chennai = await responce_Chennai.json();
    document.querySelector("#chennai_temp").innerHTML=data_chennai.main.temp.toFixed(0);
    document.querySelector("#location_Chennai").innerHTML=data_chennai.name;
    document.querySelector("#chennai_humidity").innerHTML=data_chennai.main.humidity;
    document.querySelector("#chennai_windSpeed").innerHTML=data_chennai.wind.speed.toFixed(0);
    document.querySelector("#chennai_weather").innerHTML=data_chennai.weather[0].main;
    let b = document.querySelector("#chennai_png")
    let d = new Date();
    let a = d.getHours();
    // in day
    if(a>=6 && a<=18){
        if(data_chennai.weather[0].main==="Mist"){
        b.src="./image/Mist_day.png";
        } else if (data_chennai.weather[0].main === "Rain") {
            b.src = "./image/Rain.png";
        } else if (data_chennai.weather[0].main === "Clouds") {
            b.src = "./image/cloudy-day.png";
        }else if(data_chennai.weather[0].main === "Haze"){
            b.src = "./image/day_haze.png";
        }else{
            b.src = "./image/sunny.png";
        }
    }
    //in night
    else{
        if(data_chennai.weather[0].main==="Mist"){
            b.src="./image/Mist_night.png";
            } else if (data_chennai.weather[0].main === "Rain") {
                b.src = "./image/Rain.png";
            } else if (data_chennai.weather[0].main === "Clouds") {
                b.src = "./image/cloudy-night_6642952.png";
            }else if(data_chennai.weather[0].main === "Haze"){
                b.src = "./image/night_haze.png";
            }else{
                b.src = "./image/night.png";
            }
    }
}

checkWeather("Agra")
checkWeather_Delhi()
checkWeather_Kolkata()
checkWeather_Mumbai()
checkWeather_Hyderabad()
checkWeather_Bangalore()
checkWeather_Chennai()
function search(){
    city=document.querySelector("#display").value;
        checkWeather(city);
        document.querySelector("#display").value="";
}

