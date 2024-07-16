const images =["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

const chosenImage = images[Math.floor(Math.random()* images.length)];

//이제 image를 html에 추가해야한다. 
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.id = "randomImage"; // id 속성 추가

document.body.appendChild(bgImage);