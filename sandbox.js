window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=30993fcfddf5e5dc0d751ef71eb430e4')
    .then(res => res.json())
    // .then(resJson => console.log(resJson))
    // .then(resJson => console.log(resJson.main.temp))

// document.getElementById("temp"). innerHTML = (resJson => console.log(resJson.main.temp))
// const meet = Object.assign(resJson);





// .then(resJson => document.getElementById("temp"). innerHTML =(resJson.weather))

 .then(resJson => document.getElementById("temp"). innerHTML =(resJson.main.temp));

 

// then(resJson => console.log(resJson.weather[0].description));*


