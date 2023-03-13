

const fancyList = document.querySelector('.fancy-list');
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
  fancyList.textContent = "";

  for (let i = 0; i < data.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = data[i].title;
    fancyList.appendChild(listItem);
  }
}) ;

const kgsToUsd = document.querySelector('#kgs-usd');
fetch('http://www.floatrates.com/daily/usd.json')
.then(response => response.json())
.then(data => {
  kgsToUsd.textContent = data.kgs.rate.toFixed(2) + " сом";
});


const kgsToRub = document.querySelector('#kgs-rub');
fetch('http://www.floatrates.com/daily/rub.json')
.then(response => response.json())
.then(data => {
  kgsToRub.textContent = data.kgs.rate.toFixed(2) + " сом";
});



const weather = document.querySelector('#weather');
fetch('https://api.open-meteo.com/v1/forecast?latitude=42.4907&longitude=78.3936&current_weather=true')
.then(response => response.json())
.then(data => {
  weather.textContent = data.current_weather.temperature + " °C";
});


const astroPhoto = document.querySelector('#astro-photo');
fetch('https://go-apod.herokuapp.com/apod')
.then(response => response.json())
.then(data => {
  astroPhoto.textContent ="";

  const img = document.createElement('img');
  img.src = data.url;
  img.alt = data.title;
  img.title = data.explanation;
  img.width = 300;

  astroPhoto.append(img);
});


const randomDog = document.querySelector('#random-dog');
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
  randomDog.textContent ="";

  const img = document.createElement('img');
  img.src = data.message;
  img.width = 300;

  randomDog.append(img);
});



const boring = document.querySelector('#boring');
fetch('https://www.boredapi.com/api/activity')
.then(response => response.json())
.then(data => {
  boring.textContent = data.activity;
});



// 
document.querySelector("#guess-age").addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  fetch("https://api.agify.io?name=" + name)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#age").textContent = data.age;
    });
});


// home work