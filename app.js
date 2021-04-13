// document.getElementById("card_322")
var x = document.querySelector("#card_322 div div div h1");
var temp = "";

fetch("http://api.openweathermap.org/data/2.5/weather?id=3488020&appid=77be55a810a45d9b2d92b649d85cb836")
    .then(res => res.json())
    .then(res_json => {
        temp = res_json["main"]["temp"] - 273;
        temp = temp.toFixed(0);
        x.innerHTML = `${temp} &#8451`;
        console.log(temp);
    });

// console.log(x)

// 77be55a810a45d9b2d92b649d85cb836
//"id":3488020