const clock = document.querySelector("h2#clock");

clock.innerText = "라라랄";

function getClock(){
    const date = new Date(); 
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${minutes}:${seconds}`;
   }

   getClock();
   setInterval(getClock,1000);

   //interval은 2개의 argument를 받는다. function이랑 시간 
   //setInterval(sayHello, 5000);
   