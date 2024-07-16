
//argument가 2개 필요함 
// 1. 모든게 잘됐을때 실행될함수, 에러날때 실행함수
// 5e3539262d5fa9adf2fb029dd19d280b api key


const API_KEY ="5e3539262d5fa9adf2fb029dd19d280b";
function onGeoOk(position){
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / 현재 온도: ${data.main.temp}도`;
    } );
}

function onGeoError(){
    alert("Can't find you. No Weather");

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
