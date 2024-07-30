const apikey="5329c77fca38e8923f27bd1eabb6fda1"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata";

async function checkWeather(){
    const responce =  await fetch(apiurl + `&appid=${apikey}`);
    let data = await responce.json();
    console.log(data);

    document.querySelector("#nowTemp").innerHTML=data.main.temp.toFixed(0);
    document.querySelector("#Temp").innerHTML=data.main.temp.toFixed(0);
    

}

checkWeather()

